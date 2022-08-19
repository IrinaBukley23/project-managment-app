import { combineReducers } from 'redux';
import { boardFormReducer } from './boardFormReducer';
import { columnFormReducer } from './columnFormReducer';
import { isOpenReducer } from './isOpenReducer';
import { profileFormReducer } from './profileFormReducer';
import { taskFormReducer } from './taskFormReducer';
import { authFormReducer } from './authFormReducer';
import { loginFormReducer } from './loginFormReducer';
import { FormsErrorsReducer } from './FormsErrorsReducer';

export default combineReducers({
  profile: profileFormReducer,
  board: boardFormReducer,
  column: columnFormReducer,
  task: taskFormReducer,
  modal: isOpenReducer,
  auth: authFormReducer,
  login: loginFormReducer,
  error: FormsErrorsReducer,
});
