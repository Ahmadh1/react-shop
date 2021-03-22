import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../images/goods.png";
import { useState } from "react";
const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const { cartItems } = useSelector((state) => state.CartReducer);
  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Mobile Store" className="logo" />
          </Link>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/cart" className="navbar-item has-text-danger">
                <HiOutlineShoppingBag />
                &nbsp;({cartItems.length > 0 ? cartItems.length : 0})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
