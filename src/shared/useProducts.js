import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { SHOPS, PRODUCTS } from '../graphql/Queries'

function useProducts() {
    const productSize = 25
    const {
      data,
      loading,
      fetchMore,
    } = useQuery(PRODUCTS, {
      variables: { productSize },
      notifyOnNetworkStatusChange: true,
    })
  
    if (loading && !data.products) return { loading, products: [] }
  
    const loadMore = () => {
      return fetchMore({
        query: PRODUCTS,
        notifyOnNetworkStatusChange: true,
        variables: {
          productSize,  
          cursor: data.products.edges[data.products.edges.length - 1].cursor //data.products.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.products.edges
          const pageInfo = fetchMoreResult.products.pageInfo
  
          return newEdges.length
            ? {
              products: {
                __typename: previousResult.products.__typename,
                edges: [...previousResult.products.edges, ...newEdges],
                pageInfo,
              },
            }
            : previousResult
        },
      })
    }
  
    return {
      products: data.products.edges.map(({ node }) => node),
      hasNextPage: data.products.pageInfo.hasNextPage,
      loading,
      loadMore,
    }
  }
  
  export default useProducts;