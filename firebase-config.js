// ใส่ค่าจาก Firebase เพื่อเปิดโหมดออนไลน์ (ดูขั้นตอนใน README.md)
// ถ้าปล่อยเป็น null ไว้ เกมจะเล่นได้เฉพาะในเครื่อง
// ค่าเหล่านี้เปิดเผยได้ ไม่ใช่รหัสลับ ความปลอดภัยมาจากกฎใน firestore.rules
window.FIREBASE_CONFIG = null;

/* ตัวอย่างหลังวางค่าจาก Firebase:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
