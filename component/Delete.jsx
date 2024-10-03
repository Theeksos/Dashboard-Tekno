import React from 'react';

const Delete = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Hapus Data</h2>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Batal</button>
          <button onClick={onDelete}>Hapus</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
