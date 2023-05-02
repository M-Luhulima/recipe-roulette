import { combineReducers } from 'redux'
import {recipeReducer} from './recipesReducer'

export default combineReducers({
  recipes: recipeReducer,
})

// import { combineReducers } from 'redux'
// import userReducer from './usersReducer'

// export default combineReducers({
//   users: userReducer
// })

