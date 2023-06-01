import { takeEvery, put, call, all, takeLeading } from "redux-saga/effects";
import { fetchPosts, fetchPostComments, fetchUser } from "../../api/api";
import { setPostsCreator, setCommentsCreator, setUserCreator } from "../actions/creators/main";
import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER } from "../actions/types/main";

const delay = (ms) =>
    new Promise((res) => {
        setTimeout(res, ms);
    });

function* workerPosts() {
    yield delay(500);
    const posts = yield call(fetchPosts);
    yield put(setPostsCreator(posts.data));
}

function* watcherPosts() {
    yield takeEvery(FETCH_POSTS, workerPosts);
}

function* workerComments({ payload }) {
    yield delay(500);
    const { id } = payload;
    const { data: comments } = yield call(fetchPostComments, id);
    const commentsPayload = { id, comments };
    yield put(setCommentsCreator(commentsPayload));
}

function* watcherComments() {
    yield takeLeading(FETCH_COMMENTS, workerComments);
}

function* workerUser({ payload }) {
    yield delay(500);
    const { id } = payload;
    const { data: user } = yield call(fetchUser, id);
    const userPayload = { user };
    yield put(setUserCreator(userPayload));
}

function* watcherUser() {
    yield takeEvery(FETCH_USER, workerUser);
}

export default function* rootSaga() {
    yield all([watcherPosts(), watcherComments(), watcherUser()]);
}
