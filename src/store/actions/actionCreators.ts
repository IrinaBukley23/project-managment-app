import { IRegList, ITaskList, IColumnList, IBoardList } from '../utils';
import { Actions } from './actionTypes';

export const setUserName = (userName: string) => ({
  type: Actions.SET_USERNAME,
  payload: userName,
});
export const setUserLogin = (userLogin: string) => ({
  type: Actions.SET_USERLOGIN,
  payload: userLogin,
});
export const setUserEmail = (userEmail: string) => ({
  type: Actions.SET_USEREMAIL,
  payload: userEmail,
});
export const setUserPassword = (userPassword: string) => ({
  type: Actions.SET_USERPASSWORD,
  payload: userPassword,
});
export const setUserLoginPassword = (userLoginPassword: string) => ({
  type: Actions.SET_USERLOGINPASSWORD,
  payload: userLoginPassword,
});
export const setUserList = (userList: IRegList[]) => ({
  type: Actions.SET_USERLIST,
  payload: userList,
});
export const setTaskId = (taskId: string) => ({
  type: Actions.SET_TASKID,
  payload: taskId,
});
export const setTaskName = (taskName: string) => ({
  type: Actions.SET_TASKNAME,
  payload: taskName,
});
export const setTaskDescr = (taskDescr: string) => ({
  type: Actions.SET_TASKDESCR,
  payload: taskDescr,
});
export const setTaskUser = (taskUser: string) => ({
  type: Actions.SET_TASKUSER,
  payload: taskUser,
});
export const editTaskName = (taskId?: string, taskName?: string) => ({
  type: Actions.EDIT_TASKNAME,
  payload: {
    taskId,
    taskName,
  },
});
export const editTaskDescr = (taskId?: string, taskDescr?: string) => ({
  type: Actions.EDIT_TASKDESCR,
  payload: {
    taskId,
    taskDescr,
  },
});
export const editTaskUser = (taskId?: string, taskUser?: string) => ({
  type: Actions.EDIT_TASKUSER,
  payload: {
    taskId,
    taskUser,
  },
});
export const setTaskList = (taskList: ITaskList[]) => ({
  type: Actions.SET_TASKLIST,
  payload: taskList,
});
export const setRemoveTask = (taskName: string) => ({
  type: Actions.REMOVE_TASK,
  payload: taskName,
});
export const setColumnId = (columnId: string) => ({
  type: Actions.SET_COLUMNID,
  payload: columnId,
});
export const setColumnTitle = (columnTitle: string) => ({
  type: Actions.SET_COLUMNTITLE,
  payload: columnTitle,
});
export const editColumnTitle = (columnId: string, columnTitle: string) => ({
  type: Actions.EDIT_COLUMNTITLE,
  payload: {
    columnId,
    columnTitle,
  },
});
export const setColumnList = (columnList: IColumnList[]) => ({
  type: Actions.SET_COLUMNLIST,
  payload: columnList,
});
export const setRemoveColumn = (columnTitle: string) => ({
  type: Actions.REMOVE_COLUMN,
  payload: columnTitle,
});
export const setBoardId = (boardId: string) => ({
  type: Actions.SET_BOARDID,
  payload: boardId,
});
export const setId = (id: string) => ({
  type: Actions.SET_ID,
  payload: id,
});
export const setBoardTitle = (boardTitle: string) => ({
  type: Actions.SET_BOARDTITLE,
  payload: boardTitle,
});
export const setBoardDescr = (boardDescr: string) => ({
  type: Actions.SET_BOARDDESCR,
  payload: boardDescr,
});
export const setBoardList = (boardList: IBoardList[]) => ({
  type: Actions.SET_BOARDLIST,
  payload: boardList,
});
export const setRemoveBoard = (boardId: string) => ({
  type: Actions.REMOVE_BOARD,
  payload: boardId,
});
export const setIsOpen = (isOpen: boolean) => ({
  type: Actions.SET_ISOPEN,
  payload: isOpen,
});
export const setForm = (form: string) => ({
  type: Actions.SET_FORM,
  payload: form,
});
export const setAuthName = (name: string) => ({
  type: Actions.SET_AUTHNAME,
  payload: name,
});
export const setAuthLogin = (login: string) => ({
  type: Actions.SET_AUTHLOGIN,
  payload: login,
});
export const setAuthPassword = (password: string) => ({
  type: Actions.SET_AUTHPASSWORD,
  payload: password,
});
export const setLoginError = (loginError: string) => ({
  type: Actions.SET_LOGIN_ERROR,
  payload: loginError,
});
export const setLoginPasswordError = (loginPasswordError: string) => ({
  type: Actions.SET_LOGIN_PASSWORD_ERROR,
  payload: loginPasswordError,
});
export const setLoginUserNotFoundError = (loginUserNotFoundError: string) => ({
  type: Actions.SET_LOGIN_USERNOTFOUND_ERROR,
  payload: loginUserNotFoundError,
});
export const setAuthNameError = (authNameError: string) => ({
  type: Actions.SET_AUTH_NAME_ERROR,
  payload: authNameError,
});
export const setAuthLoginError = (authLoginError: string) => ({
  type: Actions.SET_AUTH_LOGIN_ERROR,
  payload: authLoginError,
});
export const setAuthPasswordError = (authPasswordError: string) => ({
  type: Actions.SET_AUTH_PASSWORD_ERROR,
  payload: authPasswordError,
});
export const setUserAlreadyExists = (userExitsError: string) => ({
  type: Actions.SET_AUTH_USEREXITS_ERROR,
  payload: userExitsError,
});
