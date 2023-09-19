import { Provider } from "react-redux";
import store from "./src/store";
import "react-native-get-random-values";
import Main from "./src/components/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
