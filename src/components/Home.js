import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  const qty = 1;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column mt-6">
            <div className="dropdown-divider"></div>
            <div className="columns is-multiline">
              {products.map((product) => (
                <div className="column is-3" key={product.id}>
                  <div className="card mt-6">
                    <div className="card-image">
                      <figure className="image is-3by4">
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={`/products/${product.image}`}
                            alt={product.title}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <Link to={`/product/${product.id}`} className="title is-size-5">
                            {product.title}
                          </Link>
                          <p className="subtitle is-6 mt-2">
                            <span className="has-text-danger is-size-6">
                              $ {product.price}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="content">
                        <div className="field is-grouped">
                          <p className="control">
                            <button className="button is-success" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, qty }}) }>
                              Add to Cart &nbsp; <AiOutlineShoppingCart />
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
