
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
})

export default store;

// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

// import rootReducer from './reducers'

// const initalState = {

// }

// const middleware = [thunk]

// const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store;