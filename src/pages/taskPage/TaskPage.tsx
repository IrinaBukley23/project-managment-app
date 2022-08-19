import React, { useState } from 'react';
import { ITaskList, State } from '../../store/utils';
import { useNavigate } from 'react-router-dom';
import * as Styled from './TaskPage.style';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import { editTaskDescr, editTaskName, editTaskUser } from '../../store/actions/actionCreators';

export const TaskPage = () => {
  const { taskList } = useSelector((state: State) => state.task);
  const { id } = useSelector((state: State) => state.modal);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useDispatch();
  const [isEditName, setIsEditName] = useState(false);
  const [isEditDescr, setIsEditDescr] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  const taskItem = taskList.map((task) => {
    if (task.taskId === id) {
      return task;
    }
  });
  const newTask = taskItem.sort().slice(0, 1)[0];

  const [correctedName, setCorrectedName] = useState(newTask?.taskName);
  const [correctedDescr, setCorrectedDescr] = useState(newTask?.taskDescr);
  const [correctedUser, setCorrectedUser] = useState(newTask?.taskUser);

  const handleEditName = () => {
    setIsEditName(true);
  };
  const handleEditDescr = () => {
    setIsEditDescr(true);
  };
  const handleEditUser = () => {
    setIsEditUser(true);
  };
  const handleCorrectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedName(e.target.value);
  };
  const handleCorrectDescr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedDescr(e.target.value);
  };
  const handleCorrectUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedUser(e.target.value);
  };
  const handleSaveName = () => {
    setIsEditName(false);
    dispatch(editTaskName(newTask?.taskId, correctedName));
  };
  const handleSaveDescr = () => {
    setIsEditDescr(false);
    dispatch(editTaskDescr(newTask?.taskId, correctedDescr));
  };
  const handleSaveUser = () => {
    setIsEditUser(false);
    dispatch(editTaskUser(newTask?.taskId, correctedUser));
  };
  const handleCancelName = () => {
    setIsEditName(false);
  };
  const handleCancelDescr = () => {
    setIsEditDescr(false);
  };
  const handleCancelUser = () => {
    setIsEditUser(false);
  };

  return (
    <Styled.Wrapper id={'taskId'}>
      <Styled.Task_block>
        {!isEditName && <Styled.Title onClick={handleEditName}>{newTask?.taskName}</Styled.Title>}
        {!isEditDescr && (
          <Styled.Descr onClick={handleEditDescr}>{newTask?.taskDescr}</Styled.Descr>
        )}
        {!isEditUser && <Styled.User onClick={handleEditUser}>{newTask?.taskUser}</Styled.User>}
        {isEditName && (
          <>
            <Styled.Input type="text" value={correctedName} onChange={handleCorrectName} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSaveName} />
              <Button textButton="Cancel" onClick={handleCancelName} />
            </Styled.Btn_block>
          </>
        )}
        {isEditDescr && (
          <>
            <Styled.Input type="text" value={correctedDescr} onChange={handleCorrectDescr} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSaveDescr} />
              <Button textButton="Cancel" onClick={handleCancelDescr} />
            </Styled.Btn_block>
          </>
        )}
        {isEditUser && (
          <>
            <Styled.Input type="text" value={correctedUser} onChange={handleCorrectUser} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSaveUser} />
              <Button textButton="Cancel" onClick={handleCancelUser} />
            </Styled.Btn_block>
          </>
        )}
      </Styled.Task_block>
      <Button textButton="Go back..." onClick={goBack} />
    </Styled.Wrapper>
  );
};
