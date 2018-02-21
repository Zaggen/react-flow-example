/* eslint-disable */

declare type $MapValues<O: Object, Fn> = $Values<$ObjMap<O, Fn>>

declare type $ReduxAction = { +type: *, +payload: * }

declare type $ReduxActionsMap = {
  [key: string]: (*) => $ReduxAction,
}

declare type Map<S: Object> = {|
  get: (k: $Keys<S>) => any,
  getIn: (path: any[], dfltValue: any) => any,
  set: (k: $Keys<S>, v: $Values<S>) => Map<S>,
  setIn: (path: (string | number)[], fn: Function) => Map<S>,
  merge: (d: S) => Map<S>,
  update: (k: string, fn: Function) => Map<S>,
  remove: (k: string) => Map<S>,
  toJS: () => S
|}

declare type List<S: any> = {|
  get: (i: number) => any,
  getIn: (path: any[], dfltValue: any) => any,
  set: (i: number, v: $Values<S>) => List<S>,
  setIn: (path: any[], Function) => List<S>,
  update: (i: number, Function) => List<S>,
  updateIn: (path: string[], Function) => List<S>,
  remove: (i: number) => List<S>,
  find: (fn: Function) => List<S>,
  findIndex: (fn: Function) => number,
  push: (val: S) => List<S>,
  toJS: () => S[]
|}

declare type $ExtractActionType = <A, D>(action: A) => $PropertyType<$Call<A, D>, 'type'>
declare type $ExtractActionTypes<A> = $MapValues<A, $ExtractActionType>

declare type $ExtractAction = <A, D>(action: A) => $Call<A, D>
declare type $ExtractActions<A> = $MapValues<A, $ExtractAction>
