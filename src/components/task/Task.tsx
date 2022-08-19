import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setForm, setId, setIsOpen } from '../../store/actions/actionCreators';
import { ITaskList } from '../../store/utils';
import * as Styled from './Task.style';

interface IProps {
  taskItem: ITaskList;
}

const Task = (props: IProps) => {
  const { taskName, taskDescr, taskUser, taskId } = props.taskItem;
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('deleteTask'));
    dispatch(setId(taskId));
  };

  const handleSaveId = () => {
    dispatch(setId(taskId));
  };

  return (
    <Styled.Task_block>
      <NavLink to={`/${taskId}`} onClick={handleSaveId}>
        <Styled.Title>{taskName}</Styled.Title>
        <Styled.Descr>{taskDescr}</Styled.Descr>
        <Styled.User>{taskUser}</Styled.User>
      </NavLink>
      <Styled.Delete_main_board onClick={handleOpen}>&#128465;</Styled.Delete_main_board>
    </Styled.Task_block>
  );
};

export default Task;
