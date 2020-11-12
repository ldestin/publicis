import React from 'react'
import chart from 'chart.js'
import { render } from '@testing-library/react'
import Chart from '.'

jest.mock('chart.js')

const hits = [
  { objectID: 'id 1', points: 123 },
  { objectID: 'id 2', points: 45 },
]

const expectedConfig = {
  data: {
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: '#0D47A1',
        data: [123, 45],
        label: 'Current hits',
        lineTension: 0
      }
    ],
    fill: false,
    labels: ['id 1', 'id 2']
  },
  options: {
    animation: {
      duration: 0
    }, 
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'ID'
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Votes'
          }
        }
      ]
    }
  },
  type: 'line'
}

it('should initialize chart correctly', () => {
  const { container } = render(<Chart hits={hits} />)
  expect(chart).toHaveBeenCalledWith(expect.any(HTMLCanvasElement), expectedConfig)
  expect(container).toMatchSnapshot()
})
