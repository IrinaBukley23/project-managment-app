import React from 'react';
import Column from '../../components/column/Column';
import * as Styled from './board.style';
import Button from './../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/utils';
import ColumnForm from '../../components/columnForm/ColumnForm';
import Modal from '../../components/modal/Modal';
import {
  setForm,
  setIsOpen,
  setRemoveColumn,
  setRemoveTask,
} from '../../store/actions/actionCreators';
import TaskForm from '../../components/taskForm/TaskForm';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../components/confirmation/Confirmation';
import { useNavigate } from 'react-router-dom';

const Board = () => {
  const { t } = useTranslation();
  const { isOpen, form, id } = useSelector((state: State) => state.modal);
  const { columnList } = useSelector((state: State) => state.column);
  const { boardTitle } = useSelector((state: State) => state.board);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleOpenColumn = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('column'));
  };

  const handleCloseColumn = () => {
    dispatch(setIsOpen(false));
  };

  const handleRemoveColumn = () => {
    dispatch(setRemoveColumn(id));
    dispatch(setIsOpen(false));
  };

  const handleRemoveTask = () => {
    dispatch(setRemoveTask(id));
    dispatch(setIsOpen(false));
  };

  const column = form === 'column' ? <ColumnForm /> : null;
  const task = form === 'task' ? <TaskForm /> : null;
  const confirmCol =
    form === 'deleteCol' ? <Confirmation handleRemove={handleRemoveColumn} /> : null;
  const confirmTask =
    form === 'deleteTask' ? <Confirmation handleRemove={handleRemoveTask} /> : null;

  return (
    <>
      <Styled.Wrapper>
        <Button textButton="Go back..." onClick={goBack} />
      </Styled.Wrapper>
      <Styled.Title>{boardTitle}</Styled.Title>
      <Styled.Board>
        {columnList?.map((column, i) => (
          <Column key={i} columnItem={column} />
        ))}
        <Button id="column" textButton={'➕ ' + t('Board.addColumn')} onClick={handleOpenColumn} />
        <Modal isOpen={isOpen} handleClose={handleCloseColumn}>
          {column}
          {task}
          {confirmCol}
          {confirmTask}
        </Modal>
      </Styled.Board>
    </>
  );
};

export default Board;
