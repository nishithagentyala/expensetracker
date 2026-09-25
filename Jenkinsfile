pipeline{
    agent any
    tools{
        jdk 'javajdk'
        nodejs 'node22'
    }
    triggers {
        githubPush()
    }
    environment{
        SCANNER_HOME=tool 'sonar'
    }
    stages{
        stage("clean workspace"){
            steps{
                cleanWs()
                }
        }
        stage("code"){
            steps{
                git 'https://github.com/nishithagentyala/expensetracker.git'
            }
        }
        stage("sonarqube scanner"){
            steps{
              withSonarQubeEnv('sonar') {
            sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=expensetracker \
                    -Dsonar.projectKey=expensetracker  '''
            }
            }
        }
        stage("quality gate"){
            steps{
                script{
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar-id'
                }
            }
        }
        stage("Install dependencies"){
            steps{
              sh 'npm install'  
            }
        }
        stage("build application"){
            steps{
                sh 'npm run build'
            }
        }
        stage("create image"){
            steps{
                sh 'docker build -t gentyala/expensetracker:v1 .'
            }
        }
        stage("Trivy"){
            steps{
                sh 'trivy fs . >> trivy.txt'
            }
        }
        stage("Scan image"){
            steps{
                sh 'trivy image gentyala/expensetracker:v1 >> trivyimage.txt'
            }
        }
        stage("Push to DockerHub"){
            steps{
                script{
                withDockerRegistry(credentialsId: 'docker-id') {
                    sh 'docker push gentyala/expensetracker:v1'
              }
                }
            }
        }
       stage("Deploy to Kubernetes") {
    steps {
        sh 'kubectl apply -f k8s/deployment.yml -n expensetracker'
        sh 'kubectl apply -f k8s/Service.yml -n expensetracker'
    }
}

    }
}


