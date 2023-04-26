import { Action, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import rootReducer from './reducers'
import { GetRecipesAction } from './reducers/recipesReducer';

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
export type AppDispatch = ThunkDispatch<any, any, Action<GetRecipesAction>>
export const useRecipeDispatch = () => useDispatch<AppDispatch>();

export const useRecipeSelector: TypedUseSelectorHook<RootState> = useSelector;

