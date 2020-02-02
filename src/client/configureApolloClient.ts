import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import auth from "../utils/auth";

export default function configureClient() {
  const httpLink = new HttpLink({
    uri: "https://dimigo.us/graphql"
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: auth.getToken()
      }
    });
    return forward(operation);
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}
