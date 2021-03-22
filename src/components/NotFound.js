import { useEffect } from "react";
import { Link } from "react-router-dom";
import notFound from "../images/404.png";
const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <section className="section mt-custom-150">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div>
              <h1 className="title has-text-centered is-size-1 is-capitalized has-text-danger">
                oops!
              </h1>
              <h2 className="title is-spaced is-size-3">
                We can't seem to find the page you're looking for.
              </h2>
              <h5 className="subtitle is-size-4 fade">
                feel free to stay and explore
              </h5>
              <Link to="/" className="button is-dark is-medium">
                Go to Home &nbsp; &rarr;
              </Link>
              <div className="media mt-6">
                <div className="media-content">
                  <div className="content">
                    <p className="fade">
                      Need Help?
                      <br />
                    </p>
                    <b>ahmadh807@gmail.com</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <img src={notFound} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
