import { Provider } from "react-redux";
import store from "./src/store";

import CurrencyExchange from "./src/components/CurrencyExchange";

export default function App() {
  return (
    <Provider store={store}>
      <CurrencyExchange />
    </Provider>
  );
}
