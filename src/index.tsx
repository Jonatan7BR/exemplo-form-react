import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const root = createRoot(document.querySelector("#root") as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
