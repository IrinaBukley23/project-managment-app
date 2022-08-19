import { Action, Actions } from '../actions/actionTypes';
import { Reducer } from 'redux';
import { initialState, IFormProfile } from '../utils';

export const profileFormReducer: Reducer<IFormProfile, Action> = (
  state: IFormProfile = initialState.profile,
  action: Action
): IFormProfile => {
  switch (action.type) {
    case Actions.SET_USERNAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case Actions.SET_USEREMAIL: {
      return {
        ...state,
        userEmail: action.payload,
      };
    }
    case Actions.SET_USERPASSWORD: {
      return {
        ...state,
        userPassword: action.payload,
      };
    }
    case Actions.SET_USERLIST: {
      return {
        ...state,
        userList: [...action.payload],
      };
    }
    default:
      return state;
  }
};
