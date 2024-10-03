import React from 'react';

const Add = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-box bg-white p-4 rounded-lg shadow-lg relative">
        <button className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>x</button>
        <h2 className="text-xl font-semibold mb-4">Tambah Data</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group space-y-2">
            <label htmlFor="pic">PIC :</label>
            <input type="text" id="pic" name="pic" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="week">Week :</label>
            <input type="text" id="week" name="week" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="date">Date :</label>
            <input type="date" id="date" name="date" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="opportunity">Opportunity :</label>
            <input type="text" id="opportunity" name="opportunity" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="type">Type :</label>
            <input type="text" id="type" name="type" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="account">Account :</label>
            <input type="text" id="account" name="account" className="border border-gray-300 rounded p-2 w-full" required />
            
            <label htmlFor="activity">Activity :</label>
            <input type="text" id="activity" name="activity" className="border border-gray-300 rounded p-2 w-full" required />
          </div>
          
          <div className="modal-actions mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
