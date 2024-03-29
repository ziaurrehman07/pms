import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-center" // Position at the center
      autoClose={3000} // Close after 3 seconds
      hideProgressBar={true} // Hide progress bar
      toastStyle={{ fontSize: "14px" }} // Set font size
      bodyClassName="text-sm" // Set smaller text size
    />
  </Provider>
);
