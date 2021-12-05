import GlobalStyles from "./globalStlyes";
import ProductContextProvider from "./context/productContext";
import UserContext from "./context/userContext";
import CartContextProvider from "./context/cartContext";
import AppRouter from "./router";

function App() {
  return (
    <UserContext>
      <ProductContextProvider>
        <CartContextProvider>
          <GlobalStyles />
          <AppRouter />
        </CartContextProvider>
      </ProductContextProvider>
    </UserContext>
  );
}

export default App;
