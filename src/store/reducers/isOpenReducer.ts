import { IModal, initialState } from '../utils';
import { Reducer } from 'redux';
import { Actions, Action } from '../actions/actionTypes';

export const isOpenReducer: Reducer<IModal, Action> = (
  state: IModal = initialState.modal,
  action: Action
): IModal => {
  switch (action.type) {
    case Actions.SET_ISOPEN: {
      return {
        ...state,
        isOpen: action.payload,
      };
    }
    case Actions.SET_FORM: {
      return {
        ...state,
        form: action.payload,
      };
    }
    case Actions.SET_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    default:
      return state;
  }
};
