import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductDetails from "../pages/productsDetails";
import Home from "../pages/home";
import CartPage from "../pages/cart";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={CartPage} />
        <Route path="/:title" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
