import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import Addtransactions from "./components/Addtransactions";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="App">
        <Balance />
        <IncomeExpense />
        <Addtransactions />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
