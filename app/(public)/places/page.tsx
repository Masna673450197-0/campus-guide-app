import Link from 'next/link';
import { placesData } from '@/data/places';

export default function PlacesPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">สถานที่ในมหาวิทยาลัย</h1>
        <p className="text-gray-600 mt-1">เลือกสถานที่เพื่อดูรายละเอียดข้อมูลและพิกัดที่ตั้ง</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placesData.map((place) => (
          <div key={place.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
            <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                {place.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2">{place.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">{place.description}</p>
              <Link
                href={`/places/${place.slug}`}
                className="inline-block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}