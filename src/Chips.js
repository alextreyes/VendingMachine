import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <p>Crunchy 'n Tangy chips, can never get enough of em!</p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Chips;
