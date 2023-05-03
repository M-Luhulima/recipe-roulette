import { Action, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers'
import { RecipesAction } from './reducers/recipesReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
});
export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<any, any, Action<RecipesAction>>
export const useRecipeDispatch = () => useDispatch<AppDispatch>();
export const useQuizRecipeDispatch = () => useDispatch<AppDispatch>();
export const useSaveRecipeDispatch = () => useDispatch<AppDispatch>();

export const useRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useQuizRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSaveRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;

