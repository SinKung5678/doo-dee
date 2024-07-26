// src/components/MapList.jsx
import React from 'react';

const MapList = ({ maps }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-center">รายการแผนที่ตลาด</h2>
      <ul className="list-none p-0">
        {maps.map((map, index) => (
          <li key={index} className="flex flex-col items-center p-4 bg-gray-100 my-2 rounded">
            <span>ชื่อแผนที่: {map.mapName}</span>
            <span>จำนวนแผง: {map.stallCount}</span>
            <span>จำนวนโซน: {map.zoneCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapList;
