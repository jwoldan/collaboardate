import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu } from '../../actions/menu_status_actions';

const CardEditModal = () => {
  const {
    show,
  } = useSelector((state) => ({
    show: state.menuStatus.showCardEditModal,
  }));
  const dispatch = useDispatch();


  return (
    <Modal
      isOpen={show}
      contentLabel="Modal"
      className="card-quick-edit-modal"
      overlayClassName="modal-overlay"
      onRequestClose={() => dispatch(toggleMenu('showCardEditModal'))}
    />
  );
};

export default CardEditModal;
