// src/components/EditStallForm.jsx
import React, { useState, useEffect } from 'react';

const EditStallForm = ({ selectedStall, onUpdateStall, onCancel }) => {
  const [stallName, setStallName] = useState('');

  useEffect(() => {
    if (selectedStall) {
      setStallName(selectedStall.name);
    }
  }, [selectedStall]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStall({ ...selectedStall, name: stallName });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">แก้ไขแผงตลาด</h2>
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
      <div className="flex justify-end">
        <button type="button" onClick={onCancel} className="btn btn-secondary mr-2">
          ยกเลิก
        </button>
        <button type="submit" className="btn btn-primary">
          บันทึก
        </button>
      </div>
    </form>
  );
};

export default EditStallForm;
