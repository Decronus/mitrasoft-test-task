import { takeEvery, put, call, all } from "redux-saga/effects";
import { fetchPosts, fetchPostComments, fetchUser } from "../../api/api";
import { setPostsCreator, setCommentsCreator, setUserCreator } from "../actions/creators/main";
import { setPostsErrorCreator, setCommentsErrorCreator, setUserErrorCreator } from "../actions/creators/errors";
import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER } from "../actions/types/main";

const delay = (ms) =>
    new Promise((res) => {
        setTimeout(res, ms);
    });

function* workerPosts() {
    try {
        yield delay(500);
        const posts = yield call(fetchPosts);
        yield put(setPostsCreator(posts.data));
        yield put(setPostsErrorCreator(""));
    } catch {
        yield put(setPostsErrorCreator("Ошибка при загрузке постов"));
    }
}

function* watcherPosts() {
    yield takeEvery(FETCH_POSTS, workerPosts);
}

function* workerComments({ payload }) {
    try {
        yield delay(500);
        const { id } = payload;
        const { data: comments } = yield call(fetchPostComments, id);
        const commentsPayload = { id, comments };
        yield put(setCommentsCreator(commentsPayload));
        yield put(setCommentsErrorCreator(""));
    } catch {
        yield put(setCommentsErrorCreator("Ошибка при загрузке комментариев"));
    }
}

function* watcherComments() {
    yield takeEvery(FETCH_COMMENTS, workerComments);
}

function* workerUser({ payload }) {
    try {
        yield delay(500);
        const { id } = payload;
        const { data: user } = yield call(fetchUser, id);
        const userPayload = { user };
        yield put(setUserCreator(userPayload));
        yield put(setUserErrorCreator(""));
    } catch {
        yield put(setUserErrorCreator("Ошибка при загрузке пользователя"));
    }
}

function* watcherUser() {
    yield takeEvery(FETCH_USER, workerUser);
}

export default function* rootSaga() {
    yield all([watcherPosts(), watcherComments(), watcherUser()]);
}
