export const nothing = '';

// import {GET_RECIPES, RECIPES_ERROR} from '../types'
// import axios from 'axios'

// export const getRecipeRandom = () => async (dispatch: any) => {
    
//     console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
//     try{
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/random-recipe`)
//         // store res.data in state(useState)
//         dispatch( {
//             type: GET_RECIPES,
//             payload: res.data
//         })
//     }
//     catch(e){
//         dispatch( {
//             type: RECIPES_ERROR,
//             payload: console.log(e),
//         })
//     }

// }

// import {GET_USERS, USERS_ERROR} from '../types'
// import axios from 'axios'

// export const getUsers = () => async (dispatch: any) => {
    
//     try{
//         const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
//         dispatch( {
//             type: GET_USERS,
//             payload: res.data
//         })
//     }
//     catch(e){
//         dispatch( {
//             type: USERS_ERROR,
//             payload: console.log(e),
//         })
//     }

// }