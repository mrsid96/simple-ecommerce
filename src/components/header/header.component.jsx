import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

const Header = connect(mapStateToProps)(({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <img alt="profile-pic" src={currentUser.photoURL} />
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      {currentUser ? <CartIcon /> : ""}
    </div>
    {!hidden ? <CartDropdown /> : ""}
  </div>
));

export default connect(mapStateToProps)(Header);
