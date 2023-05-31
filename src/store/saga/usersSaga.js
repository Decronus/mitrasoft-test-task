import { call, put, takeEvery } from "redux-saga/effects";

function* fetchPostsWorker(action) {
    // try {
    //   // Вызов асинхронной функции для получения данных
    //   const data = yield call(api.fetchData, action.payload);
    //   // Диспатч успешного действия с полученными данными
    //   yield put(fetchDataSuccess(data));
    // } catch (error) {
    //   // Диспатч действия с ошибкой
    //   yield put(fetchDataFailure(error));
    // }
}

export function* usersWorker() {
    // Прослушивание действия FETCH_DATA_REQUEST и запуск fetchDataSaga
    // yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
