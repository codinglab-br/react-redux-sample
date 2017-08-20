import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)))

export default store
