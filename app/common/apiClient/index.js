// @flow
/* eslint-disable import/exports-last */
import type { $User } from '../../pages/Home/types'

export function fetchUsers(): Promise<$User[]> {
  const names = ['Lu', 'Joe', 'Kate', 'Jane']
  return Promise.resolve(names.map((name, i) => ({
    id: i,
    name,
    status: 'active',
  })))
}