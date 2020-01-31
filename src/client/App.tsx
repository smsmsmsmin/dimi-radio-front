import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import configureClient from "./configureApolloClient";
import { Root } from "../pages";

const client = configureClient();


const App: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </ApolloHooksProvider>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;

