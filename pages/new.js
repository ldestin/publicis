import React, { useCallback, useState } from 'react'
import News from '../components/News'
import { getNews } from '../utils/api'
import { ORDERS } from '../constants'
import useNews from '../hooks/useNews'

const New = ({ news, order }) => {
  const props = useNews(news, true)

  return <News {...props} order={order} />
}

export const getServerSideProps = async () => {
  const news = await getNews(true)
  return { props: { news, order: ORDERS.NEW } }
}

export default New
