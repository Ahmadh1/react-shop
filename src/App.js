import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/product/:id">
                <ProductDetail />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
