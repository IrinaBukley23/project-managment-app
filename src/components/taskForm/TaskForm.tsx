import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import {
  setTaskDescr,
  setTaskName,
  setTaskUser,
  setTaskList,
  setIsOpen,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './taskForm.styled';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';

const TaskForm = () => {
  const { taskList, taskName, taskDescr, taskUser } = useSelector((state: State) => state.task);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const myId = nextId();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setTaskList([
        ...taskList,
        {
          taskId: myId,
          taskName: taskName,
          taskDescr: taskDescr,
          taskUser: taskUser,
        },
      ])
    );
    dispatch(setTaskName(''));
    dispatch(setTaskDescr(''));
    dispatch(setTaskUser(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleTaskSubmit}>
        <Styled.Title>{t('TaskForm.title')}</Styled.Title>
        <label>{t('TaskForm.name')}:</label>
        <Styled.Form_input
          type="text"
          value={taskName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskName)}
          placeholder={t('TaskForm.namePlaceholder')}
          required
        />
        <label>{t('TaskForm.description')}:</label>
        <Styled.Form_input
          type="text"
          value={taskDescr}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskDescr)}
          placeholder={t('TaskForm.descriptionPlaceholder')}
          required
        />
        <label>{t('TaskForm.user')}:</label>
        <Styled.Form_input
          type="text"
          value={taskUser}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setTaskUser)}
          placeholder={t('TaskForm.userPlaceholder')}
          required
        />
        <Styled.Form_input_submit type="submit" value={t('TaskForm.btn')} />
      </Styled.Form>
    </>
  );
};

export default TaskForm;
