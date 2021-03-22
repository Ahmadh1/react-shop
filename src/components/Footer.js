import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="mt-1">
                    <a href="tracking.html">Orders tracking</a>
                  </li>
                  <li className="mt-1">
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li className="mt-1">
                    <a href="terms.html">Terms &amp; Conditions</a>
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
                    <a
                      href="https://www.facebook.com/JangoMangoOfficial/"
                      target="_blank"
                    >
                      <FaFacebook /> Facebook
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="https://www.instagram.com/jangomangoshop/"
                      target="_blank"
                    >
                      <FaInstagram /> Instagram
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="column">
              <h3 className="subtitle is-size-6 has-text-weight-bold">WHATSAPP</h3>
              <nav className="footer-links mt-3">
                <ul>
                  <li className="mt-2">
                    <a href="https://web.whatsapp.com/" target="_blank">
                      <FaWhatsapp /> +92 304 7237840
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="content has-text-centered mt-6">
          <p>
            &copy; 2020 JangoMango. <span>All Rights &amp; Reserved.</span>
            <span>
              Design &amp; Developed by &nbsp;
              <a href="http://vertibumtech.com/" target="_blank">
                Vertibumtech
              </a>
            </span>
          </p>
        </div>
      </footer>
    );
}

export default Footer;