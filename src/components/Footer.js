import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container has-text-left">
        <div className="columns">
          <div className="column">
            <h3 className="subtitle is-size-6 has-text-weight-bold">
              USEFUL LINKS
            </h3>
            <nav className="footer-links mt-3">
              <ul>
                <li className="mt-1">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-1">
                  <Link to="/tracking">Orders tracking</Link>
                </li>
                <li className="mt-1">
                  <Link to="/faq">FAQs</Link>
                </li>
                <li className="mt-1">
                  <Link to="/terms">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column">
            <h3 className="subtitle is-size-6 has-text-weight-bold">
              FOLLOW US ON
            </h3>
            <nav className="footer-links mt-3">
              <ul>
                <li className="mt-2">
                  <Link
                    to="https://www.instagram.com/ahmadh_1/"
                    target="_blank"
                  >
                    <FaInstagram /> Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <FaWhatsapp /> +92 304 7237840
                </li>
                <li className="mt-2">
                  <FaGithub /> Ahmadh1
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="content has-text-centered mt-6">
        <p>
          &copy; 2021. <span>All Rights &amp; Reserved.</span>
          <span>
            Design &amp; Developed by &nbsp;
            <Link to="http://vertibumtech.com/" target="_blank">
              Vertibumtech
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
