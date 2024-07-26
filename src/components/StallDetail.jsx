// src/components/StallDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const StallDetail = () => {
  const { id } = useParams();
  const [stall, setStall] = useState(null);

  useEffect(() => {
    fetch(`/api/stalls/${id}`)
      .then((res) => res.json())
      .then((data) => setStall(data));
  }, [id]);

  if (!stall) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">รายละเอียดแผงตลาด: {stall.name}</h1>
      <p>ชื่อแผงตลาด: {stall.name}</p>
      <p>รายละเอียดอื่นๆ: {stall.details}</p>
      <Link to="/dashboard" className="btn btn-primary mt-4">กลับไปที่ Dashboard</Link>
    </div>
  );
};

export default StallDetail;
