import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../images/goods.png";
const Navbar = () => {

  const { cartItems } = useSelector((state) => state.CartReducer);
  return (
    <nav className="navbar is-fixed-top has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Mobile Store" className="py-4 logo" />
          </Link>
          <a className="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="navbar-menu" id="nav-links">
          <div className="navbar-start">

          </div>
          <div className="navbar-end">
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
    </nav>
  );
};

export default Navbar;
