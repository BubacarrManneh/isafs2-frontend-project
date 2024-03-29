import {createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducer from './reducer'

const storeFactory = () => {
    const middlewares = [thunk]
    const reduxStore = createStore(
        reducer, composeWithDevTools(applyMiddleware(...middlewares))
    )
    return reduxStore
}

export default storeFactory;