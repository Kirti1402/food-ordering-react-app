import { MenuProvider } from "./onlineFoodOrdering/context/menuDetailFetchContext";
import { LandingPage } from "./onlineFoodOrdering/landing";
import {CartContextProvider} from "./onlineFoodOrdering/context/addToCartContext"

function App() {
  return (
    <div className="App">
      
      <MenuProvider>
      <CartContextProvider>
        <LandingPage />
        </CartContextProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
