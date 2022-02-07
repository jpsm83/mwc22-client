import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* AuthProvider comes from context and wrap the application
    it allows the app to use all its methods in any component-
    isLoading, isLoggedIn, user, signup, login, logout, edit */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
