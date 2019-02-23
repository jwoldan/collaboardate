import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { toggleMenu } from '../../actions/menu_status_actions';

const mapStateToProps = ({ menuStatus }) => {
  return {
    show: menuStatus.showCardEditModal,
  };
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleMenu('showCardEditModal')),
});

const CardEditModal = ({ show, toggle }) => (
  <Modal
    isOpen={show}
    contentLabel="Modal"
    className="card-quick-edit-modal"
    overlayClassName="modal-overlay"
    onRequestClose={toggle}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardEditModal);
