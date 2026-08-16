export default function AboutPage() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600 border-4 border-blue-50">
          👤
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">นายนรภัทร ศรีเทพ</h1>
          <p className="text-blue-600 font-medium">รหัสนักศึกษา: 673450197-0</p>
          <p className="text-gray-500">สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์</p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">เกี่ยวกับผู้พัฒนา</h2>
        <p>
         ผู้มีพลังจิต สามารถควบคุมสิ่งของในอวกาศ
            ได้ด้วยพลังจิตของตนเอง และมีความสามารถในการสื่อสารกับสิ่งมีชีวิตอื่น ๆ ผ่านทางจิตใจ
        </p>
        <h3 className="text-lg font-semibold text-gray-900 pt-2">ทักษะและความสนใจ</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Frontend Web Development (Next.js, React, Tailwind CSS)</li>
          <li>UX/UI Design & Web Accessibility</li>
        </ul>
      </div>
    </div>
  );
}