import { useCallback, useState } from 'react'
import { MAX_UPVOTES } from '../constants'
import { getNews } from '../utils/api'

const useNews = (news, isLatest = false) => {
  const [currentNews, setNews] = useState(news)
  const onNextClick = useCallback(async () => {
    const nextNews = await getNews(isLatest, currentNews.page + 1)
    setNews(nextNews)
  }, [currentNews])
  const onPrevClick = useCallback(async () => {
    const prevNews = await getNews(isLatest, currentNews.page - 1)
    setNews(prevNews)
  }, [currentNews])
  const onUpvoteClick = useCallback(hit => {
    const sessionPoints = Number(window.sessionStorage.getItem(hit.objectID))
    if (sessionPoints < MAX_UPVOTES) {
      const newSessionPoints = sessionPoints + 1
      const newPoints = hit.points + 1
      const newHit = { ...hit, points: newPoints, blockVote: newSessionPoints >= 10 }
  
      window.sessionStorage.setItem(hit.objectID, newSessionPoints)
  
      const newNews = { ...currentNews, hits: currentNews.hits.map(h => h.objectID === hit.objectID ? newHit: h) }
      setNews(newNews)
    }
  }, [currentNews])

  return {
    news: currentNews,
    onNextClick,
    onPrevClick,
    onUpvoteClick
  }
}

export default useNews