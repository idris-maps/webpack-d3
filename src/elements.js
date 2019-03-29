import * as d3 from 'd3'
import { WIDTH, HEIGHT } from './config'
import { getColorByRegion, yScale } from './scales'
const data = require('./data/data.json')

const svg = d3.select('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

export const yearDisplay = svg.append('text')
  .attr('x', WIDTH * 0.8)
  .attr('y', HEIGHT * 0.9)
  .text('1950')

export const countryLabel = svg.append('text')
  .attr('x', 100)
  .attr('y', 100)
  .attr('text-anchor', 'middle')

export const circles = svg.selectAll('circle')
  .data(data.countries)
  .enter()
  .append('circle')
  .attr('fill', getColorByRegion)
  .on('mouseover', function(d) {
    const cercle = d3.select(this)
    const x = cercle.attr('cx')
    const y = cercle.attr('cy')
    countryLabel.text(d.country)
      .attr('x', x)
      .attr('y', y - 5)
  })
  .on('mouseout', () => countryLabel.text(''))

const axisY = d3.axisLeft()
  .scale(yScale)

const axisYGroup = svg.append('g')
  .attr('transform', 'translate(30, 0)')
  .call(axisY)

