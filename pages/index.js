import React, { useCallback, useState } from 'react'
import News from '../components/News'
import { getNews } from '../utils/api'
import useNews from '../hooks/useNews'

const Home = ({ news }) => {
  const props = useNews(news)

  return <News {...props} />
}

export const getServerSideProps = async () => {
  const news = await getNews()
  return { props: { news } }
}

export default Home
