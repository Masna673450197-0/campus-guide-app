import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col min-h-screen">
        <div className="p-5 text-lg font-bold border-b border-slate-800">
          ⚙️ Admin Backoffice
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/places"
            className="block px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            จัดการสถานที่ (Places)
          </Link>
          <Link
            href="/places"
            className="block px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            ← กลับหน้าหลัก (Public Site)
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b h-16 flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-gray-800">ระบบจัดการหลังบ้าน</h1>
          <div className="text-sm text-gray-500">ผู้ดูแลระบบ: Admin</div>
        </header>

        <main className="p-6 flex-grow">{children}</main>
      </div>
    </div>
  );
}