import GlobalStyles from "./globalStlyes";
import ProductContextProvider from "./context/productContext"
import CartContextProvider from "./context/cartContext";
import AppRouter from "./router";

function App() {
  return (
    <ProductContextProvider>
        <CartContextProvider>
          <GlobalStyles />
          <AppRouter />
        </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
