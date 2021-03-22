import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  const decQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return (
    <div>
      <section className="section mt-6 pb-0">
        <div className="container">
          <nav className="breadcrumb has-arrow-separator p-6">
            <ul className="is-size-6 container">
              <li>
                <Link to="/" className="has-text-grey">
                  Home
                </Link>
              </li>
              <li className="is-active">
                <a>{product.title}</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="mt-6">
            <div className="columns is-desktop is-vcentered">
              <div className="column is-6-desktop">
                <h2 className="title">{product.title}</h2>
                <p className="mt-2 mb-2">
                  <span className="fade">(2 views)</span>
                  <span className="ml-2 fade">(2 Customer reviews)</span>
                </p>
                <p className="mb-4">
                  <b className="subtitle">${product.price} (Ex. DC)</b>
                </p>
                <div className="dropdown-divider"></div>
                <p>{product.details}</p>
                <div className="field has-addons mt-6">
                  <p className="control">
                    <button className="button" onClick={decQuantity}>
                      <span className="icon is-small">
                        <FaMinus />
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <button className="button" disabled>
                      <span>{qty}</span>
                    </button>
                  </p>
                  <p className="control">
                    <button className="button" onClick={() => setQty(qty + 1)}>
                      <span className="icon is-small">
                        <FaPlus />
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <button
                      className="button is-success"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product, qty },
                        })
                      }
                    >
                      Add to Cart &nbsp;
                      <FaShoppingBag />
                    </button>
                  </p>
                </div>
              </div>
              <div className="column is-6-desktop">
                <div className="columns">
                  <div className="column"></div>
                  <div className="column">
                    <img
                      src={`/products/${product.image}`}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
