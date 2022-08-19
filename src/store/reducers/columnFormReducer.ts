import { IColumnList, IFormColumn, initialState } from '../utils';
import { Actions, Action } from '../actions/actionTypes';

export const columnFormReducer = (state: IFormColumn = initialState.column, action: Action) => {
  switch (action.type) {
    case Actions.SET_COLUMNTITLE: {
      return {
        ...state,
        columnTitle: action.payload,
      };
    }
    case Actions.EDIT_COLUMNTITLE: {
      const newColumnList = state.columnList.map((item: IColumnList) => {
        if (item.columnId === action.payload.columnId) {
          return {
            ...item,
            columnTitle: action.payload.columnTitle,
          };
        }
        return item;
      });
      return {
        ...state,
        columnList: newColumnList,
      };
    }
    case Actions.SET_COLUMNLIST: {
      return {
        ...state,
        columnList: [...action.payload],
      };
    }
    case Actions.REMOVE_COLUMN: {
      return {
        ...state,
        columnList: state.columnList.filter((column) => column.columnId !== action.payload),
      };
    }
    default:
      return state;
  }
};
