'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// แปลง Path segment ภาษาอังกฤษเป็นข้อความภาษาไทยที่อ่านง่าย
const breadcrumbNameMap: Record<string, string> = {
  about: 'เกี่ยวกับผู้พัฒนา',
  places: 'รายการสถานที่',
  admin: 'ระบบหลังบ้าน',
  'place-management': 'จัดการสถานที่',
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // แยก path ออกเป็นส่วนๆ เช่น /places/central-library -> ['places', 'central-library']
  const pathSegments = pathname.split('/').filter((x) => x);

  // หากอยู่น้าแรกสุด ไม่ต้องแสดง Breadcrumb
  if (pathSegments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex my-4">
      <ol role="list" className="flex items-center space-x-2 text-sm">
        {/* 1. ปุ่ม Home (ไอคอนบ้าน) */}
        <li>
          <div>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">หน้าแรก</span>
            </Link>
          </div>
        </li>

        {/* 2. Dynamic Items ตามเส้นทาง Route */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          // ดึงชื่อภาษาไทยจาก Map หรือถ้าไม่เจอให้ใช้ชื่อ Segment ดั้งเดิม ( decoded )
          const displayName = breadcrumbNameMap[segment] || decodeURIComponent(segment);

          return (
            <li key={href}>
              <div className="flex items-center space-x-2">
                {/* Chevron Right Icon ตามสไตล์ Tailwind UI */}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>

                {isLast ? (
                  // หน้าปัจจุบัน (Active Link)
                  <span
                    aria-current="page"
                    className="font-semibold text-blue-600 capitalize"
                  >
                    {displayName}
                  </span>
                ) : (
                  // ลิงก์ย้อนกลับไปยังสเต็ปก่อนหน้า
                  <Link
                    href={href}
                    className="font-medium text-gray-500 hover:text-gray-700 transition-colors capitalize"
                  >
                    {displayName}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}