import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
//import allProducts from './test-data'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS_BY_CATEGORY } from './queries'

import {
  useParams
} from 'react-router-dom'

export default function ProductsInCategory() {
  const { slug } = useParams()

  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS_BY_CATEGORY, { variables: { categorySlug: slug }}) 

  return (
    <>
      <Typography variant="h3">Products by in category {slug}</Typography>
      <ProductsList products={data?.productsByCategory || []} loading={loading} error={error} refetch={refetch} />
    </>
  )
}