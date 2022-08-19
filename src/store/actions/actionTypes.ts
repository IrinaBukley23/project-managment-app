import { IRegList, ITaskList, IColumnList, IBoardList } from '../utils';

export enum Actions {
  SET_USERNAME = 'SET_USERNAME',
  SET_USEREMAIL = 'SET_USEREMAIL',
  SET_USERPASSWORD = 'SET_USERPASSWORD',
  SET_USERLIST = 'SET_USERLIST',
  SET_TASKID = 'SET_TASKID',
  SET_TASKNAME = 'SET_TASKNAME',
  SET_TASKDESCR = 'SET_TASKDESCR',
  SET_TASKUSER = 'SET_TASKUSER',
  SET_TASKLIST = 'SET_TASKLIST',
  EDIT_TASKNAME = 'EDIT_TASKNAME',
  EDIT_TASKDESCR = 'EDIT_TASKDESCR',
  EDIT_TASKUSER = 'EDIT_TASKUSER',
  REMOVE_TASK = 'REMOVE_TASK',
  SET_COLUMNID = 'SET_COLUMNID',
  SET_COLUMNTITLE = 'SET_COLUMNTITLE',
  EDIT_COLUMNTITLE = 'EDIT_COLUMNTITLE',
  SET_COLUMNLIST = 'SET_COLUMNLIST',
  REMOVE_COLUMN = 'REMOVE_COLUMN',
  SET_BOARDID = 'SET_BOARDID',
  SET_BOARDTITLE = 'SET_BOARDTITLE',
  SET_BOARDDESCR = 'SET_BOARDDESCR',
  SET_BOARDLIST = 'SET_BOARDLIST',
  REMOVE_BOARD = 'REMOVE_BOARD',
  SET_ISOPEN = 'SET_ISOPEN',
  SET_FORM = 'SET_FORM',
  SET_ID = 'SET_ID',
  SET_USERLOGIN = 'SET_USERLOGIN',
  SET_AUTHNAME = 'SET_AUTHNAME',
  SET_AUTHLOGIN = 'SET_AUTHLOGIN',
  SET_AUTHPASSWORD = 'SET_AUTHPASSWORD',
  SET_USERLOGINPASSWORD = 'SET_USERLOGINPASSWORD',
  SET_LOGIN_ERROR = 'SET_LOGIN_ERROR',
  SET_LOGIN_PASSWORD_ERROR = 'SET_LOGIN_PASSWORD_ERROR',
  SET_LOGIN_USERNOTFOUND_ERROR = 'SET_LOGIN_USERNOTFOUND_ERROR',
  SET_AUTH_NAME_ERROR = 'SET_AUTH_NAME_ERROR',
  SET_AUTH_LOGIN_ERROR = 'SET_AUTH_LOGIN_ERROR',
  SET_AUTH_PASSWORD_ERROR = 'SET_AUTH_PASSWORD_ERROR',
  SET_AUTH_USEREXITS_ERROR = 'SET_AUTH_USEREXITS_ERROR',
}

export type Action =
  | {
      type: Actions.SET_USERNAME;
      payload: string;
    }
  | {
      type: Actions.SET_USEREMAIL;
      payload: string;
    }
  | {
      type: Actions.SET_USERPASSWORD;
      payload: string;
    }
  | {
      type: Actions.SET_USERLIST;
      payload: IRegList[];
    }
  | {
      type: Actions.SET_TASKID;
      payload: string;
    }
  | {
      type: Actions.SET_TASKNAME;
      payload: string;
    }
  | {
      type: Actions.SET_TASKDESCR;
      payload: string;
    }
  | {
      type: Actions.SET_TASKUSER;
      payload: string;
    }
  | {
      type: Actions.EDIT_TASKNAME;
      payload: {
        taskId: string;
        taskName: string;
      };
    }
  | {
      type: Actions.EDIT_TASKDESCR;
      payload: {
        taskId: string;
        taskDescr: string;
      };
    }
  | {
      type: Actions.EDIT_TASKUSER;
      payload: {
        taskId: string;
        taskUser: string;
      };
    }
  | {
      type: Actions.SET_TASKLIST;
      payload: ITaskList[];
    }
  | {
      type: Actions.REMOVE_TASK;
      payload: string;
    }
  | {
      type: Actions.SET_COLUMNID;
      payload: string;
    }
  | {
      type: Actions.SET_COLUMNTITLE;
      payload: string;
    }
  | {
      type: Actions.EDIT_COLUMNTITLE;
      payload: {
        columnId: string;
        columnTitle: string;
      };
    }
  | {
      type: Actions.SET_COLUMNLIST;
      payload: IColumnList[];
    }
  | {
      type: Actions.REMOVE_COLUMN;
      payload: string;
    }
  | {
      type: Actions.SET_ID;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDID;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDTITLE;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDDESCR;
      payload: string;
    }
  | {
      type: Actions.SET_BOARDLIST;
      payload: IBoardList[];
    }
  | {
      type: Actions.REMOVE_BOARD;
      payload: string;
    }
  | {
      type: Actions.SET_ISOPEN;
      payload: boolean;
    }
  | {
      type: Actions.SET_FORM;
      payload: string;
    }
  | {
      type: Actions.SET_AUTHNAME;
      payload: string;
    }
  | {
      type: Actions.SET_AUTHLOGIN;
      payload: string;
    }
  | {
      type: Actions.SET_AUTHPASSWORD;
      payload: string;
    }
  | {
      type: Actions.SET_USERLOGINPASSWORD;
      payload: string;
    }
  | {
      type: Actions.SET_USERLOGIN;
      payload: string;
    }
  | {
      type: Actions.SET_LOGIN_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_LOGIN_PASSWORD_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_LOGIN_USERNOTFOUND_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_AUTH_NAME_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_AUTH_LOGIN_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_AUTH_PASSWORD_ERROR;
      payload: string;
    }
  | {
      type: Actions.SET_AUTH_USEREXITS_ERROR;
      payload: string;
    };
