import type { IconName, NavItem, QuickLink, ProfileTab, PPDBWave, PPDBStep, PPDBJalur, Applicant, Article } from '@/types';

export const heroImage =
  'https://images.unsplash.com/photo-1764720572747-cd3753f8fdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600';
export const libraryImage =
  'https://images.unsplash.com/photo-1623031345438-387dd3c45e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400';
export const activityImage =
  'https://images.unsplash.com/photo-1764922145331-7b726c1826b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400';

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  {
    label: 'Profil Sekolah',
    href: '#profil-lengkap',
    children: [
      ['Tentang Sekolah', '#profil-lengkap'],
      ['Identitas Sekolah', '#profil-identitas'],
      ['Visi & Misi', '#profil-visi'],
      ['Struktur Organisasi', '#profil-organisasi'],
    ],
  },
  {
    label: 'Akademik',
    href: '#akademik-lengkap',
    children: [
      ['Informasi Akademik', '#akademik-lengkap'],
      ['Kurikulum', '#akademik-kurikulum'],
      ['Program Pembelajaran', '#akademik-program'],
      ['Kalender Akademik', '#akademik-kalender'],
    ],
  },
  {
    label: 'Kesiswaan',
    href: '#kesiswaan-lengkap',
    children: [
      ['Kehidupan Siswa', '#kesiswaan-lengkap'],
      ['Ekstrakurikuler', '#kesiswaan-ekstrakurikuler'],
      ['Pembinaan Karakter', '#kesiswaan-karakter'],
      ['Prestasi Siswa', '#kesiswaan-prestasi'],
    ],
  },
  { label: 'Fasilitas', href: '#fasilitas' },
  {
    label: 'Informasi',
    href: '#informasi',
    children: [
      ['Berita Sekolah', '#informasi'],
      ['Pengumuman', '#informasi'],
      ['Agenda Kegiatan', '#informasi'],
    ],
  },
  {
    label: 'PPDB',
    href: '#ppdb-lengkap',
    children: [
      ['Informasi & Syarat PPDB', '#ppdb-syarat'],
      ['Alur & Gelombang', '#ppdb-alur'],
      ['Masuk Portal PPDB', '#login-ppdb'],
    ],
  },
  { label: 'Kontak', href: '#kontak' },
];

export const quickLinks: QuickLink[] = [
  { icon: 'compass' as IconName, title: 'Profil Sekolah', text: 'Kenali identitas dan latar sekolah.', href: '#profil-lengkap' },
  { icon: 'book' as IconName, title: 'Program Akademik', text: 'Jelajahi pendekatan pembelajaran.', href: '#akademik-lengkap' },
  { icon: 'users' as IconName, title: 'Kegiatan Siswa', text: 'Lihat ruang tumbuh dan berkarya.', href: '#kesiswaan-lengkap' },
  { icon: 'graduation' as IconName, title: 'Informasi PPDB', text: 'Temukan panduan pendaftaran.', href: '#ppdb-lengkap' },
];

export const faqs: string[][] = [
  ['Bagaimana cara mendaftar?', 'Alur pendaftaran resmi belum dipublikasikan. Silakan hubungi sekolah untuk memperoleh informasi terbaru dan terverifikasi.'],
  ['Apa saja persyaratan pendaftaran?', 'Daftar persyaratan masih menunggu konfirmasi resmi sekolah dan akan ditampilkan pada halaman PPDB.'],
  ['Bagaimana cara menghubungi sekolah?', 'Informasi nomor telepon dan email resmi belum tersedia pada materi yang diterima. Lokasi sekolah berada di Seuseupan, Ciawi, Bogor.'],
  ['Program apa saja yang tersedia?', 'Rincian kurikulum, program unggulan, dan kegiatan siswa akan ditambahkan setelah mendapatkan data resmi dari sekolah.'],
];

export const profileTabs: ProfileTab[] = [
  {
    id: 'tentang',
    label: 'Tentang',
    title: 'Sekolah Islam yang Bertumbuh Bersama Komunitas',
    text: 'SMP YPPI Ar Rahmah adalah sekolah menengah pertama swasta Islam yang berlokasi di Seuseupan, Ciawi, Kabupaten Bogor, Jawa Barat. Narasi lengkap mengenai latar pendirian dan pendekatan pendidikan masih menunggu dokumen resmi sekolah.',
  },
  {
    id: 'identitas',
    label: 'Identitas',
    title: 'Identitas Dasar Sekolah',
    text: 'Nama sekolah, jenjang, karakter lembaga, dan lokasi di bawah berasal dari informasi yang tersedia. Nomor pokok sekolah, izin operasional, akreditasi, dan tahun berdiri belum dikonfirmasi.',
  },
  {
    id: 'sejarah',
    label: 'Sejarah',
    title: 'Jejak Perjalanan Sekolah',
    text: 'Bagian ini disiapkan untuk menceritakan tonggak pendirian dan perkembangan sekolah. Seluruh contoh lini masa di bawah masih berupa struktur dummy dan harus diganti menggunakan arsip resmi.',
  },
];

export const academicTabs: string[][] = [
  ['ringkasan', 'Ringkasan'],
  ['kurikulum', 'Kurikulum'],
  ['evaluasi', 'Evaluasi'],
];

export const activityCategories = ['Semua', 'Organisasi', 'Olahraga', 'Seni', 'Keagamaan'];

export const ppdbWaves: PPDBWave[] = [
  {
    name: 'Gelombang 1 (Utama)',
    period: '01 Oktober – 31 Desember 2024',
    quota: '90 Siswa (3 Rombel)',
    status: 'Sedang Dibuka',
    badgeClass: 'ppdb-wave-badge--open',
    isActive: true,
    benefit: 'Potongan Uang Pangkal 20% & Prioritas Kelas Tahfiz',
  },
  {
    name: 'Gelombang 2 (Reguler)',
    period: '02 Januari – 31 Maret 2025',
    quota: '60 Siswa (2 Rombel)',
    status: 'Segera Dibuka',
    badgeClass: 'ppdb-wave-badge--upcoming',
    isActive: false,
    benefit: 'Jalur Reguler & Jalur Prestasi Terbuka Penuh',
  },
  {
    name: 'Gelombang 3 (Cadangan)',
    period: '01 April – 30 Juni 2025',
    quota: 'Sisa Kuota Jika Belum Terpenuhi',
    status: 'Cadangan',
    badgeClass: 'ppdb-wave-badge--upcoming',
    isActive: false,
    benefit: 'Seleksi Berkas Langsung & Tes Pemetaan Khusus',
  },
];

export const ppdbSteps: PPDBStep[] = [
  { num: '01', title: 'Daftar Akun', desc: 'Registrasi akun calon pendaftar via portal online untuk mendapatkan No. Registrasi.' },
  { num: '02', title: 'Isi Formulir', desc: 'Lengkapi biodata calon siswa, riwayat asal sekolah SD/MI, serta data orang tua/wali.' },
  { num: '03', title: 'Upload Berkas', desc: 'Unggah scan Akta Kelahiran, Kartu Keluarga, Pas Foto 3x4, dan Surat Keterangan Lulus/Rapor.' },
  { num: '04', title: 'Tes Pemetaan', desc: 'Mengikuti observasi karakter, psikotes sederhana, dan tes pemetaan bacaan Al-Qur\u2019an.' },
  { num: '05', title: 'Daftar Ulang', desc: 'Pengumuman hasil seleksi di portal dan penyelesaian administrasi daftar ulang.' },
];

export const ppdbJalur: PPDBJalur[] = [
  {
    title: 'Jalur Reguler',
    desc: 'Terbuka untuk seluruh lulusan SD/MI sederajat. Seleksi berdasarkan kelengkapan berkas dan tes pemetaan akademik serta baca Qur\u2019an.',
    tag: 'Semua Siswa',
  },
  {
    title: 'Jalur Prestasi Tahfiz',
    desc: 'Bagi calon siswa dengan hafalan Al-Qur\u2019an minimal 1 Juz (Juz 30 atau lainnya) mutqin. Mendapatkan beasiswa dan prioritas kelas pembinaan.',
    tag: 'Beasiswa Khusus',
  },
  {
    title: 'Jalur Prestasi Akademik & Bakat',
    desc: 'Bagi peraih juara 1-3 tingkat kecamatan/kabupaten/provinsi pada bidang sains, olahraga, seni, atau keagamaan.',
    tag: 'Bebas Tes Tulis',
  },
  {
    title: 'Jalur Afirmasi & Mitra',
    desc: 'Bantuan keringanan biaya bagi keluarga prasejahtera atau putra-putri guru dan tenaga kependidikan mitra.',
    tag: 'Subsidi Pendidikan',
  },
];

export const initialApplicants: Applicant[] = [
  { id: 'PPDB-089', name: 'Ahmad Fauzi', school: 'SDIT Al-Ihsan', track: 'Tahfiz (2 Juz)', status: 'Lolos Verifikasi' },
  { id: 'PPDB-090', name: 'Siti Rahmawati', school: 'SDN Ciawi 01', track: 'Reguler', status: 'Menunggu Berkas' },
  { id: 'PPDB-091', name: 'Muhammad Rizky', school: 'MI Ar-Rahmah', track: 'Reguler', status: 'Lolos Verifikasi' },
  { id: 'PPDB-092', name: 'Nurul Hidayah', school: 'SDN Seuseupan 02', track: 'Afirmasi', status: 'Diterima' },
];

export const initialArticles: Article[] = [
  { title: 'Penerimaan Peserta Didik Baru (PPDB) TP 2025/2026 Resmi Dibuka', date: '12 Okt 2024', status: 'Dipublikasikan' },
  { title: 'Kunjungan Edukasi dan Pengenalan Lingkungan Alam Siswa', date: '05 Okt 2024', status: 'Dipublikasikan' },
  { title: 'Prestasi Siswa SMP YPPI Ar Rahmah pada Lomba Tahfiz Tingkat Wilayah', date: '28 Sep 2024', status: 'Draft' },
];

/* ==========================================================================
   PPDB CORRELATED DATA (INFORMASI, SYARAT, ALUR & GELOMBANG)
   ========================================================================== */

export const ppdbStats = {
  academicYear: '2025/2026',
  totalCapacity: 150,
  totalClasses: 5,
  classSize: 30,
  quotaFilled: 66,
  quotaRemaining: 24, // for Wave 1
  totalApplicants: 128,
  activeWaveName: 'Gelombang 1 (Utama)',
};

export const ppdbGeneralRequirements = [
  {
    title: 'Warga Negara & Usia',
    desc: 'Warga Negara Indonesia (WNI) atau WNA dengan izin resmi, serta berusia maksimal 15 tahun pada 1 Juli 2025.',
    badge: 'Syarat Pokok',
  },
  {
    title: 'Kelulusan Jenjang Dasar',
    desc: 'Telah lulus SD/MI/Paket A sederajat atau saat ini duduk di semester akhir kelas 6 SD/MI dan diprediksi lulus.',
    badge: 'Akademik',
  },
  {
    title: 'Kesiapan Berkarakter Islami',
    desc: 'Bersedia mengikuti kurikulum pembinaan akhlak, pembiasaan ibadah harian (Sholat Dhuha & Berjamaah), serta program Tahfiz Al-Qur\u2019an.',
    badge: 'Karakter & Ibadah',
  },
  {
    title: 'Ketaatan Tata Tertib',
    desc: 'Orang tua/wali dan calon siswa menandatangani pakta integritas mematuhi seluruh tata tertib dan tata krama SMP YPPI Ar Rahmah.',
    badge: 'Integritas',
  },
];

export const ppdbDocumentChecklist = [
  {
    name: 'Akta Kelahiran Calon Siswa',
    format: 'Fotokopi 2 Lembar + Scan PDF/JPG Asli',
    mandatory: true,
    note: 'Untuk verifikasi tanggal lahir dan Nomor Induk Kependudukan (NIK).',
  },
  {
    name: 'Kartu Keluarga (KK)',
    format: 'Fotokopi 2 Lembar + Scan PDF/JPG',
    mandatory: true,
    note: 'KK terbit minimal 6 bulan sebelum masa pendaftaran.',
  },
  {
    name: 'KTP Kedua Orang Tua / Wali',
    format: 'Fotokopi 2 Lembar',
    mandatory: true,
    note: 'KTP ayah dan ibu atau wali sah calon peserta didik.',
  },
  {
    name: 'Rapor SD/MI (Kelas 4, 5, dan 6 Semester 1)',
    format: 'Fotokopi Legalilsir Kepala Sekolah',
    mandatory: true,
    note: 'Meliputi nilai kognitif dan catatan sikap/akhlak.',
  },
  {
    name: 'Ijazah / Surat Keterangan Lulus (SKL)',
    format: 'Fotokopi Legalisir 2 Lembar',
    mandatory: false,
    note: 'Dapat menyusul bagi siswa kelas 6 yang belum terbit SKL dari SD/MI asal.',
  },
  {
    name: 'Pasfoto Berwarna 3x4 (4 Lembar)',
    format: 'Cetak Foto Kertas Doff/Glossy + File Digital',
    mandatory: true,
    note: 'Latar belakang merah atau biru, berseragam sekolah SD/MI asal.',
  },
  {
    name: 'Surat Keterangan NISN Valid',
    format: 'Printout dari laman resmi Kemendikbud',
    mandatory: true,
    note: 'Memastikan NISN telah tercatat aktif pada data Dapodikdasmen.',
  },
  {
    name: 'Sertifikat Hafalan / Piagam Prestasi',
    format: 'Asli dan Fotokopi 1 Rangkap',
    mandatory: false,
    note: 'Wajib bagi pendaftar Jalur Prestasi Tahfiz atau Jalur Prestasi Lomba.',
  },
  {
    name: 'KIP / PKH / SKTM Kelurahan',
    format: 'Fotokopi 1 Rangkap',
    mandatory: false,
    note: 'Khusus bagi pendaftar Jalur Afirmasi & Keringanan Biaya.',
  },
];

export const ppdbTrackDetails = [
  {
    id: 'reguler',
    name: 'Jalur Reguler (SD/MI)',
    tag: 'Jalur Terbuka',
    badgeColor: 'blue',
    quota: '75 Kursi',
    target: 'Lulusan SD/MI Negeri maupun Swasta sederajat yang ingin menimba ilmu berlandaskan nilai Islami.',
    criteria: [
      'Memiliki nilai rata-rata rapor minimal 75 untuk mata pelajaran utama',
      'Mengikuti tes pemetaan kemampuan akademik dasar (literasi & numerasi)',
      'Mengikuti tes pemetaan kemampuan membaca Al-Qur\u2019an (bukan syarat gugur, untuk penempatan kelas)',
      'Wawancara komitmen orang tua/wali dan siswa',
    ],
    benefits: [
      'Akses ke seluruh fasilitas pembelajaran terpadu',
      'Pembinaan tahfiz berjenjang sesuai kemampuan awal',
      'Program ekstrakurikuler kepemimpinan & olahraga',
    ],
  },
  {
    id: 'tahfiz',
    name: 'Jalur Prestasi Tahfiz Al-Qur\u2019an',
    tag: 'Beasiswa Khusus',
    badgeColor: 'green',
    quota: '30 Kursi',
    target: 'Calon siswa yang memiliki hafalan Al-Qur\u2019an mutqin minimal 1 Juz (Juz 30 atau juz lainnya).',
    criteria: [
      'Melampirkan Syahadah / Sertifikat resmi dari Rumah Tahfiz atau SD/MI asal',
      'Mengikuti uji sambung ayat dan kelancaran makharijul huruf bersama penguji tahfiz',
      'Memiliki komitmen menambah hafalan target 3 Juz selama menempuh pendidikan SMP',
    ],
    benefits: [
      'Beasiswa Potongan Uang Pangkal hingga 50% - 100%',
      'Pembebasan SPP bulanan bagi hafalan mutqin >= 2 Juz',
      'Penempatan prioritas di Rombel Kelas Tahfiz Unggulan Ar-Rahmah',
      'Bimbingan langsung dari asatidz hafizh Qur\u2019an bersanad',
    ],
  },
  {
    id: 'akademik-bakat',
    name: 'Jalur Prestasi Akademik & Bakat',
    tag: 'Bebas Tes Tulis',
    badgeColor: 'amber',
    quota: '25 Kursi',
    target: 'Siswa berprestasi di bidang sains, olimpiade, olahraga, seni Islami, kepramukaan, atau pidato tingkat kecamatan hingga nasional.',
    criteria: [
      'Juara 1, 2, atau 3 tingkat Kecamatan, Kabupaten/Kota, Provinsi, atau Nasional',
      'Sertifikat atau piagam penghargaan diterbitkan maksimal 2 tahun terakhir',
      'Mengikuti verifikasi portofolio dan wawancara minat bakat',
    ],
    benefits: [
      'Bebas tes tertulis akademik saat seleksi',
      'Potongan Infaq Pengembangan (Uang Pangkal) sebesar 25% – 50%',
      'Pembinaan intensif menuju ajang kompetisi O2SN, OSN, dan FLS2N SMP',
    ],
  },
  {
    id: 'afirmasi',
    name: 'Jalur Afirmasi & Kemitraan',
    tag: 'Subsidi Silang',
    badgeColor: 'purple',
    quota: '20 Kursi',
    target: 'Calon siswa dari keluarga prasejahtera atau putra-putri guru/tenaga kependidikan mitra yayasan.',
    criteria: [
      'Memiliki Kartu Indonesia Pintar (KIP), PKH, KKS, atau Surat Keterangan Tidak Mampu (SKTM) resmi',
      'Surat rekomendasi dari kepala sekolah SD/MI asal atau mitra Yayasan YPPI',
      'Home visit / survei verifikasi domisili oleh panitia PPDB',
    ],
    benefits: [
      'Skema subsidi silang biaya Infaq Pengembangan hingga 75%',
      'Bantuan perlengkapan buku paket dan seragam',
      'Pendampingan khusus konseling akademik dan keagamaan',
    ],
  },
];

export const ppdbFeeItems = [
  {
    name: 'Biaya Formulir & Tes Pemetaan',
    amount: 'Rp 150.000',
    type: 'Satu Kali',
    desc: 'Termasuk akun portal PPDB, kartu pendaftaran, map berkas, modul tes diagnostik, dan observasi tahfiz.',
    note: 'Dibayarkan saat pendaftaran awal via transfer bank/tunai.',
  },
  {
    name: 'Infaq Pengembangan (Uang Pangkal)',
    amount: 'Rp 3.500.000',
    type: 'Satu Kali (Dapat Diangsur)',
    desc: 'Pembangunan sarana belajar, pemeliharaan lab komputer, masjid sekolah, dan sarana olahraga.',
    note: 'Potongan 20% khusus pendaftar Gelombang 1 menjadi Rp 2.800.000,-. Dapat diangsur 3x.',
  },
  {
    name: 'Paket Seragam Lengkap (5 Stel)',
    amount: 'Rp 950.000',
    type: 'Satu Kali',
    desc: 'Seragam Putih-Biru lengkap atribut, Batik Khas YPPI Ar Rahmah, Seragam Pramuka, Seragam Olahraga, dan Busana Muslim/Koko.',
    note: 'Sudah termasuk jilbab (putri) / peci (putra), ikat pinggang, dan kaus kaki bordir.',
  },
  {
    name: 'Paket Buku Paket & Modul (1 Tahun)',
    amount: 'Rp 650.000',
    type: 'Tahunan',
    desc: 'Buku paket Kurikulum Merdeka, buku panduan mutaba\u2019ah yaumiyah ibadah, dan modul tahfiz juz amma terpadu.',
    note: 'Disediakan langsung oleh pihak sekolah pada awal tahun ajaran.',
  },
  {
    name: 'Infaq Pendidikan Bulanan (SPP)',
    amount: 'Rp 350.000',
    type: 'Per Bulan',
    desc: 'Kegiatan belajar mengajar fullday terpadu, pembinaan tahfiz harian, lab komputer, praktikum sains, dan ekstrakurikuler wajib.',
    note: 'Dibayarkan paling lambat tanggal 10 setiap bulannya.',
  },
];

export const ppdbWavesDetailed = [
  {
    waveNumber: 1,
    name: 'Gelombang 1 (Utama / Early Bird)',
    period: '01 Oktober – 31 Desember 2024',
    quota: 90,
    filled: 66,
    remaining: 24,
    status: 'Sedang Dibuka',
    badgeClass: 'ppdb-wave-badge--open',
    isActive: true,
    highlight: 'Diskon 20% Infaq Pengembangan & Prioritas Kelas Tahfiz',
    timeline: [
      { event: 'Pendaftaran Online & Penyerahan Berkas', date: '01 Okt – 20 Des 2024' },
      { event: 'Tes Pemetaan Batch 1 & 2', date: '16 Nov & 21 Des 2024' },
      { event: 'Pengumuman Kelulusan Portal', date: '27 Desember 2024' },
      { event: 'Batas Akhir Daftar Ulang', date: '10 Januari 2025' },
    ],
  },
  {
    waveNumber: 2,
    name: 'Gelombang 2 (Reguler)',
    period: '02 Januari – 31 Maret 2025',
    quota: 60,
    filled: 0,
    remaining: 60,
    status: 'Segera Dibuka',
    badgeClass: 'ppdb-wave-badge--upcoming',
    isActive: false,
    highlight: 'Jalur Reguler & Jalur Prestasi Terbuka Penuh',
    timeline: [
      { event: 'Pendaftaran Online Gelombang 2', date: '02 Jan – 20 Mar 2025' },
      { event: 'Tes Pemetaan Batch 3 & 4', date: '15 Feb & 29 Mar 2025' },
      { event: 'Pengumuman Kelulusan', date: '05 April 2025' },
      { event: 'Batas Akhir Daftar Ulang', date: '20 April 2025' },
    ],
  },
  {
    waveNumber: 3,
    name: 'Gelombang 3 (Cadangan & Pindahan)',
    period: '01 April – 30 Juni 2025',
    quota: 30,
    filled: 0,
    remaining: 30,
    status: 'Jalur Cadangan',
    badgeClass: 'ppdb-wave-badge--upcoming',
    isActive: false,
    highlight: 'Hanya Dibuka Jika Masih Terdapat Sisa Kuota Rombel',
    timeline: [
      { event: 'Pembukaan Kuota Cadangan', date: '01 Apr – 15 Jun 2025' },
      { event: 'One-Day Service Seleksi Langsung', date: '21 Juni 2025' },
      { event: 'Pengumuman Hasil Akhir', date: '25 Juni 2025' },
      { event: 'Matrikulasi & Pra-MPLS', date: 'Juli 2025' },
    ],
  },
];

export const ppdbStepGuides = [
  {
    step: '01',
    title: 'Registrasi Akun Portal',
    shortDesc: 'Membuat akun pendaftar dengan NISN, nama lengkap, dan nomor WhatsApp aktif.',
    details: [
      'Kunjungi menu Masuk Portal PPDB pada website.',
      'Klik tombol "Daftar Akun Baru", masukkan nama lengkap, asal sekolah SD/MI, serta password.',
      'Sistem akan menerbitkan Nomor Registrasi Pendaftaran (contoh: PPDB-2025-089) yang tersimpan aman.',
      'Catat atau simpan nomor registrasi dan kata sandi untuk login selanjutnya.',
    ],
    timeEstimate: '5 – 10 Menit',
    actionLink: '#daftar-ppdb',
    actionText: 'Daftar Akun PPDB',
  },
  {
    step: '02',
    title: 'Pengisian Formulir Lengkap',
    shortDesc: 'Melengkapi biodata calon siswa, riwayat asal sekolah, data orang tua/wali, serta memilih jalur masuk.',
    details: [
      'Login ke portal pendaftar menggunakan No. Registrasi dan sandi Anda.',
      'Isi formulir biodata diri: NIK, tempat/tanggal lahir, alamat tempat tinggal di area Ciawi/Bogor sekitarnya.',
      'Pilih Jalur Pendaftaran (Reguler, Prestasi Tahfiz, Prestasi Akademik/Bakat, atau Afirmasi).',
      'Lengkapi data pekerjaan, kontak orang tua/wali, dan riwayat kesehatan dasar siswa.',
    ],
    timeEstimate: '15 – 20 Menit',
    actionLink: '#login-ppdb',
    actionText: 'Isi Formulir di Portal',
  },
  {
    step: '03',
    title: 'Unggah Dokumen Berkas',
    shortDesc: 'Mengunggah file scan/foto jelas dokumen persyaratan pokok untuk diverifikasi panitia.',
    details: [
      'Unggah scan Akta Kelahiran, Kartu Keluarga, dan KTP Orang Tua (format PDF/JPG maks 2MB).',
      'Unggah foto rapor semester 7-11 dan sertifikat/piagam jika mendaftar jalur prestasi.',
      'Panitia bagian verifikasi berkas akan memeriksa keabsahan dokumen dalam 1x24 jam kerja.',
      'Status berkas akan berubah menjadi "Lolos Verifikasi" setelah disetujui panitia.',
    ],
    timeEstimate: '1x24 Jam Verifikasi',
    actionLink: '#login-ppdb',
    actionText: 'Cek Status Berkas',
  },
  {
    step: '04',
    title: 'Observasi & Tes Pemetaan',
    shortDesc: 'Menghadiri tes pemetaan minat akademik, bacaan Al-Qur\u2019an, serta wawancara ramah anak.',
    details: [
      'Cetak Kartu Peserta Ujian dari portal PPDB setelah berkas dinyatakan lolos.',
      'Hadir di Kampus SMP YPPI Ar Rahmah (Seuseupan, Ciawi) sesuai jadwal sesi yang ditentukan.',
      'Materi: Pemetaan baca Al-Qur\u2019an (kelancaran tajwid), tes logika literasi dasar, dan wawancara kesiapan belajar.',
      'Orang tua mengikuti sesi dialog kemitraan bersama dewan pimpinan sekolah.',
    ],
    timeEstimate: '± 2,5 Jam di Sekolah',
    actionLink: '#ppdb-alur-materi',
    actionText: 'Pelajari Materi Tes',
  },
  {
    step: '05',
    title: 'Pengumuman & Daftar Ulang',
    shortDesc: 'Melihat hasil kelulusan seleksi di portal online serta menyelesaikan administrasi daftar ulang.',
    details: [
      'Hasil seleksi diumumkan secara transparan melalui portal login masing-masing peserta.',
      'Peserta yang dinyatakan DITERIMA dapat mengunduh Surat Keputusan Penerimaan resmi.',
      'Penyelesaian administrasi daftar ulang dan pengukuran seragam di kampus sekolah.',
      'Menerima jadwal kegiatan pra-MPLS dan pengenalan lingkungan pesantren/sekolah.',
    ],
    timeEstimate: 'Sesuai Jadwal Gelombang',
    actionLink: '#login-ppdb',
    actionText: 'Buka Pengumuman',
  },
];

export const ppdbSelectionTests = [
  {
    title: 'Pemetaan Bacaan Al-Qur\u2019an & Tahfiz',
    badge: 'Karakter Qur\u2019ani',
    icon: 'book',
    desc: 'Bertujuan memetakan kemampuan dasar awal siswa agar pembinaan tilawah dan tahfiz tepat sasaran.',
    items: [
      'Kelancaran membaca mushaf Al-Qur\u2019an standar Kementerian Agama',
      'Penerapan hukum tajwid dasar (Nun sukun, Mim sukun, Mad, Makharijul Huruf)',
      'Hafalan surat pendek pilihan dalam Juz 30 (An-Naba s.d An-Nas)',
      'Bagi Jalur Tahfiz: Uji sambung ayat minimal 1 - 2 Juz mutqin',
    ],
  },
  {
    title: 'Tes Diagnostik Literasi & Numerasi',
    badge: 'Akademik Dasar',
    icon: 'spark',
    desc: 'Mengetahui daya nalar, logika berpikir, dan pemahaman bacaan tingkat sekolah dasar.',
    items: [
      'Pemahaman membaca teks bacaan (Bahasa Indonesia) dan menarik kesimpulan',
      'Operasi hitung dasar matematika dan pemecahan masalah sederhana',
      'Tes potensi belajar dan daya konsentrasi siswa',
      'Tidak ada sistem sistem nilai minus, fokus pada pemetaan potensi belajar',
    ],
  },
  {
    title: 'Wawancara Siswa & Kemitraan Orang Tua',
    badge: 'Kesiapan & Akhlak',
    icon: 'users',
    desc: 'Membangun keselarasan pendidikan antara lingkungan rumah dan lingkungan sekolah.',
    items: [
      'Wawancara ramah anak mengenai minat, bakat, hobi, dan kebiasaan ibadah di rumah',
      'Observasi kesiapan adaptasi di lingkungan sekolah berbasis Islam',
      'Komitmen orang tua/wali dalam mendampingi tumbuh kembang anak di rumah',
      'Penjelasan program sekolah, tata tertib, dan pembiayaan secara transparan',
    ],
  },
];

export const ppdbFaqData = [
  {
    q: 'Apakah ijazah SD/MI yang belum keluar bisa diganti dengan surat lain?',
    a: 'Bisa. Bagi calon siswa yang masih duduk di kelas 6 SD/MI, ijazah dapat digantikan sementara dengan Surat Keterangan Lulus (SKL) atau Surat Keterangan Aktif Belajar dari kepala sekolah asal. Ijazah asli/fotokopi legalisir dapat diserahkan saat daftar ulang.',
  },
  {
    q: 'Bagaimana jika anak belum lancar membaca Al-Qur\u2019an?',
    a: 'SMP YPPI Ar Rahmah menerima seluruh siswa yang memiliki komitmen belajar. Tes baca Qur\u2019an bersifat pemetaan (placement test), bukan untuk menggugurkan peserta jalur reguler. Siswa yang belum lancar akan mendapatkan kelas matrikulasi khusus tajwid & bimbingan dasar Iqro/Tahsin.',
  },
  {
    q: 'Apakah Infaq Pengembangan (Uang Pangkal) dapat dicicil?',
    a: 'Ya, Infaq Pengembangan dapat diangsur hingga 3 (tiga) kali pembayaran selama semester pertama dengan kesepakatan tertulis saat daftar ulang. Pendaftar Gelombang 1 juga mendapatkan potongan khusus 20%.',
  },
  {
    q: 'Apakah ada fasilitas antar-jemput atau asrama?',
    a: 'SMP YPPI Ar Rahmah merupakan sekolah fullday school Islam (Senin s.d Jumat, 07.00 - 15.00 WIB). Informasi rute antar-jemput swadaya paguyuban orang tua dapat dikonsultasikan saat wawancara.',
  },
  {
    q: 'Bagaimana cara mendaftar akun portal PPDB secara online?',
    a: 'Silakan klik tombol "Masuk Portal PPDB" pada menu navigasi, pilih tab "Daftar Akun Baru", lalu masukkan nama calon siswa dan asal sekolah. Anda akan menerima Nomor Registrasi untuk mengisi biodata dan mengunggah berkas.',
  },
];

