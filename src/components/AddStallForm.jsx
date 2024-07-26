// src/components/AddStallForm.jsx
import React, { useState } from 'react';

const AddStallForm = ({ onAddStall }) => {
  const [stallName, setStallName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStall({ name: stallName });
    setStallName('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">เพิ่มแผงตลาดใหม่</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">ชื่อแผงตลาด</label>
        <input
          type="text"
          value={stallName}
          onChange={(e) => setStallName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        เพิ่มแผงตลาด
      </button>
    </form>
  );
};

export default AddStallForm;
