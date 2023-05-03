import axios, { AxiosResponse } from 'axios';
import { User } from 'firebase/auth';
import { Dispatch } from 'redux';
import { Recipe } from '../../models/types';
import { QuizAnswers } from '../../pages/Quiz';
import { auth } from '../../services/firebase';

// Define the action type constants
enum ActionTypes {
    GET_RECIPES = 'GET_RECIPES',
    GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS',
    GET_RECIPES_ERROR = 'GET_RECIPES_ERROR',
    GET_QUIZRECIPES = 'GET_QUIZRECIPES',
    GET_QUIZRECIPES_SUCCESS = 'GET_QUIZRECIPES_SUCCESS',
    GET_QUIZRECIPES_ERROR = 'GET_QUIZRECIPES_ERROR',
    POST_SAVERECIPES = 'POST_SAVERECIPES',
    POST_SAVERECIPES_SUCCESS = 'POST_SAVERECIPES_SUCCESS',
    POST_SAVERECIPES_ERROR = 'POST_SAVERECIPES_ERROR',
    GET_SAVEDRECIPES = 'GET_SAVEDRECIPES',
    GET_SAVEDRECIPES_SUCCESS = 'GET_SAVEDRECIPES_SUCCESS',
    GET_SAVEDRECIPES_ERROR = 'GET_SAVEDRECIPES_ERROR',
    DELETE_SAVEDRECIPES = 'DELETE_SAVEDRECIPES',
    DELETE_SAVEDRECIPES_SUCCESS = 'DELETE_SAVEDRECIPES_SUCCESS',
    DELETE_SAVEDRECIPES_ERROR = 'DELETE_SAVEDRECIPES_ERROR',
    UPDATE_SAVEDRECIPES = 'UPDATE_SAVEDRECIPES',
    UPDATE_SAVEDRECIPES_SUCCESS = 'UPDATE_SAVEDRECIPES_SUCCESS',
    UPDATE_SAVEDRECIPES_ERROR = 'UPDATE_SAVEDRECIPES_ERROR',
}

export interface DataState {
    recipes: any[],
    favRecipes: any[],
    loading: boolean, error: string | null,
}

export type RecipesAction =
    | GetRecipesRequestAction
    | GetRecipesSuccessAction
    | GetRecipesErrorAction
    | GetQuizRecipesRequestAction
    | GetQuizRecipesSuccessAction
    | GetQuizRecipesErrorAction
    | PostSaveRecipesRequestAction
    | PostSaveRecipesSuccessAction
    | PostSaveRecipesErrorAction
    | GetSavedRecipesRequestAction
    | GetSavedRecipesSuccessAction
    | GetSavedRecipesErrorAction
    | DeleteSavedRecipesRequestAction
    | DeleteSavedRecipesSuccessAction
    | DeleteSavedRecipesErrorAction
    | UpdateSavedRecipesRequestAction
    | UpdateSavedRecipesSuccessAction
    | UpdateSavedRecipesErrorAction;

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


// Here starts getQuizRecipe
// Define the action type constants
export interface GetQuizRecipesRequestAction {
    type: ActionTypes.GET_QUIZRECIPES;
}

export interface GetQuizRecipesSuccessAction {
    type: ActionTypes.GET_QUIZRECIPES_SUCCESS;
    payload: any[];
}

export interface GetQuizRecipesErrorAction {
    type: ActionTypes.GET_QUIZRECIPES_ERROR;
    payload: string;
}

// Here starts postSaveRecipe
// Define the action type constants
export interface PostSaveRecipesRequestAction {
    type: ActionTypes.POST_SAVERECIPES;
}

export interface PostSaveRecipesSuccessAction {
    type: ActionTypes.POST_SAVERECIPES_SUCCESS;
    payload: any[];
}

export interface PostSaveRecipesErrorAction {
    type: ActionTypes.POST_SAVERECIPES_ERROR;
    payload: string;
}

// Here starts getSavedRecipe
// Define the action type constants
export interface GetSavedRecipesRequestAction {
    type: ActionTypes.GET_SAVEDRECIPES;
}

export interface GetSavedRecipesSuccessAction {
    type: ActionTypes.GET_SAVEDRECIPES_SUCCESS;
    payload: any[];
}

export interface GetSavedRecipesErrorAction {
    type: ActionTypes.GET_SAVEDRECIPES_ERROR;
    payload: string;
}

// Here starts getSavedRecipe
// Define the action type constants
export interface DeleteSavedRecipesRequestAction {
    type: ActionTypes.DELETE_SAVEDRECIPES;
}

export interface DeleteSavedRecipesSuccessAction {
    type: ActionTypes.DELETE_SAVEDRECIPES_SUCCESS;
    payload: any[];
}

export interface DeleteSavedRecipesErrorAction {
    type: ActionTypes.DELETE_SAVEDRECIPES_ERROR;
    payload: string;
}

// Here starts UpdateSavedRecipe
// Define the action type constants
export interface UpdateSavedRecipesRequestAction {
    type: ActionTypes.UPDATE_SAVEDRECIPES;
}

export interface UpdateSavedRecipesSuccessAction {
    type: ActionTypes.UPDATE_SAVEDRECIPES_SUCCESS;
    payload: any[];
}

export interface UpdateSavedRecipesErrorAction {
    type: ActionTypes.UPDATE_SAVEDRECIPES_ERROR;
    payload: string;
}

// state    
const initialState: DataState = {
    recipes: [],
    favRecipes: [],
    loading: true,
    error: null,
}
export const recipeReducer = (state = initialState, action: RecipesAction): DataState => {
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
        case ActionTypes.GET_QUIZRECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.GET_QUIZRECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.payload,
                error: null,
            };
        case ActionTypes.GET_QUIZRECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ActionTypes.POST_SAVERECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.POST_SAVERECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case ActionTypes.POST_SAVERECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ActionTypes.GET_SAVEDRECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.GET_SAVEDRECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                favRecipes: action.payload,
                error: null,
            };
        case ActionTypes.GET_SAVEDRECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ActionTypes.DELETE_SAVEDRECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.DELETE_SAVEDRECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case ActionTypes.DELETE_SAVEDRECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ActionTypes.UPDATE_SAVEDRECIPES:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ActionTypes.UPDATE_SAVEDRECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case ActionTypes.UPDATE_SAVEDRECIPES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            console.log('Unhandled action type:', action);
            return state;
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
    return async (dispatch: Dispatch<RecipesAction>) => {
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
export const getQuizRecipesRequest = (): GetQuizRecipesRequestAction => {
    return {
        type: ActionTypes.GET_QUIZRECIPES
    };
}

export const getQuizRecipesSuccess = (data: any[]): GetQuizRecipesSuccessAction => {
    return {
        type: ActionTypes.GET_QUIZRECIPES_SUCCESS,
        payload: data,
    };
}

export const getQuizRecipesError = (error: string): GetQuizRecipesErrorAction => {
    return {
        type: ActionTypes.GET_QUIZRECIPES_ERROR,
        payload: error,
    };
}

export const getQuizRecipe = (answers: QuizAnswers) => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        dispatch(getQuizRecipesRequest());

        try {
            const params = {
                type: answers[0] && answers[0][0] ? answers[0][0] : undefined,
                diet: answers[1] && answers[1][0] ? answers[1][0] : undefined,
                intolerances: answers[2] && answers[2][0] ? answers[2][0] : undefined,
            };

            console.log('params: ', params);

            const res: AxiosResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/quiz-recipe`, {
                params
            })
            // store res.data in state(useState)
            console.log('res.data', res.data)
            dispatch(getQuizRecipesSuccess(res.data));
        }
        catch (e) {
            console.log('getQuizRecipe error ', e);
            dispatch(getQuizRecipesError(`${e}`));
        }
    }
}

// converted Save, Delete, Update untill this point
// Here starts postSaveRecipe
export const postSaveRecipesRequest = (): PostSaveRecipesRequestAction => {
    return {
        type: ActionTypes.POST_SAVERECIPES
    };
}

export const postSaveRecipesSuccess = (data: any[]): PostSaveRecipesSuccessAction => {
    return {
        type: ActionTypes.POST_SAVERECIPES_SUCCESS,
        payload: data,
    };
}

export const postSaveRecipesError = (error: string): PostSaveRecipesErrorAction => {
    return {
        type: ActionTypes.POST_SAVERECIPES_ERROR,
        payload: error,
    };
}

export const postSaveRecipe = (recipeId: number, recipe: Recipe, user: User) => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        console.log('postSaveRecipe');
        dispatch(postSaveRecipesRequest());

        try {
            const token = await user.getIdToken();
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/favorites`, { recipeId, recipe }, { headers: { idtoken: token } });
            console.log('Recipe saved successfully', res.data);
            dispatch(postSaveRecipesSuccess(res.data));
        } catch (error) {
            console.error('Error saving recipe', error);
            dispatch(postSaveRecipesError(`${error}`));
        }
    };
};


// Here starts getSavedRecipe (not sure if these are correct)
export const getSavedRecipesRequest = (): GetSavedRecipesRequestAction => {
    return {
        type: ActionTypes.GET_SAVEDRECIPES
    };
}

export const getSavedRecipesSuccess = (data: any[]): GetSavedRecipesSuccessAction => {
    return {
        type: ActionTypes.GET_SAVEDRECIPES_SUCCESS,
        payload: data,
    };
}

export const getSavedRecipesError = (error: string): GetSavedRecipesErrorAction => {
    return {
        type: ActionTypes.GET_SAVEDRECIPES_ERROR,
        payload: error,
    };
}
export const getSavedRecipes = () => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        dispatch({ type: ActionTypes.GET_SAVEDRECIPES });

        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/favorites`, {
                headers: {
                    idToken: await auth.currentUser?.getIdToken(),
                },
            });

            dispatch({
                type: ActionTypes.GET_SAVEDRECIPES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            console.error('Error getting saved recipes', error);
            dispatch(getSavedRecipesError(`${error}`));
        }
    };
};

// Here starts deleteSavedRecipe
export const deleteRecipesRequest = (): DeleteSavedRecipesRequestAction => {
    return {
        type: ActionTypes.DELETE_SAVEDRECIPES
    };
}

export const deleteRecipesSuccess = (data: any[]): DeleteSavedRecipesSuccessAction => {
    return {
        type: ActionTypes.DELETE_SAVEDRECIPES_SUCCESS,
        payload: data,
    };
}

export const deleteRecipesError = (error: string): DeleteSavedRecipesErrorAction => {
    return {
        type: ActionTypes.DELETE_SAVEDRECIPES_ERROR,
        payload: error,
    };
}

export const deleteRecipe = (recipeId: string, user: User) => {
    return async (dispatch: Dispatch<RecipesAction>) => {
        console.log('deleteRecipe');
        dispatch(deleteRecipesRequest());

        try {
            const token = await user.getIdToken();
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/favorites/${recipeId}`, {
                headers: {
                    idtoken: token
                }
            });
            console.log('Recipe deleted successfully', res.data);
            dispatch(deleteRecipesSuccess(res.data));
        } catch (error) {
            console.error('Error deleting recipe', error);
            dispatch(deleteRecipesError(`${error}`));
        }
    };
};

// Here starts updateSavedRecipe (not sure if these are correct)
export const updateRecipesRequest = (): UpdateSavedRecipesRequestAction => {
    return {
        type: ActionTypes.UPDATE_SAVEDRECIPES
    };
}

export const updateRecipesSuccess = (data: any[]): UpdateSavedRecipesSuccessAction => {
    return {
        type: ActionTypes.UPDATE_SAVEDRECIPES_SUCCESS,
        payload: data,
    };
}

export const updateRecipesError = (error: string): UpdateSavedRecipesErrorAction => {
    return {
        type: ActionTypes.UPDATE_SAVEDRECIPES_ERROR,
        payload: error,
    };
}

export const updateSavedRecipe = (recipeId: string, isCooked: boolean, review?: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: ActionTypes.UPDATE_SAVEDRECIPES });

        try {
            const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/favorites/${recipeId}`,
                {
                    isCooked,
                    review
                },
                {
                    headers: {
                        idToken: await auth.currentUser?.getIdToken(),
                    },
                }
            );

            dispatch({
                type: ActionTypes.UPDATE_SAVEDRECIPES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            console.error('Error updating recipe', error);
            dispatch(updateRecipesError(`${error}`));
        }
    };
};
