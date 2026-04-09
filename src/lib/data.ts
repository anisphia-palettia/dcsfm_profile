// ============================================================
// Shared data — articles, team
// Ganti dengan fetch dari CMS/API saat sudah siap.
// ============================================================

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

// ── Articles ─────────────────────────────────────────────────

export const articles: Article[] = [
  {
    slug: "dcs-fm-20-tahun-mengudara",
    title: "DCS FM Rayakan 20 Tahun Mengudara di Kota Madiun",
    excerpt:
      "Dua dekade menemani warga Madiun, DCS FM 100.50 terus berkomitmen menghadirkan siaran yang informatif, menghibur, dan menginspirasi setiap harinya.",
    body: `Dua puluh tahun bukanlah waktu yang singkat. Sejak pertama kali mengudara, DCS FM 100.50 MHz telah menemani jutaan warga Madiun melalui berbagai momen — pagi yang sibuk, siang yang terik, hingga malam yang tenang.

Perjalanan panjang ini dimulai dari sebuah studio sederhana di jantung Kota Madiun. Dengan peralatan seadanya dan semangat yang membara, para pendiri DCS FM bermimpi menciptakan stasiun radio yang benar-benar milik masyarakat Madiun.

**Milestone 20 Tahun**

Dalam dua dekade perjalanannya, DCS FM telah menyiarkan ribuan jam siaran, menghadirkan ratusan musisi lokal ke udara, dan menjadi corong informasi terpercaya bagi warga Madiun. Kami bangga telah menemani perjalanan hidup begitu banyak pendengar setia.

Memasuki usia ke-20, DCS FM berkomitmen untuk terus berinovasi — menghadirkan konten yang relevan, menjangkau generasi baru pendengar, sekaligus tetap menjaga kedekatan dengan komunitas yang telah menjadi fondasi kami selama ini.

Terima kasih telah bersama kami selama 20 tahun. Masih banyak cerita yang akan kita tulis bersama.`,
    category: "Berita",
    date: "9 April 2026",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    featured: true,
  },
  {
    slug: "tips-produktif-era-digital",
    title: "Tips Tetap Produktif di Era Digital untuk Anak Muda Madiun",
    excerpt:
      "Di tengah gempuran notifikasi dan media sosial, bagaimana cara menjaga fokus? Simak tips dari pakar produktivitas.",
    body: `Di era serba digital ini, gangguan datang dari mana-mana. Notifikasi media sosial, pesan WhatsApp, hingga konten video yang tak ada habisnya bisa menggerus produktivitas kita tanpa kita sadari.

Berikut tips dari para pakar yang kami kumpulkan untuk Anda:

**1. Terapkan aturan 90 menit fokus**
Bekerja atau belajar selama 90 menit tanpa gangguan, lalu istirahat 15–20 menit. Otak manusia bekerja dalam siklus ultradian yang optimal di rentang ini.

**2. Matikan notifikasi saat bekerja**
Setiap kali Anda melihat notifikasi, butuh rata-rata 23 menit untuk kembali fokus penuh. Matikan notifikasi non-esensial saat jam produktif.

**3. Gunakan metode time-blocking**
Jadwalkan blok waktu spesifik untuk setiap tugas di kalender Anda. Ini mencegah prokrastinasi dan memberi struktur pada hari Anda.

**4. Jaga kesehatan digital**
Batasi screen time hiburan di bawah 2 jam per hari. Gunakan selebihnya untuk aktivitas offline yang memperkaya diri.`,
    category: "Lifestyle",
    date: "5 April 2026",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
  {
    slug: "jadwal-konser-april-2026",
    title: "Jadwal Konser Musik Lokal Madiun Bulan April 2026",
    excerpt:
      "Catat tanggalnya! Ada lima pertunjukan musik seru dari musisi lokal Madiun yang sayang untuk dilewatkan bulan ini.",
    body: `Madiun punya banyak musisi berbakat yang siap menghibur Anda bulan ini. Berikut jadwal lengkap konser dan pertunjukan musik lokal April 2026:

**12 April — Panggung Rakyat Alun-Alun Madiun**
Berbagai musisi akustik lokal tampil gratis untuk umum mulai pukul 19.00 WIB.

**19 April — Jazz Night at Resto Pandan**
Nikmati malam Sabtu dengan sajian jazz dari band lokal Madiun. HTM Rp 50.000 sudah termasuk satu minuman.

**25 April — Festival Indie Madiun**
Delapan band indie lokal tampil di Gedung Wanita Madiun. Tiket tersedia di seluruh gerai indomaret dan minimarket lokal.

**27 April — Akustik Sore di Taman Bantaran**
Gratis, terbuka untuk umum. Bawa tikar dan nikmati musik di tepi sungai.

Pantau terus DCS FM untuk info tiket dan update terbaru!`,
    category: "Hiburan",
    date: "3 April 2026",
    readTime: "2 menit",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
  },
  {
    slug: "kuliner-khas-madiun",
    title: "Kuliner Khas Madiun yang Wajib Dicoba Wisatawan",
    excerpt:
      "Dari pecel madiun hingga brem, kota ini menyimpan kekayaan kuliner yang memanjakan lidah.",
    body: `Madiun bukan hanya kota transit. Ia menyimpan kekayaan kuliner yang telah mendunia. Jika Anda berkunjung ke Kota Pendekar ini, jangan lewatkan sajian-sajian berikut:

**1. Pecel Madiun**
Berbeda dari pecel daerah lain, pecel Madiun terkenal dengan bumbu kacangnya yang lebih kental dan pedas, disajikan dengan nasi dan berbagai lauk pelengkap.

**2. Brem**
Makanan tradisional berbahan fermentasi beras ketan ini menjadi oleh-oleh khas yang wajib dibawa pulang. Rasanya manis dengan sedikit sensasi fermentasi.

**3. Sate Kelinci**
Kuliner unik yang bisa Anda temukan di beberapa warung khusus di Madiun. Tekstur dagingnya lembut dengan bumbu kacang yang khas.

**4. Nasi Jotos**
Nasi bungkus dengan lauk sederhana namun menggugah selera, legendaris di kalangan warga Madiun sejak puluhan tahun lalu.

Semua bisa Anda temukan di Pasar Besar Madiun dan sentra kuliner di sekitar alun-alun kota.`,
    category: "Kuliner",
    date: "1 April 2026",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
  },
  {
    slug: "cara-daftarkan-lagu-ke-dcsfm",
    title: "Cara Mendaftarkan Lagu ke DCS FM untuk Diputar di Radio",
    excerpt:
      "Punya lagu dan ingin dikenal warga Madiun? Pelajari langkah mudah mengirimkan karya musikmu untuk diputar di DCS FM 100.50.",
    body: `Kami membuka pintu selebar-lebarnya bagi musisi lokal Madiun dan sekitarnya untuk memperkenalkan karya mereka kepada masyarakat luas melalui DCS FM.

**Syarat Pengiriman Lagu:**
- Format file: MP3 320kbps atau WAV
- Durasi lagu: 2–5 menit
- Sudah memiliki hak cipta atau izin penggunaan
- Tidak mengandung konten SARA, pornografi, atau melanggar hukum

**Cara Mengirim:**
1. Siapkan file audio dan foto cover (minimal 1000×1000px)
2. Isi formulir di halaman Kontak kami
3. Upload file via Google Drive dan sertakan link-nya
4. Sertakan biografi singkat artis/band
5. Tim kami akan menghubungi Anda dalam 3–5 hari kerja

Yuk, perkenalkan karyamu ke seluruh Madiun!`,
    category: "Info",
    date: "28 Maret 2026",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&q=80",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

// ── Team ──────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    name: "Ahmad Fauzi",
    role: "Station Manager",
    bio: "Memimpin DCS FM sejak 2015. Berpengalaman 20 tahun di industri radio nasional sebelum bergabung.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sari Dewi",
    role: "Content Director",
    bio: "Arsitek di balik konten-konten unggulan DCS FM. Lulusan Komunikasi Universitas Airlangga.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&q=80",
  },
  {
    name: "Budi Santoso",
    role: "Penyiar / Host",
    bio: "Suara pagi DCS FM sejak 2018. Dikenal dengan gaya siaran yang hangat dan jenaka.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Rina Kartika",
    role: "Penyiar / Musik Director",
    bio: "Penggila musik dari semua genre. Bertanggung jawab atas playlist dan rotasi lagu DCS FM.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];
