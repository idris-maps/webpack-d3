import { circles, yearDisplay } from './elements'
import {
  yearIndex,
  xScale,
  yScale,
  rScale
} from './scales'

const onYearChange = year => {
  const idx = yearIndex(year)
  circles
    .attr('cx', d => xScale(d.gdpCapita[idx]))
    .attr('cy', d => yScale(d.lifeExpect[idx]))
    .attr('r', d => rScale(d.pop[idx]))
  yearDisplay
    .text(year)
}

const slider = document.getElementById('slider')
  .addEventListener('input', e => onYearChange(e.target.value))

window.onload = () => {
  onYearChange(1950)
} 