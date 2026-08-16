import { placesData } from '@/data/places';

export default function PlaceManagementPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">จัดการข้อมูลสถานที่ (Place Management)</h1>
          <p className="text-gray-500 text-sm mt-1">รายการสถานที่ทั้งหมดในระบบแอดมิน</p>
        </div>
        <button
          disabled
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
        >
          + เพิ่มสถานที่ใหม่ (ยังไม่เปิดใช้งาน)
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="py-3 px-4">รูปภาพ</th>
              <th className="py-3 px-4">ชื่อสถานที่</th>
              <th className="py-3 px-4">หมวดหมู่</th>
              <th className="py-3 px-4">ตำแหน่ง</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4 text-center">การจัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm text-gray-700">
            {placesData.map((place) => (
              <tr key={place.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img src={place.imageUrl} alt={place.name} className="w-12 h-12 object-cover rounded-md" />
                </td>
                <td className="py-3 px-4 font-semibold text-gray-900">{place.name}</td>
                <td className="py-3 px-4">{place.category}</td>
                <td className="py-3 px-4">{place.location}</td>
                <td className="py-3 px-4 text-gray-500 font-mono text-xs">{place.slug}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    disabled
                    className="text-xs bg-gray-100 text-gray-400 border border-gray-200 px-3 py-1.5 rounded cursor-not-allowed"
                  >
                    แก้ไข
                  </button>
                  <button
                    disabled
                    className="text-xs bg-gray-100 text-gray-400 border border-gray-200 px-3 py-1.5 rounded cursor-not-allowed"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}