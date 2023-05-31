import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./reducers/mainReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ mainReducer });

export const store = configureStore({
    reducer: {
        rootReducer: rootReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
