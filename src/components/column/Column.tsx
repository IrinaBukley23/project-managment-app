import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editColumnTitle,
  setForm,
  setId,
  setIsOpen,
  setTaskList,
} from '../../store/actions/actionCreators';
import { IColumnList, State } from '../../store/utils';
import Button from '../button/Button';
import Task from '../task/Task';
import * as Styled from './column.style';
import { useTranslation } from 'react-i18next';

interface IProps {
  columnItem: IColumnList;
}

const Column = (props: IProps) => {
  const { t } = useTranslation();
  const { columnTitle, columnId } = props.columnItem;
  const { taskList } = useSelector((state: State) => state.task);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setIsOpen(true));
    handleAddTask();
    dispatch(setId(columnId));
    dispatch(setForm('task'));
  };

  const handleOpenConfirm = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('deleteCol'));
    dispatch(setId(columnId));
  };

  const handleAddTask = () => {
    dispatch(setTaskList([...taskList]));
  };

  const [isEdit, setIsEdit] = useState(false);
  const [correctedTitle, setCorrectedTitle] = useState(columnTitle);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCorrect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectedTitle(e.target.value);
  };

  const handleSave = () => {
    setIsEdit(false);
    dispatch(editColumnTitle(columnId, correctedTitle));
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      <Styled.Column>
        {!isEdit && <Styled.Title onClick={handleEdit}>{columnTitle}</Styled.Title>}
        {isEdit && (
          <>
            <Styled.Input type="text" value={correctedTitle} onChange={handleCorrect} />
            <Styled.Btn_block>
              <Button textButton="Submit" onClick={handleSave} />
              <Button textButton="Cancel" onClick={handleCancel} />
            </Styled.Btn_block>
          </>
        )}
        <Styled.Task_list>
          {taskList?.map((task, i) => {
            return <Task key={i} taskItem={task} />;
          })}
        </Styled.Task_list>
        <Button id="task" textButton={'➕ ' + t('Task.addTask')} onClick={handleOpenModal} />
        <Styled.Delete_main_board onClick={handleOpenConfirm}>&#128465;</Styled.Delete_main_board>
      </Styled.Column>
    </>
  );
};

export default Column;
