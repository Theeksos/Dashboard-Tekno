import React from 'react';

const Update = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>x</button>
        <h2>Update Data</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="week">Week :</label>
            <input type="text" id="week" name="week" required />
            <label htmlFor="date">Date :</label>
            <input type="text" id="date" name="date" required />
            <label htmlFor="due">Due Date :</label>
            <input type="text" id="due" name="due" required />
            <label htmlFor="pic">PIC :</label>
            <input type="text" id="pic" name="pic" required />
            <label htmlFor="giver">Work giver :</label>
            <input type="text" id="giver" name="giver" required />
            <label htmlFor="project">Project :</label>
            <input type="text" id="project" name="project" required />
            <label htmlFor="account">Account :</label>
            <input type="text" id="account" name="account" required />
            <label htmlFor="order">Work order :</label>
            <label htmlFor="priority">Priority :</label>
            <select name="priority" id="priority">
              <option value="">High</option>
              <option value="">Medium</option>
              <option value="">Low</option>
            </select>
            <label htmlFor="status">Status :</label>
            <select name="status" id="status">
              <option value="">Approved</option>
              <option value="">Revision</option>
              <option value="">Cancelled</option>
            </select>
            <label htmlFor="progress">Progress :</label>
            <select name="progress" id="progress">
              <option value="">Completed</option>
              <option value="">On progress</option>
              <option value="">Delayed</option>
            </select>
            <label htmlFor="note">Note :</label>
            <input type="textarea" id="note" name="note" required />
          </div>
          <div className="modal-actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
