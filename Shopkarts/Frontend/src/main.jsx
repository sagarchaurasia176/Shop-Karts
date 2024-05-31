import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// redux toolki apply here
import { Provider } from "react-redux";
// react router
import ReduxStore from "./Redux/store/ReduxStore.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ReduxStore}>
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
