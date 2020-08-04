import gql from 'graphql-tag'

export const SHOP = gql`
query {
    shop {
      name
      description
    }
}
`
export const PRODUCTS = gql`
query ($productSize: Int!, $cursor: String){
    products(first: $productSize, after: $cursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          title
          options {
            name
            values
          }
          variants(first: 50) {
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
                  transformedSrc 
                }
                priceV2 {
                  amount
                }
              }
            }
          }
          images(first: 50) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                transformedSrc
              }
            }
          }
        }
      }
    }
}
`
