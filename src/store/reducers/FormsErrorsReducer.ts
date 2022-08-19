import { Reducer } from 'redux';
import { Action, Actions } from '../actions/actionTypes';
import { initialState, IError } from '../utils';

export const FormsErrorsReducer: Reducer<IError, Action> = (
  state: IError = initialState.error,
  action: Action
): IError => {
  switch (action.type) {
    case Actions.SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }
    case Actions.SET_LOGIN_PASSWORD_ERROR: {
      return {
        ...state,
        loginPasswordError: action.payload,
      };
    }
    case Actions.SET_AUTH_NAME_ERROR: {
      return {
        ...state,
        authNameError: action.payload,
      };
    }
    case Actions.SET_AUTH_LOGIN_ERROR: {
      return {
        ...state,
        authLoginError: action.payload,
      };
    }
    case Actions.SET_AUTH_PASSWORD_ERROR: {
      return {
        ...state,
        authPasswordError: action.payload,
      };
    }
    case Actions.SET_AUTH_USEREXITS_ERROR: {
      return {
        ...state,
        userExitsError: action.payload,
      };
    }
    default:
      return state;
  }
};
