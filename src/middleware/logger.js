import { createLogger } from 'redux-logger';

export default createLogger({
  predicate: undefined, // if specified this function will be called before each action is processed with this middleware. 
  collapsed: undefined, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise. 
  duration: false, //: Boolean, // print the duration of each action? 
  timestamp: true, //: Boolean, // print the timestamp with each action? 
 
  level: 'log', //: 'log' | 'console' | 'warn' | 'error' | 'info', // console's level 
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  }, //: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18 
  titleFormatter: undefined, // Format the title used when logging actions. 
 
  stateTransformer: state => state.toJS(), // Transform state before print. Eg. convert Immutable object to plain JSON. 
  actionTransformer: action => action, // Transform action before print. Eg. convert Immutable object to plain JSON. 
  errorTransformer: err => err, // Transform error before print. Eg. convert Immutable object to plain JSON. 
 
  logger: console, //: LoggerObject, // implementation of the `console` API. 
  logErrors: true, //Boolean, // should the logger catch, log, and re-throw errors? 
 
  diff: true, //Boolean, // (alpha) show diff between states? 
  diffPredicate: undefined // (alpha) filter function for showing states diff, similar to `predicate` 
});