import axios from 'axios';
import {
  AUTH_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS,
} from './auth.type';
let API = 'http://localhost:8080';
export const registerUser = (creds) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/signup`, creds);
    const data = await res.data;

    return dispatch({ type: AUTH_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({ type: AUTH_ERROR });
  }
};

export const loginUser = (creds) => async (dispatch) => {
  try {
    const res = await axios.post(`${API}/login`, creds);
    const data = await res.data;
    localStorage.setItem('token', data.token);

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data.token });
  } catch (error) {
    return dispatch({ type: AUTH_ERROR });
  }
};
