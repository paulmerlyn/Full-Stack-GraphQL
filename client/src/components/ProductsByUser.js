import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
//import allProducts from './test-data'
import { gql, useQuery } from '@apollo/client'
import {
  useParams
} from 'react-router-dom'
import { GET_PRODUCTS_BY_AUTHOR } from './queries' // Make use of fragment from './queries.js' rather than define GET_PRODUCTS_BY_AUTHOR directly below


export default function ProductsByUser() {
  const { userName } = useParams()

  // Commented out b/c we're now making use of fragment via import above from queries.js to create our query
  /* 
  const GET_PRODUCTS_BY_AUTHOR = gql`
query($authorName: String!) {
  productsByAuthor(authorName: $authorName) {
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
}`  
*/

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS_BY_AUTHOR, { variables: { authorName: userName }})
  console.log(`Here is data:`, GET_PRODUCTS_BY_AUTHOR, data)
  console.log('Error is: ', error)

  return (
    <>
      <Typography variant="h3">Products by user {userName}</Typography>
      <ProductsList products={data?.productsByAuthor || []} loading={loading} error={error} refetch={refetch} />
    </>
  )
}