import React, { useState } from "react";

const Dashboard = () => {
  const [stalls, setStalls] = useState([]);

  // ตรวจสอบว่าฟังก์ชันนี้ถูกประกาศที่นี่หรือไม่
  const handleEditStall = (id) => {
    // โค้ดของฟังก์ชัน
    console.log("Editing stall with id:", id);
  };

  return (
    <div>
      {/* ใช้งาน handleEditStall ที่นี่ */}
      <button onClick={() => handleEditStall(1)}>Edit Stall</button>
      <ul>
        {stalls.map(stall => (
          <li key={stall.id}>{stall.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
