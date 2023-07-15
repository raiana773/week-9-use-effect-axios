import React, { useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const API = " http://localhost:8001/computers";
const App = () => {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
  }
  return <MainRoutes />;
};

export default App;
