import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
//import Client from 'graphql-js-client'

// export const client = new Client(typeBundle, {
//   url: 'https://lee-lees-quick-click.myshopify.com/api/2020-04/graphql.json',
//   fetcherOptions: {
//     headers: {
//       'X-Shopify-Storefront-Access-Token': '5d5edd0d81c602b1015b53f52ea30efd', //leelee
//       //'Accept': 'application/json'
//     }
//   }
// });
// Instantiate required constructor fields
const cache = new InMemoryCache();
const httpLink = new HttpLink({
    uri: 'https://lee-lees-quick-click.myshopify.com/api/2020-04/graphql.json',
    headers: {
        'X-Shopify-Storefront-Access-Token': '5d5edd0d81c602b1015b53f52ea30efd',
        'Accept': 'application/json'
    }
  })

export const client = new ApolloClient({
  link: httpLink,
  cache: cache
})