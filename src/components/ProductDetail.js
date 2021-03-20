import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const { id } = useParams();
    useEffect();
  return (
    <div className="container is-fluid">
      <section className="section">
        <div className="mt-custom">
          <div className="columns is-desktop is-vcentered">
            <div className="column is-6-desktop">
              <h2 className="title">Mix Laptop Stickers pack of 15Pcs</h2>
              <p className="mt-2 mb-2">
                <span className="ml-2 fade">(2 views)</span>
                <span className="ml-2 fade">(2 Customer reviews)</span>
              </p>
              <p className="mb-4">
                <b className="subtitle">399Rs (Ex. DC)</b>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus voluptatum explicabo eum, velit dolor deleniti nobis
                nihil. Obcaecati aperiam exercitationem dolores, asperiores
                explicabo ut quidem, incidunt ducimus, soluta animi sequi!
              </p>
              <div className="field mt-3">
                <p className="control">
                  <button className="button is-success">Add to Cart</button>
                </p>
              </div>
            </div>
            <div className="column is-6-desktop">
              <div className="columns">
                <div className="column"></div>
                <div className="column">
                  <img src="/products/Poco-X3-Pro.webp" className="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
