// @flow
import breakpoints from 'settings/mediaBreakPoints'


const toEm = (pxls: number) => `${pxls / 16}em`

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type MediaQueries = { [Size]: string }

// Includes @media keyword
const mediaQ: MediaQueries = Object.keys(breakpoints).reduce((obj, size) => {
  obj[size] = `@media (min-width: ${toEm(breakpoints[size])})`
  return obj
}, {})

type Queries = {min: MediaQueries, max: MediaQueries}
export const queries: Queries = Object.keys(breakpoints).reduce((obj, size) => {
  obj.min[size] = `(min-width: ${toEm(breakpoints[size])})`
  obj.max[size] = `(max-width: ${toEm(breakpoints[size] - 1)})`
  return obj
}, { min: {}, max: {} })

export default mediaQ
