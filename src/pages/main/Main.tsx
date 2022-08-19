import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoardForm } from '../../components/boardForm/BoardForm';
import Button from '../../components/button/Button';
import MainBoard from '../../components/mainBoard/MainBoard';
import Modal from '../../components/modal/Modal';
import { setForm, setIsOpen, setRemoveBoard } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './Main.style';
import { useTranslation } from 'react-i18next';
import Confirmation from '../../components/confirmation/Confirmation';

const Main = () => {
  const { t } = useTranslation();
  const { isOpen, form, id } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();
  const { boardList } = useSelector((state: State) => state.board);

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('board'));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const handleRemoveBoard = () => {
    dispatch(setRemoveBoard(id));
    dispatch(setIsOpen(false));
  };
  const confirm = form === 'delete' ? <Confirmation handleRemove={handleRemoveBoard} /> : null;
  const board = form === 'board' ? <BoardForm /> : null;

  return (
    <Styled.Main>
      <Styled.Boards_list>
        <Button textButton={'➕ ' + t('Main.addBoard')} onClick={handleOpen} />
        {boardList.map((el, id) => (
          <MainBoard key={id} boardItem={el} />
        ))}
        <Modal isOpen={isOpen} handleClose={handleClose}>
          {confirm}
          {board}
        </Modal>
      </Styled.Boards_list>
    </Styled.Main>
  );
};

export default Main;
