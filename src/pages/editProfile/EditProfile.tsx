import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm.tsx/AuthForm';
import Confirmation from '../../components/confirmation/Confirmation';
import Modal from '../../components/modal/Modal';
import { setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';
import * as Styled from './EditProfile.style';

const EditProfile = () => {
  const { isOpen } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpen(true));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  const handleRemoveBoard = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <Styled.Edit>
      <Styled.Delete_Button onClick={handleOpen}>Delete user</Styled.Delete_Button>
      <AuthForm />
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Confirmation handleRemove={handleRemoveBoard} />
      </Modal>
    </Styled.Edit>
  );
};

export default EditProfile;
