import axiosInstance from "../utils/axios";

export function fetchPosts() {
    return axiosInstance.get("posts");
}

export function fetchPostComments(id) {
    return axiosInstance.get(`posts/${id}/comments`);
}

export function fetchUser(id) {
    return axiosInstance.get(`users/${id}`);
}
