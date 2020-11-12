import fetch from 'node-fetch'

const PAGE_SIZE = 10
const TOP_NEWS_URL = 'https://hn.algolia.com/api/v1/search'
const FRONT_NEWS_URL = 'http://hn.algolia.com/api/v1/search?tags=front_page'
const LATEST_NEWS_URL = 'https://hn.algolia.com/api/v1/search_by_date'

const getMaxPoints = async () => {
  const url = new URL(TOP_NEWS_URL)
  url.searchParams.set('hitsPerPage', 1)

  const response = await fetch(url.href)
  const result = await response.json()

  return result.hits[0].points / 4
}

export const getNews = async (isLatest = false, page = 0) => {
  const isServer = typeof window === 'undefined'
  const url = new URL(isLatest ? LATEST_NEWS_URL : FRONT_NEWS_URL)
  url.searchParams.set('hitsPerPage', PAGE_SIZE)
  url.searchParams.set('page', page)

  const response = await fetch(url.href)
  const result = await response.json()
  const maxPoints = await getMaxPoints()

  const news = { ...result, maxPoints }

  return isServer ? news : {
    ...news,
    hits: result.hits.map(hit => {
      const sessionPoints = Number(window.sessionStorage.getItem(hit.objectID))
      return {
        ...hit,
        points: hit.points + sessionPoints,
        blockVote: sessionPoints >= 10,
      }
    })
  }
}
