import gql from 'graphql-tag'

export const SHOP = gql`
query {
    shop {
      name
      description
      products(first:5) {
        edges {
          node {
            id
            title 
          }
        }
      }
      
    }
}
`
export const PRODUCTS = gql`
query {
  shop {
    name
    description
    products(first:20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          options {
            name
            values
          }
          variants(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                title
                selectedOptions {
                  name
                  value
                }
                image {
                  src
                }
                price
              }
            }
          }
          images(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
}
`
