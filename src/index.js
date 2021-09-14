import React from "react";
import ReactDOM from "react-dom";
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new AWSAppSyncClient({
  url: process.env.REACT_APP_APPSYNC_GRAPHQL,
  region: process.env.REACT_APP_APPSYNC_REGION,
  disableOffline: true,
  auth: {
    type: process.env.REACT_APP_AUTH_TYPE,
    apiKey: process.env.REACT_APP_API_KEY,
    jwtToken: localStorage.getItem("token") || "",
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
