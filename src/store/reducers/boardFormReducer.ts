import { IFormBoard, initialState } from '../utils';
import { Reducer } from 'redux';
import { Actions, Action } from '../actions/actionTypes';

export const boardFormReducer: Reducer<IFormBoard, Action> = (
  state: IFormBoard = initialState.board,
  action: Action
) => {
  switch (action.type) {
    case Actions.SET_BOARDTITLE: {
      return {
        ...state,
        boardTitle: action.payload,
      };
    }
    case Actions.SET_BOARDDESCR: {
      return {
        ...state,
        boardDescr: action.payload,
      };
    }
    case Actions.SET_BOARDLIST: {
      return {
        ...state,
        boardList: [...action.payload],
      };
    }
    case Actions.REMOVE_BOARD: {
      return {
        ...state,
        boardList: state.boardList.filter((board) => board.boardId !== action.payload),
      };
    }
    default:
      return state;
  }
};
