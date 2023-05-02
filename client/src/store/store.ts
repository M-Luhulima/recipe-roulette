import { Action, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers'
// import { RecipesAction, GetQuizRecipesAction } from './reducers/recipesReducer';
import { RecipesAction } from './reducers/recipesReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
// export type AppDispatch = ThunkDispatch<any, any, Action<RecipesAction | GetQuizRecipesAction >>
export type AppDispatch = ThunkDispatch<any, any, Action<RecipesAction>>
export const useRecipeDispatch = () => useDispatch<AppDispatch>();
export const useQuizRecipeDispatch = () => useDispatch<AppDispatch>();
export const useSaveRecipeDispatch = () => useDispatch<AppDispatch>();

export const useRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useQuizRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSaveRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;

