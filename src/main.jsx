import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-aqppezzdm750rc88.us.auth0.com"
     clientId="v0L6Vb5mlU8uzrVK3LQbDTkuTLJ7rk8i"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
      
    </Auth0Provider>
  </React.StrictMode>
);