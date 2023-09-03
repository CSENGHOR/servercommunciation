import { api } from "../utils/api";

// get all users
export const GET_ALL_USERS = async () => {
    const response = await api.get("users");
    return response.data;
}
// get user by id
export const GET_USER_BY_ID = async (id) => {
    const response = await api.get(`users/${id}`);
    return response.data;
}
// create user
// update user

// delete user