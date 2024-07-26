import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// ดึงชื่อไฟล์ปัจจุบันและชื่อโฟลเดอร์ที่ไฟล์นั้นอยู่
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// ตั้งค่ามิดเดิลแวร์
app.use(cors()); // เปิดใช้งาน CORS เพื่อให้การเข้าถึงจากโดเมนอื่นได้
app.use(morgan('dev')); // บันทึกข้อมูลการร้องขอในคอนโซล
app.use(express.json()); // แปลงข้อมูล JSON ที่ส่งมาจากการร้องขอ

// ให้บริการไฟล์สแตติกจากโฟลเดอร์ 'public'
app.use(express.static(path.join(__dirname, 'public')));

// ตัวอย่างข้อมูลแผงตลาดในหน่วยความจำ
let stalls = [];

// เส้นทาง API สำหรับการจัดการแผงตลาด
app.get('/api/stalls', (req, res) => {
  res.json(stalls); // ส่งคืนรายการแผงตลาดทั้งหมด
});

app.post('/api/stalls', (req, res) => {
  const stall = { id: Date.now(), ...req.body }; // สร้างแผงตลาดใหม่ด้วย ID ที่ไม่ซ้ำ
  stalls.push(stall); // เพิ่มแผงตลาดลงในรายการ
  res.json(stall); // ส่งคืนแผงตลาดที่สร้างใหม่
});

app.get('/api/stalls/:id', (req, res) => {
  const { id } = req.params;
  const stall = stalls.find(stall => stall.id == id); // ค้นหาแผงตลาดตาม ID
  if (stall) {
    res.json(stall); // ส่งคืนแผงตลาดที่ค้นพบ
  } else {
    res.status(404).json({ message: 'ไม่พบแผงตลาด' }); // ส่งคืนข้อผิดพลาดหากไม่พบแผงตลาด
  }
});

app.put('/api/stalls/:id', (req, res) => {
  const { id } = req.params;
  const index = stalls.findIndex(stall => stall.id == id); // ค้นหาตำแหน่งของแผงตลาดที่จะอัปเดต
  if (index !== -1) {
    stalls[index] = { ...stalls[index], ...req.body }; // อัปเดตข้อมูลของแผงตลาด
    res.json(stalls[index]); // ส่งคืนแผงตลาดที่อัปเดต
  } else {
    res.status(404).json({ message: 'ไม่พบแผงตลาด' }); // ส่งคืนข้อผิดพลาดหากไม่พบแผงตลาด
  }
});

app.delete('/api/stalls/:id', (req, res) => {
  const { id } = req.params;
  stalls = stalls.filter(stall => stall.id != id); // ลบแผงตลาดที่มี ID ที่ระบุ
  res.json({ message: 'ลบแผงตลาดเรียบร้อยแล้ว' }); // ยืนยันการลบ
});

// ให้บริการไฟล์ HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // ให้บริการหน้าแรก
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html')); // ให้บริการหน้าลงทะเบียน
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html')); // ให้บริการหน้าล็อกอิน
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html')); // ให้บริการหน้าเกี่ยวกับเรา
});

// การจัดการข้อผิดพลาดสำหรับเส้นทางที่ไม่พบ
app.use((req, res) => {
  res.status(404).send('ไม่พบหน้า'); // จัดการข้อผิดพลาด 404
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // บันทึกข้อความเมื่อเซิร์ฟเวอร์เริ่มทำงาน
});
