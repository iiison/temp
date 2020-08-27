import thunk from 'redux-thunk'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import * as reducers from '$REDUX'

const store   = createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (func) => func)
)

export default store

