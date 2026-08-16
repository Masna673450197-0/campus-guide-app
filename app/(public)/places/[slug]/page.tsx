import { notFound } from 'next/navigation';
import { placesData } from '@/data/places';

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function PlaceDetailPage({ params }: PageProps) {
  // คลายค่า params เพื่อรองรับทั้ง Next.js 14 และ 15+
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // ค้นหาข้อมูลสถานที่จาก slug
  const place = placesData.find((p) => p.slug === slug);

  // ถ้าหาไม่เจอ ให้แสดงหน้า 404
  if (!place) {
    notFound();
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 max-w-4xl mx-auto my-6">
      <img
        src={place.imageUrl}
        alt={place.name}
        className="w-full h-72 md:h-96 object-cover rounded-xl mb-6"
      />

      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          {place.category}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{place.name}</h1>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{place.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
        <div>
          <span className="text-sm text-gray-500 block mb-1">📍 ตำแหน่งที่ตั้ง</span>
          <span className="font-semibold text-gray-800">{place.location}</span>
        </div>
        <div>
          <span className="text-sm text-gray-500 block mb-1">⏰ เวลาทำการ</span>
          <span className="font-semibold text-gray-800">{place.openingHours}</span>
        </div>
      </div>
    </div>
  );
}