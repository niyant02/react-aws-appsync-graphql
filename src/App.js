import React from "react";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";

import logo from "./logo.svg";
import "./App.css";

const SignUp = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      message
      statusCode
      result
    }
  }
`;

function App(props) {
  const handleAppSync = () => {
    props.client
      .mutate({
        mutation: SignUp,
        variables: {
          name: "Niyant Shah",
          email: "niyantshah02+bbbb@outlook.com",
          password: "Niyant@123!",
        },
      })
      .then((res) => {
        console.log("Success: ", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={() => handleAppSync()}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default withApollo(App);
