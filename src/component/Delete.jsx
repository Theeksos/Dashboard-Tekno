import React from 'react';
import './Modal.css'; // Import CSS khusus untuk modal

const Delete = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>x</button>
        <h2>Yakin ingin menghapus?</h2>
        <div className="confirm-button">
            <button onClick={onClose}>Yes</button>
            <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
