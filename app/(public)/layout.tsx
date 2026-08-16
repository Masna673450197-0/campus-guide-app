import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header / Navbar */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/places" className="text-xl font-bold text-blue-600">
            🏫 Campus Guide
          </Link>
          <nav className="flex space-x-6 text-gray-700 font-medium">
            <Link href="/places" className="hover:text-blue-600 transition">สถานที่ทั้งหมด</Link>
            <Link href="/about" className="hover:text-blue-600 transition">เกี่ยวกับผู้พัฒนา</Link>
            <Link href="/admin/places" className="text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-200 hover:bg-blue-100 transition">
              เข้าสู่ระบบ Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-6 flex-grow w-full">
        <Breadcrumbs />
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © 2026 Campus Guide Project. All rights reserved.
      </footer>
    </div>
  );
}