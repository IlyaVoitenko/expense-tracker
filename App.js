import { Provider } from "react-redux";
import store from "./src/store";
import "react-native-get-random-values";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
