import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import dayjs from '../../utils/dayjs'

export const getHostName = url => {
  try {
    return new URL(url).hostname
  } catch {
    return undefined
  }
}

const Hit = ({ hit, color, onHideClick: customOnHideClick, onUpvoteClick: customOnUpvoteClick }) => {
  const { num_comments, points, title, url, author, created_at } = hit
  const hostName = getHostName(url)
  const onHideClick = useCallback(() => {
    if (customOnHideClick) customOnHideClick(hit)
  }, [hit, customOnHideClick])
  const onUpvoteClick = useCallback(() => {
    if (customOnUpvoteClick) customOnUpvoteClick(hit)
  }, [hit, customOnHideClick])

  return (
    <div className="hit">
      <span className="line numbers">
        <span className="col nb-comments">{num_comments || 0}</span>{' '}
        <span className="label">comment{num_comments > 1 ? 's' : ''}</span>
        <span className="col points" style={{ color }}>{points || 0}</span>{' '}
        <span className="label">point{points > 1 ? 's' : ''}</span>
      </span>
      <div className="line">
        <div className={classnames('col button upvote-button', { hidden: hit.blockVote })} onClick={onUpvoteClick} />{' '}
        <span className="col description">
          {title && <><a href={url}>{title}</a>{' '}</>}
          {hostName && <span className="small grey">({hostName}){' '}</span>}
          {author && <><span className="small grey">by </span><span>{author}</span>{' '}</>}
          {created_at && <><span className="small grey">{dayjs(created_at).fromNow()}</span>{' '}</>}
          <span className="button hide-button small" onClick={onHideClick}><span className="grey">[</span>hide<span className="grey">]</span></span>
        </span>
      </div>
    </div>
  )
}

Hit.defaultProps = {
  onHideClick: undefined,
}

Hit.propTypes = {
  hit: PropTypes.shape({
    num_comments: PropTypes.number,
    points: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
  color: PropTypes.string.isRequired,
  onHideClick: PropTypes.func,
}

export default Hit
