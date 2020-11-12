import { describe, expect, jest } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'
import News from '.'

jest.mock('../Hits', () => props => <div>Hits: {JSON.stringify(props, null, 2)}</div>)
jest.mock('../Chart', () => props => <div>Chart: {JSON.stringify(props, null, 2)}</div>)

const props = {
  news: {
    hits: [{}],
    maxPoints: 10,
    page: 3,
    nbPages: 5,
    onPrevClick: jest.fn(),
    onNextClick: jest.fn(),
    onUpvoteClick: jest.fn(),
  }
}

it('should render correctly', () => {
  const { container } = render(<News {...props} />)

  expect(container).toMatchSnapshot()
  expect(container.querySelector('.prev-button')).toBeTruthy()
  expect(container.querySelector('.next-button')).toBeTruthy()
})

it('should render correctly without hits', () => {
  const { container } = render(<News {...props} news={{ hits: undefined }} />)

  expect(container).toMatchSnapshot()
  expect(container.querySelector('.prev-button')).toBeFalsy()
  expect(container.querySelector('.next-button')).toBeFalsy()
})

it('should render correctly on first page', () => {
  const { container } = render(<News {...props} news={{ ...props.news, page: 0 }} />)

  expect(container).toMatchSnapshot()
  expect(container.querySelector('.prev-button')).toBeFalsy()
  expect(container.querySelector('.next-button')).toBeTruthy()
})

it('should render correctly on last page', () => {
  const { container } = render(<News {...props} news={{ ...props.news, page: 4 }} />)

  expect(container).toMatchSnapshot()
  expect(container.querySelector('.prev-button')).toBeTruthy()
  expect(container.querySelector('.next-button')).toBeFalsy()
})
