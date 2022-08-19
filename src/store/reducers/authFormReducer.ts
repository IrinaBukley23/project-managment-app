import { Reducer } from 'redux';
import { Action, Actions } from '../actions/actionTypes';
import { initialState, IAuthForm } from '../utils';

export const authFormReducer: Reducer<IAuthForm, Action> = (
  state: IAuthForm = initialState.auth,
  action: Action
): IAuthForm => {
  switch (action.type) {
    case Actions.SET_AUTHNAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case Actions.SET_AUTHLOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case Actions.SET_AUTHPASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    default:
      return state;
  }
};
