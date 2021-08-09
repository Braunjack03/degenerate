import "./App.scss";
import "animate.css";
import { Provider } from "react-redux";
import store from "./renderer/redux/stores/store";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";



import Main from "./Main";
function App() {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_DEGEN_DEV_BACKEND,
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Main />
    </Provider>
    </ApolloProvider>
  );
}

export default App;
