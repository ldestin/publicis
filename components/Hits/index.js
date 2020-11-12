import React from 'react'
import PropTypes from 'prop-types'
import Hit from '../Hit'
import { PRIMARY_COLOR } from '../../constants'

export const getColor = (hit, maxPoints) => {
  const ratio = hit.points > maxPoints ? 1 : hit.points / maxPoints

  return `rgb(${Math.round(PRIMARY_COLOR.RED * ratio)}, ${Math.round(PRIMARY_COLOR.GREEN * ratio)}, ${Math.round(PRIMARY_COLOR.BLUE * ratio)})`
}

const Hits = ({ hits, maxPoints, onHideClick, onUpvoteClick }) => (
  <div className="hits">
    {hits.map(hit => (
      <Hit
        key={hit.objectID}
        hit={hit}
        color={getColor(hit, maxPoints)}
        onHideClick={onHideClick}
        onUpvoteClick={onUpvoteClick}
      />
    ))}
  </div>
)

Hits.defaultProps = {
  hits: [],
  onHideClick: undefined,
  onUpvoteClick: undefined,
}

Hits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape({
    num_comments: PropTypes.number,
    points: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string
  })),
  maxPoints: PropTypes.number.isRequired,
  onHideClick: PropTypes.func,
  onUpvoteClick: PropTypes.func,
}

export default Hits
