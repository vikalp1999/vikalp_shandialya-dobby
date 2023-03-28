import {
  AUTH_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS,
} from './auth.type';

const initialState = {
  isRegistered: false,
  isAuth: !!localStorage.getItem('token'),
  userData: {},
  isError: false,
  ErrorMsg: '',
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        isError: false,
        isAuth: true,
        userData: true,
        ErrorMsg: '',
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: payload,
        isError: false,
        userData: payload.user,
        ErrorMsg: '',
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        isRegistered: false,
        isAuth: false,
        isError: true,
        ErrorMsg: payload,
      };
    }
   
    default: {
      return state;
    }
  }
};
