// @flow

// This is a hack to overload the function and get proper return types based on the props
declare function createAction<T: string, P>(type: T) : { type: T }
declare function createAction<T: string, P>(type: T, payload: P) : { type: T, payload: P }

// $FlowFixMe
const createAction: any = <T: string, P>(
  type: T, payload: P
): { type: T }  => {
  if (payload) {
    return ({ type, payload })
  }

  return ({ type })
}

export default createAction
