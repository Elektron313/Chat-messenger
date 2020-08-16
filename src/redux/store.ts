import { configureStore, getDefaultMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './slices';

const middleware = getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});
export type AppStateType = ReturnType<typeof rootReducer>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
