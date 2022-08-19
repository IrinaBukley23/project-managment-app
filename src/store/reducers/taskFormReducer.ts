import { IFormTask, initialState, ITaskList } from '../utils';
import { Reducer } from 'redux';
import { Actions, Action } from '../actions/actionTypes';

export const taskFormReducer: Reducer<IFormTask, Action> = (
  state: IFormTask = initialState.task,
  action: Action
) => {
  switch (action.type) {
    case Actions.SET_TASKNAME: {
      return {
        ...state,
        taskName: action.payload,
      };
    }
    case Actions.SET_TASKDESCR: {
      return {
        ...state,
        taskDescr: action.payload,
      };
    }
    case Actions.SET_TASKUSER: {
      return {
        ...state,
        taskUser: action.payload,
      };
    }
    case Actions.EDIT_TASKNAME: {
      const newTaskName = state.taskList.map((task: ITaskList) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            taskName: action.payload.taskName,
          };
        }
        return task;
      });
      return {
        ...state,
        taskList: newTaskName,
      };
    }
    case Actions.EDIT_TASKDESCR: {
      const newTaskDescr = state.taskList.map((task: ITaskList) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            taskDescr: action.payload.taskDescr,
          };
        }
        return task;
      });
      return {
        ...state,
        taskList: newTaskDescr,
      };
    }
    case Actions.EDIT_TASKUSER: {
      const newTaskUser = state.taskList.map((task: ITaskList) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            taskUser: action.payload.taskUser,
          };
        }
        return task;
      });
      return {
        ...state,
        taskList: newTaskUser,
      };
    }
    case Actions.SET_TASKLIST: {
      return {
        ...state,
        taskList: [...action.payload],
      };
    }
    case Actions.REMOVE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.taskId == action.payload),
      };
    }
    default:
      return state;
  }
};
