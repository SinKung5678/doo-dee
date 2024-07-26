// src/components/StallForm.jsx
import React, { useState, useEffect } from 'react';

const StallForm = ({ onSubmit, editingStall, onUpdate }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingStall) {
      setName(editingStall.name);
    } else {
      setName('');
    }
  }, [editingStall]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStall) {
      onUpdate(editingStall.id, name);
    } else {
      onSubmit(name);
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="กรอกชื่อแผง"
        className="input input-bordered w-full max-w-xs"
        required
      />
      <button type="submit" className="btn btn-primary">
        {editingStall ? 'อัปเดตแผง' : 'เพิ่มแผง'}
      </button>
    </form>
  );
};

export default StallForm;
