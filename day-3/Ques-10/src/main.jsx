import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import QuizStore from "./QuizReducer/QuizStore.js";
createRoot(document.getElementById("root")).render(
  <Provider store={QuizStore}>
    <App />
  </Provider>
);
