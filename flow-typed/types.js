/* eslint-disable */

declare type $MapValues<O: Object, Fn> = $Values<$ObjMap<O, Fn>>

declare type $ReduxAction = { +type: *, +payload: * }

declare type $ReduxActionsMap = {
  [key: string]: (*) => $ReduxAction,
}

declare type Map<S: Object> = {|
  get: (k: $Keys<S>) => any,
  getIn: (path: any[], dfltValue: any) => any,
  set: (k: $Keys<S>, v: $Values<S>) => MapShape<S>,
  setIn: (path: (string | number)[], fn: Function) => MapShape<S>,
  merge: (d: S) => MapShape<S>,
  update: (k: string, fn: Function) => MapShape<S>,
  remove: (k: string) => MapShape<S>,
  toJS: () => S
|}

declare type List<S: any> = {|
  get: (i: number) => any,
  getIn: (path: any[], dfltValue: any) => any,
  set: (i: number, v: $Values<S>) => ListShape<S>,
  setIn: (path: any[], Function) => ListShape<S>,
  update: (i: number, Function) => ListShape<S>,
  updateIn: (path: string[], Function) => ListShape<S>,
  remove: (i: number) => ListShape<S>,
  find: (fn: Function) => ListShape<S>,
  findIndex: (fn: Function) => number,
  push: (val: S) => ListShape<S>,
  toJS: () => S[]
|}

declare type $ExtractActionType = <A, D>(action: A) => $PropertyType<$Call<A, D>, 'type'>
declare type $ExtractActionTypes<A> = $MapValues<A, $ExtractActionType>

declare type $ExtractAction = <A, D>(action: A) => $Call<A, D>
declare type $ExtractActions<A> = $MapValues<A, $ExtractAction>
