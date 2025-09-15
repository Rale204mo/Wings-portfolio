// src/App.js
import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Customers from "./components/Customers/Customers";
import Sales from "./components/Sales/Sales";
import Stock from "./components/Stock/Stock";
import Reports from "./components/Reports/Reports";

function App() {

  useEffect(() => {
    // 👇 Replace with your Render backend URL
    fetch("https://wings-cafe-2-cbps.onrender.com/api/data")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <div>
      <Header />
      <Dashboard />
      <Products />
      <Customers />
      <Sales />
      <Stock />
      <Reports />
    </div>
  );
}

export default App;
