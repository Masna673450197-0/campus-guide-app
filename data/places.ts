export interface Place {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  location: string;
  openingHours: string;
  imageUrl: string;
}

export const placesData: Place[] = [
  {
    id: "1",
    name: "อาคารเรียนรวม (Lecture Hall Building)",
    slug: "academic-building",
    category: "อาคารเรียน",
    description: "อาคารเรียนหลักสำหรับนักศึกษาคณะสหวิทยาการ รองรับการเรียนการสอนวิชาบรรยาย ห้องปฏิบัติการคอมพิวเตอร์ และห้องเรียนสมาร์ทรูม",
    location: "โซนกลาง คณะสหวิทยาการ มข. วิทยาเขตหนองคาย",
    openingHours: "08:00 - 18:00 น. (จันทร์ - ศุกร์)",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800"
  },
  {
    id: "2",
    name: "อาคารวิทยบริการ (NKC Library)",
    slug: "nkc-library",
    category: "การเรียนรู้",
    description: "ศูนย์เรียนรู้และห้องสมุดประจำวิทยาเขตหนองคาย มีทรัพยากรสารสนเทศ พื้นที่ Co-Working Space สำหรับทำงานกลุ่ม และห้องค้นคว้าวิจัย",
    location: "อาคารวิทยบริการ มข. วิทยาเขตหนองคาย",
    openingHours: "08:30 - 19:30 น. (จันทร์ - ศุกร์)",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800"
  },
  {
    id: "3",
    name: "อาคารปฏิบัติการวิทยาศาสตร์และเทคโนโลยี",
    slug: "science-lab-building",
    category: "ห้องปฏิบัติการ",
    description: "อาคารศูนย์ห้องปฏิบัติการทางวิทยาศาสตร์ เคมี ชีววิทยา และเทคโนโลยีอาหาร สำหรับการเรียนและการวิจัยของนักศึกษาและอาจารย์",
    location: "โซนศูนย์วิทยาศาสตร์ คณะสหวิทยาการ",
    openingHours: "08:30 - 16:30 น. (จันทร์ - ศุกร์)",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800"
  },
  {
    id: "4",
    name: "อาคารบริหารและสำนักงานวิทยาเขตหนองคาย",
    slug: "administration-building",
    category: "หน่วยงานราชการ",
    description: "ศูนย์รวมงานบริหาร งานทะเบียนและประมวลผล กองกิจการนักศึกษา และหน่วยงานสนับสนุนการศึกษาต่างๆ ของวิทยาเขต",
    location: "อาคารบริหาร ด้านหน้าทางเข้าวิทยาเขต",
    openingHours: "08:30 - 16:30 น. (จันทร์ - ศุกร์)",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    id: "5",
    name: "อาคารพลศึกษาและศูนย์กีฬา (Sports Center)",
    slug: "sports-center",
    category: "นันทนาการ",
    description: "โรงยิมเนเซียมในร่ม สนามแบดมินตัน บาสเกตบอล ฟิตเนส และพื้นที่สำหรับจัดกิจกรรมนักศึกษาและนันทนาการ",
    location: "โซนกีฬา ด้านหลังคณะสหวิทยาการ",
    openingHours: "06:00 - 20:00 น. (ทุกวัน)",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
  }
];