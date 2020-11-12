import React from 'react'
import { render } from '@testing-library/react';
import Hit, { getHostName } from '.';

const mockDayJs = {
  fromNow() {
    return '20 hours ago'
  }
}
jest.mock('../../utils/dayjs', () => () => mockDayJs)

describe('getHostName function', () => {
  it('should return hostName from the specified url', () => {
    const hostName = getHostName('http://www.hostname.com/path?param=value')

    expect(hostName).toBe('www.hostname.com')
  })

  it('should return undefined with invalid url', () => {
    const hostName = getHostName('www.hostname.com')

    expect(hostName).toBe(undefined)
  })
})

describe('Hit component', () => {
  const props = {
    hit: {
      num_comments: 6,
      points: 13,
      title: 'title',
      url: 'url',
      author: 'author',
      created_at: '2020-11-10T16:55:58.000Z',
    },
    color: '#f00',
    onHideClick: jest.fn(),
    onUpvoteClick: jest.fn(),
  }

  it('should render correctly', () => {
    const { container } = render(<Hit {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with empty hit', () => {
    const { container } = render(<Hit {...props} hit={{}} />)

    expect(container).toMatchSnapshot()
  })

  it('should call onHideClick correctly', () => {
    const { container } = render(<Hit {...props} />)
    const hideButton = container.querySelector('.hide-button')

    hideButton.click()

    expect(props.onHideClick).toHaveBeenCalledWith(props.hit)
  })

  it('should call onUpvoteClick correctly', () => {
    const { container } = render(<Hit {...props} />)
    const hideButton = container.querySelector('.upvote-button')

    hideButton.click()

    expect(props.onUpvoteClick).toHaveBeenCalledWith(props.hit)
  })
})
