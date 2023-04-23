import React from 'react'
import Typography from '@mui/material/Typography'
// import allProducts from './test-data'  // no longer need to fetch our data from this client-side .js file b/c wwe are now fetching it from the GraphQL's Apollo Server via a GQL Query :-)
import ProductsList from './ProductsList'
import { gql, useQuery } from '@apollo/client'

// Rather than define GET_ALL_PRODUCTS query here, we could alternatively use a fragment (b/c much of this query is shared by code inside ProductsByUser.js) by import'ing the query from queries.js
const GET_ALL_PRODUCTS = gql`
query {
  allProducts {
    id
    description
    name
    url
    numberOfVotes
    publishedAt
    author {
      id
      userName
      fullName
    }
    categories {
      id
      slug
      name
    }
  }
}
`
export default function AllProducts() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_PRODUCTS)

  return (
    <>
      <Typography variant="h3">Products</Typography>
      <ProductsList
        products={data?.allProducts || []}
        loading={loading}
        error={error}
        refetch={refetch} />
    </>
  )
}