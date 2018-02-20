/* eslint-disable */
// @flow
const isServer = (): boolean =>
  Object.prototype
    .toString
    .call(typeof process !== 'undefined' ? process : 0) === '[object process]'

export default isServer
