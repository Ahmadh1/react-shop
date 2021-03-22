import { useSelector, useDispatch } from "react-redux";
import {
  FaPlus,
  FaMinus,
  FaLongArrowAltLeft,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Cart = () => {
  const { cartItems, total, checkoutMsg } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
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
                <a>Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {cartItems.length > 0 ? (
            <>
              <div className="columns">
                <div className="column is-8">
                  <div className="hero">
                    <div className="hero-body">
                      <div className="container">
                        <h1 className="title is-family-monospace">Cart</h1>
                        <h2 className="subtitle">
                          Manage Quantity and Products
                        </h2>
                        <div className="dropdown-divider"></div>
                        <div className="table-container">
                          <table className="table is-hoverable">
                            <thead>
                              <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Item Total</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item) => (
                                <tr key={item.id}>
                                  <td>
                                    <img
                                      src={`/products/${item.image}`}
                                      alt={item.title}
                                      className="image img-border is-64x64"
                                    />
                                  </td>
                                  <td>{item.title}</td>
                                  <td>{item.price}</td>
                                  <td>{item.qty}</td>
                                  <td>{item.price * item.qty}</td>
                                  <td>
                                    <div className="field is-grouped">
                                      <p className="control">
                                        <button
                                          className="button is-small is-ghost"
                                          onClick={() =>
                                            dispatch({
                                              type: "INCR",
                                              payload: item.id,
                                            })
                                          }
                                        >
                                          <FaPlus />
                                        </button>
                                      </p>
                                      <p className="control">
                                        <button
                                          className="button is-small is-ghost"
                                          onClick={() =>
                                            dispatch({
                                              type: "DECR",
                                              payload: item.id,
                                            })
                                          }
                                        >
                                          <FaMinus />
                                        </button>
                                      </p>
                                      <p className="control">
                                        <button
                                          className="button is-small is-danger is-outlined"
                                          onClick={() =>
                                            dispatch({
                                              type: "REMOVE",
                                              payload: item.id,
                                            })
                                          }
                                        >
                                          <FaTimes />
                                        </button>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <Link to="/" className="button is-dark mt-5">
                          <FaLongArrowAltLeft />
                          &nbsp;Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="hero mt-custom auth-box">
                    <div className="hero-body">
                      <h3 className="title has-text-centered">Cart Details</h3>
                      <div className="dropdown-divider"></div>
                      <div className="ovrf-hidden mt-6">
                        <p className="text-left mt-2 is-size-5 is-uppercase has-text-weight-bold">
                          Total Items
                        </p>
                        <p className="text-right mt-2 is-size-5 is-uppercase has-text-weight-bold">
                          {cartItems.length}
                        </p>
                      </div>

                      <div className="ovrf-hiden">
                        <p className="text-left mt-2 is-size-5 is-uppercase has-text-weight-bold">
                          Total
                        </p>
                        <p className="text-right mt-2 is-size-5 is-uppercase has-text-weight-bold">
                          ${total}
                        </p>
                      </div>
                      <div className="mt-6">
                        <button
                          className="button is-dark mt-5"
                          onClick={() => dispatch({ type: "PLACE" })}
                        >
                          Place Order&nbsp;
                          <FaCheck />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3 className="has-text-centered is-size-3 has-text-danger">
                No item in Cart
              </h3>
              {!checkoutMsg ? (
                ""
              ) : (
                <>
                  <article class="message is-success mt-6">
                    <div class="message-header">
                      <p>Your Order is Placed</p>
                    </div>
                    <div class="message-body">
                      <p className="is-size-5">Thanks for shopping, hope to see you soon.</p>
                      <p>For more please contact@mail.com</p>
                    </div>
                  </article>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
