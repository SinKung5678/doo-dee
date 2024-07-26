// src/components/MapForm.jsx
import React, { useState } from 'react';

const MapForm = ({ onAddMap }) => {
  const [mapName, setMapName] = useState('');
  const [zones, setZones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMap({ mapName, zones });
    setMapName('');
    setZones('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">เพิ่มแผนที่ใหม่</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">ชื่อแผนที่</label>
        <input
          type="text"
          value={mapName}
          onChange={(e) => setMapName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">จำนวนโซน</label>
        <input
          type="text"
          value={zones}
          onChange={(e) => setZones(e.target.value)}
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        เพิ่มแผนที่
      </button>
    </form>
  );
};

export default MapForm;
