import { Route, Switch } from "react-router-dom";
import ProductDetails from "../pages/productsDetails";
import Home from "../pages/home";
import CartPage from "../pages/cart";
import Checkout from "../pages/checkout";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ResetPassword from "../pages/auth/reset-password";
import UserProfile from "../pages/profile";
import ThankYou from "../pages/thankYou";
import Orders from "../pages/orders";
import Transactions from "../pages/transactions";

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/cart" component={CartPage} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/reset_password" component={ResetPassword} />
      <Route path="/account" component={UserProfile} />
      <Route path="/orders" component={Orders} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/:title" component={ProductDetails} />
    </Switch>
  );
}

export default AppRouter;
