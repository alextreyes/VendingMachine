import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <p>Sweet 'n tasty, spookt in october!</p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Candy;
