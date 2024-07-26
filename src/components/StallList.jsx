// src/components/StallList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StallList = ({ stalls, onDeleteStall, onEditStall }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">รายชื่อแผงตลาด</h2>
      <ul>
        {stalls.map((stall) => (
          <li key={stall.id} className="mb-2 flex justify-between items-center">
            <Link to={`/stalls/${stall.id}`} className="text-blue-500">
              {stall.name}
            </Link>
            <div>
              <button onClick={() => onEditStall(stall)} className="btn btn-warning mr-2">
                แก้ไข
              </button>
              <button onClick={() => onDeleteStall(stall.id)} className="btn btn-error">
                ลบ
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StallList;
