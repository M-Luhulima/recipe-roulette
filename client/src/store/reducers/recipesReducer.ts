import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
// import { GET_RECIPES, GET_RECIPES_SUCCESS, GET_RECIPES_ERROR } from '../types'

// Define the action type constants
enum ActionTypes {
    GET_RECIPES = 'GET_RECIPES',
    GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS',
    GET_RECIPES_ERROR = 'GET_RECIPES_ERROR',
}

export interface DataState {
    recipes: any[],
    loading: boolean,
    error: string | null,
}

export interface GetRecipesRequestAction {
    type: ActionTypes.GET_RECIPES;
}

export interface GetRecipesSuccessAction {
    type: ActionTypes.GET_RECIPES_SUCCESS;
    payload: any[];
}

export interface GetRecipesErrorAction {
    type: ActionTypes.GET_RECIPES_ERROR;
    payload: string;
}

export type GetRecipesAction =
    | GetRecipesRequestAction
    | GetRecipesSuccessAction
    | GetRecipesErrorAction;

const initialState: DataState = {
    recipes: [],
    loading: true,
    error: null,
}

export const recipeReducer = (state = initialState, action: GetRecipesAction): DataState => {
    switch (action.type) {
        case ActionTypes.GET_RECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.GET_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.payload,
                error: null,
            };
        case ActionTypes.GET_RECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default: return state
    }
}

export const getRecipesRequest = (): GetRecipesRequestAction => {
    return {
        type: ActionTypes.GET_RECIPES
    };
}

export const getRecipesSuccess = (data: any[]): GetRecipesSuccessAction => {
    return {
        type: ActionTypes.GET_RECIPES_SUCCESS,
        payload: data,
    };
}

export const getRecipesError = (error: string): GetRecipesErrorAction => {
    return {
        type: ActionTypes.GET_RECIPES_ERROR,
        payload: error,
    };
}

export const getRecipeRandom = () => {
    return async (dispatch: Dispatch<GetRecipesAction>) => {
        console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
        dispatch(getRecipesRequest())
        try {
            const res: AxiosResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/random-recipe`)
            // store res.data in state(useState)
            console.log('res.data', res.data)
            dispatch(getRecipesSuccess([res.data]));
        }
        catch (e) {
            console.log('getRecipeRandom error ', e);
            dispatch(getRecipesError(`${e}`));
        }
    }
}

// Here starts getQuizRecipe
// Define the action type constants
enum QuizActionTypes {
    GET_QUIZRECIPES = 'GET_QUIZRECIPES',
    GET_QUIZRECIPES_SUCCESS = 'GET_QUIZRECIPES_SUCCESS',
    GET_QUIZRECIPES_ERROR = 'GET_QUIZRECIPES_ERROR',
}

export interface DataState {
    recipes: any[],
    loading: boolean,
    error: string | null,
}

export interface GetQuizRecipesRequestAction {
    type: QuizActionTypes.GET_QUIZRECIPES;
}

export interface GetQuizRecipesSuccessAction {
    type: QuizActionTypes.GET_QUIZRECIPES_SUCCESS;
    payload: any[];
}

export interface GetQuizRecipesErrorAction {
    type: QuizActionTypes.GET_QUIZRECIPES_ERROR;
    payload: string;
}

export type GetQuizRecipesAction =
    | GetQuizRecipesRequestAction
    | GetQuizRecipesSuccessAction
    | GetQuizRecipesErrorAction;

const quizInitialState: DataState = {
    recipes: [],
    loading: true,
    error: null,
}

export const quizRecipeReducer = (state = quizInitialState, action: GetQuizRecipesAction): DataState => {
    switch (action.type) {
        case QuizActionTypes.GET_QUIZRECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case QuizActionTypes.GET_QUIZRECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.payload,
                error: null,
            };
        case QuizActionTypes.GET_QUIZRECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default: return state
    }
}

export const getQuizRecipesRequest = (): GetQuizRecipesRequestAction => {
    return {
        type: QuizActionTypes.GET_QUIZRECIPES
    };
}

export const getQuizRecipesSuccess = (data: any[]): GetQuizRecipesSuccessAction => {
    return {
        type: QuizActionTypes.GET_QUIZRECIPES_SUCCESS,
        payload: data,
    };
}

export const getQuizRecipesError = (error: string): GetQuizRecipesErrorAction => {
    return {
        type: QuizActionTypes.GET_QUIZRECIPES_ERROR,
        payload: error,
    };
}

export const getQuizRecipe = () => {
    return async (dispatch: Dispatch<GetQuizRecipesAction>) => {
        console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
        dispatch(getQuizRecipesRequest())
        try {
            const res: AxiosResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/quiz`, {
                params: {
                    type: '',
                    diet: '',
                    intolerances: '',
                }
            })
            // store res.data in state(useState)
            console.log('res.data', res.data)
            dispatch(getQuizRecipesSuccess([res.data]));
        }
        catch (e) {
            console.log('getRecipeRandom error ', e);
            dispatch(getQuizRecipesError(`${e}`));
        }
    }
}





// import {GET_USERS} from '../types'

// const initialState = {
//     users:[],
//     loading:true
// }

// export default function userReducer(state = initialState, action: any){

//     switch(action.type){

//         case GET_USERS:
//         return {
//             ...state,
//             users:action.payload,
//             loading:false

//         }
//         default: return state
//     }

// }