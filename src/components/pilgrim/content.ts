/**
 * Hand-written landing-page copy for pilgrims who read Urdu or Indonesian.
 * DRAFT: needs review by a native speaker before it is relied on.
 * Rules kept from the rest of the site: no prices, no fleet numbers, no licence claims,
 * no promises about response time or availability.
 */
export interface PilgrimContent {
  lang: "ur" | "id";
  dir: "rtl" | "ltr";
  htmlLang: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  ogLocale: string;
  languageName: string; // English name, sent to staff in the WhatsApp message
  brandNote: string;
  hero: { eyebrow: string; title: string; lead: string; whatsapp: string; call: string; note: string };
  arrangeTitle: string;
  arrange: [string, string][];
  stepsTitle: string;
  steps: [string, string][];
  honestTitle: string;
  honest: string[];
  toolsTitle: string;
  toolsLead: string;
  tools: { href: string; name: string; text: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  form: {
    title: string;
    lead: string;
    name: string;
    from: string;
    to: string;
    when: string;
    flight: string;
    people: string;
    bags: string;
    note: string;
    send: string;
    privacy: string;
  };
  footer: { home: string; english: string; privacy: string; rights: string };
}

export const ur: PilgrimContent = {
  lang: "ur",
  dir: "rtl",
  htmlLang: "ur",
  path: "/ur",
  metaTitle: "عمرہ اور زیارت کے لیے سعودی عرب میں ٹرانسپورٹ",
  metaDescription:
    "ایئرپورٹ سے ہوٹل، مکہ سے مدینہ اور زیارات کے لیے نجی ٹرانسپورٹ۔ اپنے سفر کی تفصیل بھیجیں، ہم گاڑی اور قیمت تحریری طور پر بتائیں گے۔",
  ogLocale: "ur_PK",
  languageName: "Urdu",
  brandNote: "سعودی ٹرانسپورٹ گروپ",
  hero: {
    eyebrow: "عمرہ اور زیارت کرنے والوں کے لیے",
    title: "سعودی عرب میں عمرہ اور زیارت کے لیے آرام دہ نجی ٹرانسپورٹ",
    lead: "ایئرپورٹ سے ہوٹل، مکہ سے مدینہ، زیارات اور واپسی تک۔ اپنے سفر کی تفصیل بھیجیں، ہم گاڑی اور قیمت تحریری طور پر بتائیں گے۔",
    whatsapp: "واٹس ایپ پر پیغام بھیجیں",
    call: "فون کریں",
    note: "ہم صرف سڑک کی ٹرانسپورٹ فراہم کرتے ہیں۔ ہم ویزا، پرمٹ یا عمرہ پیکج جاری نہیں کرتے۔",
  },
  arrangeTitle: "ہم کیا انتظام کرتے ہیں",
  arrange: [
    ["ایئرپورٹ سے ہوٹل", "جدہ، مدینہ اور دیگر ایئرپورٹس سے آپ کے ہوٹل تک۔"],
    ["مکہ اور مدینہ کے درمیان سفر", "سامان اور نماز کے وقفوں کو سامنے رکھ کر منصوبہ۔"],
    ["زیارات اور شہر کے دورے", "مکہ اور مدینہ میں ڈرائیور کے ساتھ۔"],
    ["خاندان اور گروپ", "مسافروں اور سامان کی تعداد کے مطابق گاڑی۔"],
    ["ٹریول ایجنسیوں کے لیے", "گروپس کی فہرست بھیجیں، ہم ایک منصوبہ بنائیں گے۔"],
    ["ذاتی ڈرائیور", "ایک دن یا کئی دن کے لیے۔"],
  ],
  stepsTitle: "کیسے کام ہوتا ہے",
  steps: [
    ["تفصیل بھیجیں", "تاریخ، ایئرپورٹ، ہوٹل، افراد اور سامان کی تعداد بھیجیں۔"],
    ["تحریری جواب", "ہم گاڑی، وقت اور قیمت لکھ کر بتاتے ہیں اور جو کمی ہو اس کے بارے میں پوچھتے ہیں۔"],
    ["تصدیق", "آپ کی منظوری کے بعد ہی منصوبہ حتمی ہوتا ہے۔"],
    ["سفر", "کسی تبدیلی کی صورت میں ہمیں بتائیں، ہم اسے تحریری طور پر طے کریں گے۔"],
  ],
  honestTitle: "کچھ واضح باتیں",
  honest: [
    "ہم ویب سائٹ پر مقررہ نرخ شائع نہیں کرتے۔ ہر سفر کی قیمت آپ کی تاریخوں اور سامان کے مطابق تحریری طور پر بتائی جاتی ہے۔",
    "تحریری تصدیق سے پہلے کسی تاریخ کے لیے گاڑی کی دستیابی یقینی نہیں۔ رش کے دنوں میں جلد رابطہ کریں۔",
    "ہم عمرہ پیکج آپریٹر نہیں ہیں۔",
    "کسی بھی ٹرانسپورٹ کمپنی سے معاہدہ کرنے سے پہلے اس کے لائسنس اور ڈرائیور کی تفصیل تحریری طور پر مانگیں۔",
  ],
  toolsTitle: "مفت ٹولز",
  toolsLead: "یہ صفحات انگریزی میں ہیں اور کسی بھی کمپنی کے ساتھ استعمال کیے جا سکتے ہیں۔",
  tools: [
    { href: "/umrah-trip-planner", name: "عمرہ ٹرپ پلانر", text: "اپنے تمام سفر ایک ہی جگہ لکھیں، پرنٹ کریں یا شیئر کریں۔" },
    { href: "/driver-card", name: "عربی ڈرائیور کارڈ", text: "ایسا کارڈ بنائیں جو ڈرائیور کو عربی میں بتائے کہ آپ کہاں جا رہے ہیں۔" },
    { href: "/prayer-time-journey-planner", name: "نماز کے اوقات کے مطابق سفر", text: "دیکھیں کہ سفر کے دوران کون سی نماز آئے گی۔" },
    { href: "/compare-transport-quotes", name: "قیمتوں کا موازنہ", text: "کسی بھی کمپنی سے پوچھنے کے سوالات۔" },
    { href: "/check-transport-licence", name: "ٹرانسپورٹ کمپنی کیسے پرکھیں", text: "بکنگ سے پہلے کن باتوں کی تصدیق کریں۔" },
    { href: "/arrival-day-checklist", name: "پہنچنے کے دن کی فہرست", text: "پرواز سے پہلے اور پہنچنے کے بعد کی چیک لسٹ۔" },
  ],
  faqTitle: "عام سوالات",
  faqs: [
    {
      q: "کیا قیمت پہلے سے معلوم ہو سکتی ہے؟",
      a: "جی ہاں۔ آپ کی تفصیل ملنے پر ہم تحریری قیمت بھیجتے ہیں۔ آپ ہم سے پوچھ سکتے ہیں کہ قیمت میں کیا کیا شامل ہے۔",
    },
    {
      q: "گروپ یا خاندان کے لیے کون سی گاڑی ہوگی؟",
      a: "گاڑی مسافروں اور سامان کی تعداد دیکھ کر تجویز کی جاتی ہے اور تحریری جواب میں بتائی جاتی ہے۔",
    },
    {
      q: "پرواز لیٹ ہو جائے تو کیا ہوگا؟",
      a: "پرواز کا نمبر ساتھ بھیجیں اور تاخیر ہو تو فوراً ہمیں بتائیں۔ ہم تبدیلی تحریری طور پر طے کرتے ہیں۔",
    },
    {
      q: "کیا آپ ویزا یا عمرہ پیکج دیتے ہیں؟",
      a: "نہیں۔ ہم صرف سڑک کی ٹرانسپورٹ فراہم کرتے ہیں۔",
    },
    {
      q: "کیا فارم میں دی گئی معلومات محفوظ ہوتی ہیں؟",
      a: "نہیں۔ یہ صفحہ کچھ بھی محفوظ نہیں کرتا۔ واٹس ایپ کا بٹن دبانے پر پیغام آپ کے اپنے فون میں کھلتا ہے۔",
    },
  ],
  form: {
    title: "اپنے سفر کی تفصیل بھیجیں",
    lead: "جو معلوم ہو وہ لکھ دیں، باقی ہم پوچھ لیں گے۔",
    name: "آپ کا نام",
    from: "کہاں سے (ایئرپورٹ یا ہوٹل)",
    to: "کہاں تک (ہوٹل یا شہر)",
    when: "تاریخ اور وقت",
    flight: "پرواز نمبر",
    people: "افراد کی تعداد",
    bags: "سوٹ کیسوں کی تعداد",
    note: "کوئی خاص ضرورت (اختیاری)",
    send: "واٹس ایپ پر بھیجیں",
    privacy: "اس صفحے پر کچھ محفوظ نہیں ہوتا۔ یہ درخواست ہے، بکنگ نہیں۔ گاڑی اور قیمت ہم لکھ کر تصدیق کرتے ہیں۔",
  },
  footer: { home: "English", english: "English site", privacy: "پرائیویسی", rights: "جملہ حقوق محفوظ ہیں" },
};

export const id: PilgrimContent = {
  lang: "id",
  dir: "ltr",
  htmlLang: "id",
  path: "/id",
  metaTitle: "Transportasi Umrah dan Ziarah di Arab Saudi",
  metaDescription:
    "Transportasi pribadi dari bandara ke hotel, Makkah ke Madinah, dan ziarah. Kirim rencana perjalanan Anda, kami jawab secara tertulis dengan kendaraan dan harga.",
  ogLocale: "id_ID",
  languageName: "Indonesian",
  brandNote: "Saudi Transport Group",
  hero: {
    eyebrow: "Untuk jamaah umrah dan ziarah",
    title: "Transportasi pribadi yang nyaman untuk umrah dan ziarah di Arab Saudi",
    lead: "Dari bandara ke hotel, Makkah ke Madinah, ziarah, hingga kepulangan. Kirim rencana perjalanan Anda dan kami akan menjawab secara tertulis dengan kendaraan dan harga.",
    whatsapp: "Kirim pesan lewat WhatsApp",
    call: "Telepon",
    note: "Kami hanya menyediakan transportasi darat. Kami tidak menerbitkan visa, izin, atau paket umrah.",
  },
  arrangeTitle: "Yang kami atur",
  arrange: [
    ["Bandara ke hotel", "Dari bandara Jeddah, Madinah, dan bandara lain ke hotel Anda."],
    ["Antara Makkah dan Madinah", "Rencana perjalanan dengan memperhitungkan bagasi dan waktu shalat."],
    ["Ziarah dan tur kota", "Bersama pengemudi di Makkah dan Madinah."],
    ["Keluarga dan rombongan", "Kendaraan sesuai jumlah penumpang dan bagasi."],
    ["Untuk biro perjalanan", "Kirim daftar rombongan, kami susun satu rencana."],
    ["Pengemudi pribadi", "Untuk satu hari atau lebih."],
  ],
  stepsTitle: "Cara kerjanya",
  steps: [
    ["Kirim rincian", "Tanggal, bandara, hotel, jumlah orang, dan jumlah koper."],
    ["Jawaban tertulis", "Kami menulis kendaraan, waktu, dan harga, lalu menanyakan hal yang masih kurang."],
    ["Konfirmasi", "Rencana baru final setelah Anda menyetujuinya."],
    ["Perjalanan", "Jika ada perubahan, beri tahu kami dan kami konfirmasi secara tertulis."],
  ],
  honestTitle: "Hal yang perlu Anda ketahui",
  honest: [
    "Kami tidak mencantumkan tarif tetap di situs. Harga tiap perjalanan disampaikan secara tertulis sesuai tanggal dan bagasi Anda.",
    "Ketersediaan kendaraan belum pasti sebelum kami konfirmasi secara tertulis. Pada musim ramai, hubungi kami lebih awal.",
    "Kami bukan penyelenggara paket umrah.",
    "Sebelum memesan ke perusahaan transportasi mana pun, minta rincian izin dan data pengemudinya secara tertulis.",
  ],
  toolsTitle: "Alat gratis",
  toolsLead: "Halaman ini dalam bahasa Inggris dan dapat dipakai dengan perusahaan mana pun.",
  tools: [
    { href: "/umrah-trip-planner", name: "Perencana perjalanan umrah", text: "Tulis semua perjalanan Anda di satu tempat, lalu cetak atau bagikan." },
    { href: "/driver-card", name: "Kartu pengemudi berbahasa Arab", text: "Buat kartu yang memberi tahu pengemudi dalam bahasa Arab ke mana Anda pergi." },
    { href: "/prayer-time-journey-planner", name: "Perencana perjalanan menurut waktu shalat", text: "Lihat shalat apa saja yang jatuh selama perjalanan." },
    { href: "/compare-transport-quotes", name: "Membandingkan penawaran", text: "Pertanyaan yang bisa diajukan ke perusahaan mana pun." },
    { href: "/check-transport-licence", name: "Cara memeriksa operator transportasi", text: "Hal yang perlu dipastikan sebelum memesan." },
    { href: "/arrival-day-checklist", name: "Daftar periksa hari kedatangan", text: "Persiapan sebelum terbang dan setelah mendarat." },
  ],
  faqTitle: "Pertanyaan umum",
  faqs: [
    {
      q: "Apakah harga bisa diketahui sebelumnya?",
      a: "Bisa. Setelah menerima rincian Anda, kami mengirim harga secara tertulis. Anda boleh menanyakan apa saja yang termasuk dalam harga.",
    },
    {
      q: "Kendaraan apa yang cocok untuk rombongan atau keluarga?",
      a: "Kendaraan disarankan berdasarkan jumlah penumpang dan bagasi, lalu disebutkan dalam jawaban tertulis kami.",
    },
    {
      q: "Bagaimana jika penerbangan terlambat?",
      a: "Sertakan nomor penerbangan dan segera beri tahu kami jika ada keterlambatan. Perubahan kami sepakati secara tertulis.",
    },
    {
      q: "Apakah Anda menyediakan visa atau paket umrah?",
      a: "Tidak. Kami hanya menyediakan transportasi darat.",
    },
    {
      q: "Apakah data di formulir disimpan?",
      a: "Tidak. Halaman ini tidak menyimpan apa pun. Pesan WhatsApp terbuka di ponsel Anda sendiri saat Anda menekan tombol.",
    },
  ],
  form: {
    title: "Kirim rencana perjalanan Anda",
    lead: "Isi yang Anda ketahui saja, sisanya kami tanyakan.",
    name: "Nama Anda",
    from: "Dari (bandara atau hotel)",
    to: "Ke (hotel atau kota)",
    when: "Tanggal dan jam",
    flight: "Nomor penerbangan",
    people: "Jumlah orang",
    bags: "Jumlah koper",
    note: "Kebutuhan khusus (opsional)",
    send: "Kirim lewat WhatsApp",
    privacy: "Tidak ada data yang disimpan di halaman ini. Ini permintaan, bukan pemesanan. Kendaraan dan harga kami konfirmasi secara tertulis.",
  },
  footer: { home: "English", english: "English site", privacy: "Kebijakan privasi", rights: "Hak cipta dilindungi" },
};
