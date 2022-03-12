import CartProvider from "./contexts/CartContext";
import RouterApp from "./RouterApp";

const App = () => {
  return (
    <CartProvider>
      <RouterApp />
    </CartProvider>
  );
}

export default App;
