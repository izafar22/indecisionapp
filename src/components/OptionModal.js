import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.select}
    onRequestClose={props.closeModal}
    contentLabel="Selected option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">selected option</h3>
    <p className="modal__body">{props.children}</p>
    <button className="button" onClick={props.closeModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
