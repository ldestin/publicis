import React, { useState, useMemo } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Hits from '../Hits'
import Chart from '../Chart'
import { ORDERS } from '../../constants'

const orders = [ORDERS.TOP, ORDERS.NEW]

const News = ({ order: currentOrder, news, onPrevClick, onNextClick, onUpvoteClick }) => {
  const [hiddenHits, setHiddenHits] = useState({})
  const onHideClick = hit => {
    setHiddenHits({ ...hiddenHits, [hit.objectID]: true })
  }
  const currentHits = useMemo(() => {
    return news?.hits?.filter?.(hit => !hiddenHits[hit.objectID]) || []
  }, [news, hiddenHits])

  return (
    <div className="news">
      <div className="header">
        <img className="logo" alt="logo" src="/images/logo.gif" />
        <div className="links">
          {orders.reduce((acc, order, index) => {
            const isSelected = currentOrder === order
            const href = isSelected ? undefined : order

            acc.push(
              <a key={order} href={href} className={classnames('button link', order, { selected: isSelected })}>{order}</a> 
            )

            if (index < orders.length - 1) acc.push(' | ')

            return acc
          }, [])}
        </div>
      </div>
      {currentHits && <Hits hits={currentHits} maxPoints={news.maxPoints} onHideClick={onHideClick} onUpvoteClick={onUpvoteClick} />}
      <div className="buttons">
        {news && news.page > 0 && <div className="button prev-button" onClick={onPrevClick}>Prev</div>}
        {news && news.page < news.nbPages - 1 && <div className="button next-button" onClick={onNextClick}>Next</div>}
      </div>
      {currentHits && <Chart hits={currentHits} />}
    </div>
  )
}

News.defaultProps = {
  order: ORDERS.TOP,
}

News.propTypes = {
  order: PropTypes.oneOf(orders),
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  onUpvoteClick: PropTypes.func,
  news: PropTypes.shape({
    hits: PropTypes.arrayOf(PropTypes.shape({
      num_comments: PropTypes.number,
      points: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
      author: PropTypes.string,
      created_at: PropTypes.string
    })),
    maxPoints: PropTypes.number,
    page: PropTypes.number,
    nbPages: PropTypes.number,
  })
}

export default News
