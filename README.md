campus-guide/
├── app/                                  
│   ├── (public)/                         # สำหรับหน้าฝั่งผู้ใช้งานทั่วไป
│   │   ├── layout.tsx                    # มี Navbar, Breadcrumbs และ Footer
│   │   ├── page.tsx                      # หน้าแรก
│   │   ├── about/
│   │   │   └── page.tsx                  # หน้าเกี่ยวกับผู้พัฒนา
│   │   └── places/
│   │       ├── page.tsx                  # หน้าแสดงรายการสถานที่ทั้งหมด
│   │       └── [slug]/
│   │           └── page.tsx              # หน้าแสดงรายละเอียดของสถานที่ตามSlug
│   │
│   ├── (admin)/                          # สำหรับหน้าฝั่งผู้ดูแลระบบ
│   │   ├── layout.tsx                    # Admin Layout
│   │   └── admin/
│   │       └── places/
│   │           └── page.tsx              # หน้าจัดการสถานที่สำหรับAdmin
│   │
│   ├── globals.css                       # ไฟล์กำหนด Style หลักของแอพ
│   └── layout.tsx                        # Root Layout
│
├── components/                           # โฟลเดอร์เก็บ Reusable UI Components
│   ├── Breadcrumbs.tsx                   # คอมโพเนนต์แสดงเส้นทางหน้าปัจจุบัน
│   ├── Navbar.tsx                        # แถบเมนูด้านบนของฝั่ง Public
│   └── Sidebar.tsx                       # เมนูด้านข้างของฝั่ง Admin
│
├── data/                                 # โฟลเดอร์เก็บข้อมูลจำลอง
│   └── places.ts                         # ข้อมูลสถานที่ อินเทอร์เฟซ Place และส่งออก placesData
│
├── public/                               # โฟลเดอร์เก็บ Static Assets และรูปภาพ
│   ├── images/                           # โฟลเดอร์เก็บไฟล์รูปภาพสถานที่จริงในเครื่อง
│   └── favicon.ico                       # ไอคอนของเว็บไซต์
│
├── .gitignore                            # ไฟล์กำหนดรายการที่ไม่ต้องการให้ Git ติดตาม (เช่น node_modules, .next)
├── package.json                          # ไฟล์ระบุ Dependencies และ Scripts ของโปรเจกต์
├── README.md                             # เอกสารอธิบายโครงสร้างและการทำงานของโปรเจกต์
└── tailwind.config.ts                    # ไฟล์การตั้งค่า

ตามลิ้งค์ของอาจารย์
