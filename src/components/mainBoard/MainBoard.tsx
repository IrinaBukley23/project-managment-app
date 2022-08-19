import React from 'react';
import { useDispatch } from 'react-redux';
import { setForm, setId, setIsOpen } from '../../store/actions/actionCreators';
import { IBoardList } from '../../store/utils';
import * as Styled from './MainBoard.style';

interface IProps {
  boardItem: IBoardList;
}
const MainBoard = (props: IProps) => {
  const { boardTitle, boardDescr, boardId } = props.boardItem;
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpen(true));
    dispatch(setForm('delete'));
    dispatch(setId(boardId));
  };

  return (
    <Styled.Main_Board id={boardId}>
      <Styled.Link to="/board">
        <Styled.Title>{boardTitle}</Styled.Title>
        <Styled.Description>{boardDescr}</Styled.Description>
      </Styled.Link>
      <Styled.Delete_main_board onClick={handleOpen}>&#128465;</Styled.Delete_main_board>
    </Styled.Main_Board>
  );
};

export default MainBoard;
