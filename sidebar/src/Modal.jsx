import React from "react";
import { useAppContext } from "./context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { closeModal, isModalOpen } = useAppContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal</h3>
        <button className="close-modal-btn" type="button" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
