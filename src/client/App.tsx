import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import configureClient from "./configureApolloClient";
import { Root, NotFound, Auth } from "../pages";

const client = configureClient();

console.log("%c뚫으려고 하다간 네 목이 날아갈걸?", 'font-size: 30px; color: red; font-weight: 900;');

const App: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/auth/login" component={Auth.Login} />
          <Route path="/auth/register" component={Auth.Register} />
          <Route path="" component={NotFound} />{" "}
        </Switch>
      </ApolloHooksProvider>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
