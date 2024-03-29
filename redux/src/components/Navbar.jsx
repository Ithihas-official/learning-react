import React from "react";
import { CartIcon } from "./../icons.jsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const { amount } = cart;
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
