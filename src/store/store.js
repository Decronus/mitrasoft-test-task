import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./reducers/usersReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({ usersReducer });

export const store = configureStore({
    reducer: {
        rootReducer: rootReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
