// App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Index";
import Resume from "./components/Resume/Index";
import GlobalStyle from "./styles/global";
import Form from "./components/Form/Index";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))
      .reduce((acc, cur) => acc + cur, 0);

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))
      .reduce((acc, cur) => acc + cur, 0);

    const newTotal = (amountIncome - amountExpense).toFixed(2);
    setIncome(`R$ ${amountIncome.toFixed(2)}`);
    setExpense(`R$ ${amountExpense.toFixed(2)}`);
    setTotal(`${Number(newTotal) < 0 ? "-" : ""}R$ ${Math.abs(newTotal)}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />

      <GlobalStyle />
    </>
  );
};

export default App;
