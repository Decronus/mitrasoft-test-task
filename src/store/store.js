import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./reducers/mainReducer";
import errorsReducer from "./reducers/errorsReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        mainReducer,
        errorsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
