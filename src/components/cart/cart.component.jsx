import React from "react";

import CustomButton from "../customButton/customButton.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import "./cart.styles.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  //doesn't render every time state changes
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);
