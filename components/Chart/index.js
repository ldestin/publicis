import React, { useRef, useEffect, useState } from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import chart from 'chart.js'
import Hit from '../Hit'

const Chart = ({ hits }) => {
  const ref = useRef()
  const data = useMemo(() => hits.map(hit => hit.points || 0), [hits])
  const labels = useMemo(() => hits.map(hit => hit.objectID), [hits])

  useEffect(() => {
    new chart(ref.current, {
      type: 'line',
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'ID',
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Votes',
            }
          }]
        },
        responsive: true,
        animation: {
          duration: 0
        },
      },
      data: {
        datasets: [
          {
            label: 'Current hits',
            data,
            borderColor: '#0D47A1',
            backgroundColor: 'transparent',
            lineTension: 0,
          }
        ],
        labels,
        fill: false,
      }
    })
  }, [ref.current, hits])

  return (
    <div className="chart">
      <canvas ref={ref} width={400} height={100}></canvas>
    </div>
  )
}

Chart.defaultProps = {
  hits: [],
}

Chart.propTypes = {
  hits: PropTypes.arrayOf(Hit.propTypes.hit),
}

export default Chart
