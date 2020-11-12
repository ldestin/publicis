import React from 'react'
import { render } from '@testing-library/react'
import Hits, { getColor } from '.'

jest.mock('../Hit', () => props => <div>Hit: {JSON.stringify(props, null, 2)}</div>)

describe('getColor function', () => {
  it('should return the correct color', () => {
    const result = getColor({ points: 5 }, 10)

    expect(result).toBe('rgb(128, 51, 0)')
  })

  it('should return the correct color with max ratio', () => {
    const result = getColor({ points: 10 }, 10)

    expect(result).toBe('rgb(255, 102, 0)')
  })
})

describe('Hits component', () => {
  const props = {
    hits: [
      { objectID: '1', points: 5 },
      { objectID: '2', points: 10 }
    ],
    maxPoints: 10,
    onHideClick: jest.fn(),
    onUpvoteClick: jest.fn(),
  }

  it('shouold render correctly', () => {
    const { container } = render(<Hits {...props} />)

    expect(container).toMatchSnapshot()
  })
})
