import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>Sodas</h1>
      <p>Refreshing, LOTS OF SUGAR THOUGH!!!</p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Soda;
