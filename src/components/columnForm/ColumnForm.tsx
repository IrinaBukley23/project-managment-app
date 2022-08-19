import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { setColumnList, setColumnTitle, setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './ColumnForm.style';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';

const ColumnForm = () => {
  const { t } = useTranslation();
  const { columnTitle } = useSelector((state: State) => state.column);
  const { columnList } = useSelector((state: State) => state.column);
  const dispatch = useDispatch();
  const myId = nextId();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => AnyAction
  ) => {
    dispatch(callback(e.target.value));
  };

  const handleColumnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setColumnList([
        ...columnList,
        {
          columnId: myId,
          columnTitle: columnTitle,
        },
      ])
    );
    dispatch(setColumnTitle(''));
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <Styled.Form onSubmit={handleColumnSubmit}>
        <Styled.Title>{t('ColumnForm.title')}</Styled.Title>
        <label>{t('ColumnForm.name')}:</label>
        <Styled.Form_input
          type="text"
          value={columnTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setColumnTitle)}
          placeholder={t('ColumnForm.namePlaceholder')}
          required
        />
        <Styled.Form_input_submit type="submit" value={t('ColumnForm.btn')} />
      </Styled.Form>
    </>
  );
};

export default ColumnForm;
