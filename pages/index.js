import React, { useCallback, useState } from 'react'
import Cors from 'cors'
import News from '../components/News'
import { getNews } from '../utils/api'
import useNews from '../hooks/useNews'

const Home = ({ news }) => {
  const props = useNews(news)

  return <News {...props} />
}

const cors = Cors({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  await cors(req, res, () => {})
  const news = await getNews()
  return { props: { news } }
}

export default Home
