campus-guide/
├── app/                                  # โฟลเดอร์หลักสำหรับ Next.js App Router
│   ├── (public)/                         # Route Group สำหรับหน้าฝั่งผู้ใช้งานทั่วไป (Public Site)
│   │   ├── layout.tsx                    # Public Layout (มี Navbar, Breadcrumbs และ Footer)
│   │   ├── page.tsx                      # หน้าแรก (Home Page)
│   │   ├── about/
│   │   │   └── page.tsx                  # หน้าเกี่ยวกับผู้พัฒนา (About Page)
│   │   └── places/
│   │       ├── page.tsx                  # หน้าแสดงรายการสถานที่ทั้งหมด (Places List)
│   │       └── [slug]/
│   │           └── page.tsx              # หน้าแสดงรายละเอียดของสถานที่ตาม Slug (Dynamic Route)
│   │
│   ├── (admin)/                          # Route Group สำหรับหน้าฝั่งผู้ดูแลระบบ (Backoffice Site)
│   │   ├── layout.tsx                    # Admin Layout (มี Sidebar และ Topbar สำหรับแอดมิน)
│   │   └── admin/
│   │       └── places/
│   │           └── page.tsx              # หน้าจัดการสถานที่สำหรับ Admin (Place Management)
│   │
│   ├── globals.css                       # ไฟล์กำหนด Style หลักของแอพ (Tailwind CSS Directives)
│   └── layout.tsx                        # Root Layout (กำหนดโครงสร้าง <html> และ <body> นอกสุด)
│
├── components/                           # โฟลเดอร์เก็บ Reusable UI Components
│   ├── Breadcrumbs.tsx                   # คอมโพเนนต์แสดงเส้นทางหน้าปัจจุบัน (ตามสไตล์ Tailwind UI)
│   ├── Navbar.tsx                        # แถบเมนูด้านบนของฝั่ง Public
│   └── Sidebar.tsx                       # เมนูด้านข้างของฝั่ง Admin
│
├── data/                                 # โฟลเดอร์เก็บข้อมูลจำลอง (Mock Data)
│   └── places.ts                         # ข้อมูลสถานที่ อินเทอร์เฟซ Place และส่งออก placesData
│
├── public/                               # โฟลเดอร์เก็บ Static Assets และรูปภาพ
│   ├── images/                           # โฟลเดอร์เก็บไฟล์รูปภาพสถานที่จริงในเครื่อง
│   └── favicon.ico                       # ไอคอนของเว็บไซต์
│
├── .gitignore                            # ไฟล์กำหนดรายการที่ไม่ต้องการให้ Git ติดตาม (เช่น node_modules, .next)
├── package.json                          # ไฟล์ระบุ Dependencies และ Scripts ของโปรเจกต์
├── README.md                             # เอกสารอธิบายโครงสร้างและการทำงานของโปรเจกต์
└── tailwind.config.ts                    # ไฟล์การตั้งค่า Tailwind CSS

ตามลิ้งค์ของอาจารย์
