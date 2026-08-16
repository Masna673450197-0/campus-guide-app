import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-12 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">🏫 ยินดีต้อนรับสู่ Campus Guide</h1>
      <p className="text-gray-600">ค้นหารายละเอียดสถานที่และอาคารต่างๆ ภายในมหาวิทยาลัย</p>
      <div>
        <Link
          href="/places"
          className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          ดูรายการสถานที่ทั้งหมด →
        </Link>
      </div>
    </div>
  );
}