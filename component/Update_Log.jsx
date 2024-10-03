import React, { useEffect, useState } from 'react';

const Update = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    pic: '',
    week: '',
    date: '',
    opportunity: '',
    type: '',
    account: '',
    activity: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-box bg-white p-4 rounded-lg shadow-lg relative">
        <button className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>x</button>
        <h2 className="text-xl font-semibold mb-4">Update Data</h2>
        <form onSubmit={(e) => onSubmit(e, formData)}>
          <div className="form-group space-y-2">
            <label htmlFor="pic">PIC :</label>
            <input
              type="text"
              id="pic"
              name="pic"
              value={formData.pic}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="week">Week :</label>
            <input
              type="text"
              id="week"
              name="week"
              value={formData.week}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="date">Date :</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="opportunity">Opportunity :</label>
            <input
              type="text"
              id="opportunity"
              name="opportunity"
              value={formData.opportunity}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="type">Type :</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="account">Account :</label>
            <input
              type="text"
              id="account"
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />

            <label htmlFor="activity">Activity :</label>
            <input
              type="text"
              id="activity"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div className="modal-actions mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
