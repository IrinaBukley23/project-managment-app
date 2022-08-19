import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import {
  setBoardDescr,
  setBoardList,
  setBoardTitle,
  setIsOpen,
} from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './BoardForm.style';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';

export const BoardForm = () => {
  const { t } = useTranslation();
  const { boardList } = useSelector((state: State) => state.board);
  const { boardTitle, boardDescr } = useSelector((state: State) => state.board);
  const dispatch = useDispatch();
  const myId = nextId();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleBoardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setBoardList([
        ...boardList,
        {
          boardId: myId,
          boardTitle: boardTitle,
          boardDescr: boardDescr,
        },
      ])
    );
    dispatch(setBoardTitle(''));
    dispatch(setBoardDescr(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleBoardSubmit}>
        <Styled.Title>{t('BoardForm.title')}</Styled.Title>
        <label>{t('BoardForm.name')}:</label>
        <Styled.Form_input
          type="text"
          value={boardTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setBoardTitle)}
          placeholder={t('BoardForm.namePlaceholder')}
          required
        />
        <label>{t('BoardForm.description')}:</label>
        <Styled.Form_input
          type="text"
          value={boardDescr}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setBoardDescr)}
          placeholder={t('BoardForm.descriptionPlaceholder')}
          required
        />
        <Styled.Form_input_submit type="submit" value={t('BoardForm.btn')} />
      </Styled.Form>
    </>
  );
};
