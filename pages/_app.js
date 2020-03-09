import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import fetch from 'node-fetch'

import "../public/css/styles.css";
import "../public/css/index.css";


const client = new ApolloClient({
  uri: 'https://api.everbase.co/graphql',
  fetch: fetch,
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}