import { Reducer } from 'redux';
import { Action, Actions } from '../actions/actionTypes';
import { initialState, IFormLogin } from '../utils';

export const loginFormReducer: Reducer<IFormLogin, Action> = (
  state: IFormLogin = initialState.login,
  action: Action
): IFormLogin => {
  switch (action.type) {
    case Actions.SET_USERLOGIN: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }
    case Actions.SET_USERLOGINPASSWORD: {
      return {
        ...state,
        userLoginPassword: action.payload,
      };
    }
    default:
      return state;
  }
};
