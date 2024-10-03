import React from 'react';
import './Modal.css'; // Import CSS khusus untuk modal

const Add = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>x</button>
        <h2>Tambah Data</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="pic">PIC :</label>
            <input type="text" id="pic" name="pic" required />
            <label htmlFor="week">Week :</label>
            <input type="text" id="week" name="week" required />
            <label htmlFor="date">Date :</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="opportunity">Opportunity :</label>
            <input type="text" id="opportunity" name="opportunity" required />
            <label htmlFor="type">Type :</label>
            <input type="text" id="type" name="type" required />
            <label htmlFor="account">Account :</label>
            <input type="text" id="account" name="account" required />
            <label htmlFor="activity">Activity :</label>
            <input type="text" id="activity" name="activity" required />
          </div>
          <div className="modal-actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
