import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductDetails from "../pages/productsDetails";
import Home from "../pages/home";
import CartPage from "../pages/cart";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ResetPassword from "../pages/auth/reset-password";
import UserProfile from "../pages/profile";

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/cart" component={CartPage} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/reset_password" component={ResetPassword} />
				<Route path="/account/:uid" component={UserProfile} />
				<Route path="/:title" component={ProductDetails} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
