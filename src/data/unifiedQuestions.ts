import { Question } from '../types';

export const UNIFIED_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN 1: DETEKTIF HOBI & INFOGRAFIK (SOAL 1 - 20)
  // Setiap soal memuat INFOGRAFIK visual yang nyata, jelas, dan edukatif!
  // ==========================================
  {
    id: 1,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Detektif Peralatan Hobi',
    question: 'Perhatikan infografik peralatan seni lukis di atas. Alat apakah yang berfungsi khusus sebagai papan tempat menuangkan dan mencampur aneka warna cat?',
    options: ['Kanvas Lukis', 'Palet Warna', 'Kuas Lukis', 'Cat Akrilik / Air'],
    correctAnswer: 1,
    explanation: 'Berdasarkan infografik, palet warna berfungsi sebagai papan atau wadah untuk menaruh dan mengaduk pigmen cat sebelum disapukan ke kanvas.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK PERALATAN SENI LUKIS',
        title: 'Mengenal Perlengkapan Utama Seni Lukis Cilik',
        subtitle: 'Bahan dan alat berkarya seni di ruang prakarya kelas 5 SD',
        stats: [
          { number: '4 Alat', label: 'Perlengkapan Utama', icon: 'Palette' },
          { number: '100%', label: 'Kreativitas Warna', icon: 'Sparkles' }
        ],
        keyPoints: [
          { icon: 'Palette', title: 'Kanvas Lukis', desc: 'Bidang kain putih bertali yang dibentangkan pada bingkai kayu untuk melukis.' },
          { icon: 'Palette', title: 'Palet Warna', desc: 'Papan datar berlekuk tempat menampung dan mencampur paduan pigmen warna cat.' },
          { icon: 'Palette', title: 'Kuas Lukis', desc: 'Pena berbulu halus untuk menyapukan goresan warna dengan berbagai ketebalan.' },
          { icon: 'Palette', title: 'Cat Air / Akrilik', desc: 'Bahan pewarna cair yang cepat larut dan menghasilkan nuansa gambar yang indah.' }
        ],
        footerNote: 'Buku Siswa Bahasa Indonesia Kelas 5 SD Bab 3 - Ekspresi Diri Melalui Hobi'
      }
    }
  },
  {
    id: 2,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Manfaat pada Infografik',
    question: 'Berdasarkan infografik manfaat membaca di atas, berapakah rata-rata waktu membaca harian yang dianjurkan untuk memperoleh peningkatan kosakata?',
    options: ['5 menit sehari', '10 menit sehari', '20–30 menit sehari', '2 jam tanpa henti'],
    correctAnswer: 2,
    explanation: 'Pada bagian data statistik infografik tercantum bahwa durasi ideal membaca buku adalah 20–30 menit setiap hari.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK EDUKASI LITERASI',
        title: 'Manfaat Hebat Membaca Buku Bagi Anak',
        subtitle: 'Kiat menumbuhkan kegemaran membaca untuk memperkaya wawasan',
        stats: [
          { number: '20–30 Menit', label: 'Waktu Baca Ideal / Hari', icon: 'Clock' },
          { number: '+85%', label: 'Penguasaan Kosakata Baru', icon: 'BookOpen' },
          { number: '100%', label: 'Daya Imajinasi Terasah', icon: 'Lightbulb' }
        ],
        keyPoints: [
          { icon: 'BookOpen', title: 'Memperkaya Kosakata', desc: 'Mengenal beragam istilah baru dan ungkapan indah dalam bahasa Indonesia.' },
          { icon: 'Lightbulb', title: 'Memperluas Wawasan', desc: 'Mendapat ilmu pengetahuan umum tentang dunia, sains, sejarah, dan lingkungan.' },
          { icon: 'Sparkles', title: 'Mengasah Imajinasi', desc: 'Melatih daya pikir kreatif saat membayangkan cerita dan petualangan tokoh.' },
          { icon: 'HeartPulse', title: 'Melatih Konsentrasi', desc: 'Meningkatkan daya fokus dan ketenangan pikiran saat belajar di kelas.' }
        ],
        footerNote: 'Gerakan Literasi Sekolah - Badan Pengembangan dan Pembinaan Bahasa'
      }
    }
  },
  {
    id: 3,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Data Diagram Batang',
    question: 'Berdasarkan data infografik hobi siswa Kelas 5 SD Merdeka di atas, hobi apakah yang menempati peringkat pertama paling banyak diminati siswa?',
    options: ['Bermain Musik', 'Berkebun Sayur', 'Menggambar & Melukis', 'Membaca Cerita'],
    correctAnswer: 2,
    explanation: 'Pada diagram batang, Menggambar & Melukis memiliki persentase tertinggi yaitu 40% (dipilih oleh 12 siswa).',
    visualClue: {
      chart: {
        title: 'Hasil Survei Hobi Favorit Siswa Kelas 5 SD Merdeka',
        subtitle: 'Jumlah total responden: 30 Siswa',
        items: [
          { label: 'Menggambar & Melukis', count: 12, percent: 40, color: 'bg-amber-500' },
          { label: 'Bermain Musik', count: 8, percent: 27, color: 'bg-emerald-500' },
          { label: 'Membaca Cerita', count: 6, percent: 20, color: 'bg-sky-500' },
          { label: 'Berkebun Sayur', count: 4, percent: 13, color: 'bg-rose-500' }
        ]
      }
    }
  },
  {
    id: 4,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Analisis Selisih Data Infografik',
    question: 'Berdasarkan infografik survei hobi di atas, berapakah selisih jumlah siswa yang memilih hobi Bermain Musik dibanding siswa yang memilih hobi Berkebun Sayur?',
    options: ['2 siswa', '4 siswa', '6 siswa', '8 siswa'],
    correctAnswer: 1,
    explanation: 'Siswa yang memilih Bermain Musik berjumlah 8 orang, sedangkan Berkebun Sayur berjumlah 4 orang. Selisihnya adalah 8 - 4 = 4 orang.',
    visualClue: {
      chart: {
        title: 'Hasil Survei Hobi Favorit Siswa Kelas 5 SD Merdeka',
        subtitle: 'Jumlah total responden: 30 Siswa',
        items: [
          { label: 'Menggambar & Melukis', count: 12, percent: 40, color: 'bg-amber-500' },
          { label: 'Bermain Musik', count: 8, percent: 27, color: 'bg-emerald-500' },
          { label: 'Membaca Cerita', count: 6, percent: 20, color: 'bg-sky-500' },
          { label: 'Berkebun Sayur', count: 4, percent: 13, color: 'bg-rose-500' }
        ]
      }
    }
  },
  {
    id: 5,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Detektif Peralatan Hobi',
    question: 'Perhatikan infografik perlengkapan di atas. Alat dan bahan tersebut menunjukkan kegiatan hobi...',
    options: ['Fotografi makro', 'Berkebun dan bercocok tanam', 'Merajut benang wol', 'Memasak kue basah'],
    correctAnswer: 1,
    explanation: 'Sekop mini, pot tanaman, media tanah humus, dan benih bibit adalah perlengkapan utama kegiatan berkebun atau bercocok tanam.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK PERALATAN BERKEBUN',
        title: 'Paket Perlengkapan Kebun Pekarangan Cilik',
        subtitle: 'Peralatan ramah anak untuk merawat tanaman sayur dan hias',
        stats: [
          { number: '4 Bahan', label: 'Komponen Tanam', icon: 'Sprout' },
          { number: '1 Pekan', label: 'Mulai Tumbuh Tunas', icon: 'Clock' }
        ],
        keyPoints: [
          { icon: 'Sprout', title: 'Sekop Mini Logam', desc: 'Alat penggali dan pengaduk media tanam tanah gembur.' },
          { icon: 'Sprout', title: 'Pot Tanaman Berlubang', desc: 'Wadah bibit berpori untuk sirkulasi air dan udara akar.' },
          { icon: 'Sprout', title: 'Tanah Humus Subur', desc: 'Media kaya nutrisi organik alami yang dibutuhkan tanaman.' },
          { icon: 'Sprout', title: 'Benih Biji Pilihan', desc: 'Bibit tanaman cabai atau tomat siap semai di pekarangan.' }
        ],
        footerNote: 'Modul Praktik Proyek P5 - Gaya Hidup Berkelanjutan Kelas 5 SD'
      }
    }
  },
  {
    id: 6,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Alur Prosedur Daur Ulang',
    question: 'Berdasarkan infografik alur daur ulang di atas, apa tindakan yang harus dilakukan setelah botol plastik bekas dicuci bersih dan dikeringkan?',
    options: [
      'Langsung dimasukkan ke tempat sampah akhir',
      'Memotong bagian atas botol sesuai pola tinggi wadah',
      'Mengecat badan botol sebelum dipotong',
      'Mengisi botol dengan air panas mendidih'
    ],
    correctAnswer: 1,
    explanation: 'Berdasarkan langkah ke-3 pada infografik prosedur, setelah botol bersih dan kering, langkah berikutnya adalah memotong bagian atas botol sesuai pola dengan aman.',
    visualClue: {
      flowchart: {
        title: 'Alur Mengolah Botol Plastik Bekas Menjadi Wadah Pensil Batik',
        steps: [
          { stepNumber: 1, title: 'Kumpulkan Botol', detail: 'Pilih botol plastik bekas minuman yang tebal dan kokoh.' },
          { stepNumber: 2, title: 'Cuci & Keringkan', detail: 'Lepas label stiker, cuci dengan sabun, lalu tiriskan di bawah terik.' },
          { stepNumber: 3, title: 'Potong Sesuai Pola', detail: 'Tandai garis batas dengan spidol lalu gunting bagian atas secara rapi.' },
          { stepNumber: 4, title: 'Hias & Cat Motif', detail: 'Cat dasar warna putih lalu lukis motif batik menggunakan cat akrilik.' }
        ]
      }
    }
  },
  {
    id: 7,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Tabel Data Visual',
    question: 'Perhatikan infografik jadwal ekstrakurikuler di atas. Pada hari dan tempat apakah siswa dapat mengikuti kegiatan Klub Merajut?',
    options: [
      'Senin di Ruang Seni Budaya',
      'Selasa di Laboratorium Komputer',
      'Rabu di Ruang Prakarya & Kriya',
      'Kamis di Aula Utama Sekolah'
    ],
    correctAnswer: 2,
    explanation: 'Berdasarkan baris ke-3 tabel, Klub Merajut dijadwalkan pada hari Rabu di Ruang Prakarya & Kriya.',
    visualClue: {
      table: {
        title: 'Jadwal Resmi Klub Ekstrakurikuler Hobi SD Melati Cendekia',
        headers: ['Hari', 'Nama Klub Hobi', 'Ruang Kegiatan', 'Waktu Pelaksanaan'],
        rows: [
          ['Senin', 'Klub Melukis & Seni Rupa', 'Ruang Seni Budaya', '15.00 - 16.30 WIB'],
          ['Selasa', 'Klub Robotik & Coding Cilik', 'Lab Komputer', '15.00 - 16.30 WIB'],
          ['Rabu', 'Klub Merajut & Kriya Kreatif', 'Ruang Prakarya & Kriya', '15.00 - 16.30 WIB'],
          ['Kamis', 'Klub Paduan Suara & Musik', 'Aula Utama Sekolah', '15.00 - 16.30 WIB']
        ]
      }
    }
  },
  {
    id: 8,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Detektif Ciri Khas Hobi',
    question: 'Perhatikan infografik di atas. Jarum berujung kait khusus (hakpen) dan gulungan benang wol lembut merupakan ciri utama dari kegiatan hobi...',
    options: ['Menenun kain sutra', 'Merajut (Crochet / Knitting)', 'Menyulam benang emas', 'Membuat seni origami'],
    correctAnswer: 1,
    explanation: 'Penggunaan jarum hakpen berkait dan benang wol lembut untuk menghasilkan topi, syal, atau boneka rajut merupakan ciri khas hobi merajut.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK SENI MERAJUT',
        title: 'Mengenal Perlengkapan dan Produk Merajut',
        subtitle: 'Kriya kreatif memanfaatkan serat wol untuk kreasi pakaian hangat',
        stats: [
          { number: 'Jarum Hakpen', label: 'Alat Kait Khusus', icon: 'Scissors' },
          { number: 'Serat Wol', label: 'Bahan Lembut Hangat', icon: 'FolderHeart' }
        ],
        keyPoints: [
          { icon: 'Scissors', title: 'Jarum Hakpen (Hook)', desc: 'Jarum dengan ujung berkait yang digunakan untuk mengait dan menarik lilitan benang.' },
          { icon: 'FolderHeart', title: 'Benang Wol Aneka Warna', desc: 'Serat benang tebal bertekstur lembut dan elastis untuk pola rajutan.' },
          { icon: 'Scissors', title: 'Gunting Pemotong Kriya', desc: 'Alat pemotong simpul benang rajut saat menyelesaikan jahitan akhir.' },
          { icon: 'Sparkles', title: 'Karya Syal & Topi Kupluk', desc: 'Hasil karya rajutan yang bernilai pakai tinggi dan menghangatkan tubuh.' }
        ],
        footerNote: 'Ensiklopedia Keterampilan Anak - Kementerian Pendidikan dan Kebudayaan'
      }
    }
  },
  {
    id: 9,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Manfaat Lingkungan',
    question: 'Berdasarkan infografik Aksi Hijau di atas, berapa persentase sampah kemasan botol dan kardus yang sebenarnya dapat didaur ulang kembali?',
    options: ['15%', '35%', '50%', '70%'],
    correctAnswer: 3,
    explanation: 'Pada bagian data statistik infografik dicantumkan bahwa sebanyak 70% sampah kemasan botol dan kardus dapat didaur ulang menjadi barang bermanfaat.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK AKSI HIJAU',
        title: 'Manfaat Daur Ulang Sampah untuk Kelestarian Lingkungan',
        subtitle: 'Eksplorasi hobi kreatif peduli lingkungan bagi generasi cilik',
        stats: [
          { number: '70%', label: 'Kemasan Dapat Didaur Ulang', icon: 'Recycle' },
          { number: '-40%', label: 'Pengurangan Timbunan TPA', icon: 'Sparkles' },
          { number: '100%', label: 'Kreativitas Berdaya Guna', icon: 'Lightbulb' }
        ],
        keyPoints: [
          { icon: 'Recycle', title: 'Mengurangi Limbah di TPA', desc: 'Mencegah tumpukan sampah plastik yang sulit terurai di alam liar.' },
          { icon: 'Sprout', title: 'Menjaga Kebersihan Tanah & Air', desc: 'Melindungi tanah dari cemaran zat kimia plastik beracun.' },
          { icon: 'Lightbulb', title: 'Melatih Kreativitas Anak', desc: 'Mengubah barang tidak terpakai menjadi barang baru yang estetik dan berguna.' },
          { icon: 'Award', title: 'Menumbuhkan Jiwa Mandiri', desc: 'Belajar menghargai sumber daya alam dan peduli kebersihan lingkungan sekitar.' }
        ],
        footerNote: 'Program Sekolah Adiwiyata Tingkat Nasional'
      }
    }
  },
  {
    id: 10,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Diagram Durasi Waktu',
    question: 'Berdasarkan diagram infografik alokasi waktu di atas, rentang waktu manakah yang paling banyak dipilih oleh siswa dalam sepekan?',
    options: ['1 - 2 Jam per minggu', '3 - 4 Jam per minggu', '5 - 6 Jam per minggu', 'Lebih dari 7 Jam per minggu'],
    correctAnswer: 1,
    explanation: 'Rentang 3 - 4 Jam per minggu merupakan pilihan terbanyak yakni dipilih oleh 50% siswa (15 dari 30 siswa).',
    visualClue: {
      chart: {
        title: 'Distribusi Alokasi Waktu Menjalankan Hobi per Pekan',
        subtitle: 'Survei 30 Siswa Kelas 5 SD Merdeka',
        items: [
          { label: '1 - 2 Jam / Pekan', count: 6, percent: 20, color: 'bg-slate-400' },
          { label: '3 - 4 Jam / Pekan', count: 15, percent: 50, color: 'bg-emerald-500' },
          { label: '5 - 6 Jam / Pekan', count: 7, percent: 23, color: 'bg-blue-500' },
          { label: 'Lebih dari 7 Jam / Pekan', count: 2, percent: 7, color: 'bg-amber-500' }
        ]
      }
    }
  },
  {
    id: 11,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Detektif Peralatan Hobi',
    question: 'Perhatikan infografik di atas. Menyesuaikan bukaan fokus lensa, mencari sudut pencahayaan fajar, dan membidik objek satwa di alam merupakan kegiatan hobi...',
    options: ['Sinematografi animasi', 'Fotografi alam', 'Melukis dinding mural', 'Mendesain poster digital'],
    correctAnswer: 1,
    explanation: 'Kamera digital, lensa fokus, sudut pencahayaan, dan tripod penyangga adalah perlengkapan utama hobi fotografi alam.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK DETEKTIF HOBI',
        title: 'Mengenal Perlengkapan Fotografi Alam Terbuka',
        subtitle: 'Mengabadikan keindahan flora, fauna, dan pemandangan fajar',
        stats: [
          { number: 'Fokus & Lensa', label: 'Ketajaman Bidikan', icon: 'Camera' },
          { number: 'Cahaya Alami', label: 'Kunci Komposisi Indah', icon: 'Lightbulb' }
        ],
        keyPoints: [
          { icon: 'Camera', title: 'Kamera Digital / Ponsel', desc: 'Alat pengubah tangkapan cahaya optik menjadi foto digital beresolusi tinggi.' },
          { icon: 'Camera', title: 'Lensa Fokus & Zoom', desc: 'Mengatur jarak dan ketajaman objek agar gambar tampak jernih dan berkarakter.' },
          { icon: 'Lightbulb', title: 'Komposisi Pencahayaan', desc: 'Memanfaatkan sinar matahari pagi untuk memberi bayangan dan warna dramatis.' },
          { icon: 'Compass', title: 'Tripod Penyangga', desc: 'Penyangga berkaki tiga agar bidikan kamera tetap stabil dan tidak bergoyang.' }
        ],
        footerNote: 'Panduan Karya Tulis & Visual Anak Berbakat'
      }
    }
  },
  {
    id: 12,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Manfaat Fisik & Olahraga',
    question: 'Berdasarkan infografik kebugaran jasmani di atas, berapakah target durasi aktivitas fisik aktif yang dianjurkan per minggu bagi anak usia sekolah?',
    options: ['30 menit per minggu', '60 menit per minggu', '150 menit per minggu', '10 jam setiap hari'],
    correctAnswer: 2,
    explanation: 'Pada kotak data statistik infografik dicantumkan bahwa anjuran beraktivitas fisik adalah minimal 150 menit per minggu.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK KESEHATAN FISIK',
        title: 'Manfaat Bersepeda & Olahraga Teratur Bagi Anak',
        subtitle: 'Menjaga stamina, melatih kesehatan jantung, dan menyegarkan pikiran',
        stats: [
          { number: '150 Menit', label: 'Gerak Aktif / Pekan', icon: 'Clock' },
          { number: '+75%', label: 'Kebugaran Jantung & Paru', icon: 'HeartPulse' },
          { number: '100%', label: 'Pelepas Rasa Jenuh Belajar', icon: 'Sparkles' }
        ],
        keyPoints: [
          { icon: 'HeartPulse', title: 'Melatih Daya Tahan Jantung', desc: 'Kayuhan sepeda teratur menguatkan sirkulasi darah ke seluruh tubuh.' },
          { icon: 'Flame', title: 'Memperkuat Otot Kaki & Tubuh', desc: 'Gerakan aktif membantu pertumbuhan tulang dan otot yang kokoh serta seimbang.' },
          { icon: 'Sparkles', title: 'Menyegarkan Pikiran', desc: 'Menghirup udara segar di luar ruangan meredakan rasa lelah setelah belajar di kelas.' },
          { icon: 'Compass', title: 'Melatih Keseimbangan & Refleks', desc: 'Menavigasi jalur sepeda mengasah konsentrasi dan kepekaan indra motorik.' }
        ],
        footerNote: 'Panduan Pola Hidup Sehat Anak Usia Sekolah Dasar'
      }
    }
  },
  {
    id: 13,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Langkah Prosedur Origami',
    question: 'Perhatikan infografik langkah melipat origami burung di atas. Apa tindakan yang harus dilakukan tepat setelah melipat kertas secara diagonal?',
    options: [
      'Menyiapkan kertas persegi aneka motif',
      'Buka lipatan lalu lipat sisi kiri dan kanan ke garis tengah',
      'Menggunting kertas menjadi dua bagian',
      'Menempelkan kertas dengan lem perekat'
    ],
    correctAnswer: 1,
    explanation: 'Pada langkah ke-3 bagan alur, setelah lipatan diagonal segitiga dibuat, langkah berikutnya adalah membuka lipatan lalu melipat sisi kiri dan kanan menuju garis tengah.',
    visualClue: {
      flowchart: {
        title: 'Bagan Alur Prosedur Melipat Seni Kertas Origami Burung Bangau',
        steps: [
          { stepNumber: 1, title: 'Siapkan Kertas Persegi', detail: 'Gunakan kertas lipat khusus yang memiliki sisi sama panjang dan warna cerah.' },
          { stepNumber: 2, title: 'Lipat Diagonal Segitiga', detail: 'Pertemukan dua sudut berseberangan untuk membuat garis lipat diagonal yang rapi.' },
          { stepNumber: 3, title: 'Lipat ke Garis Tengah', detail: 'Buka lipatan, lalu tekuk sisi tepi kiri dan kanan lurus menuju garis tengah.' },
          { stepNumber: 4, title: 'Bentuk Kepala & Sayap', detail: 'Tekuk ujung lancip bagian atas membentuk paruh lalu lebarkan kedua sayapnya.' }
        ]
      }
    }
  },
  {
    id: 14,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Manfaat Kewirausahaan',
    question: 'Berdasarkan infografik Hobi Produktif di atas, apa manfaat positif jika sebuah hobi ditekuni dengan sungguh-sungguh hingga menghasilkan karya?',
    options: [
      'Menyebabkan siswa melupakan pelajaran sekolah',
      'Menumbuhkan jiwa kewirausahaan dan tabungan mandiri',
      'Membuat waktu luang terbuang sia-sia',
      'Menambah beban pengeluaran orang tua'
    ],
    correctAnswer: 1,
    explanation: 'Sebagaimana tertulis pada infografik, hobi produktif mengajarkan semangat kewirausahaan mandiri dan mendatangkan tabungan dari hasil karya sendiri.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK HOBI PRODUKTIF',
        title: 'Dari Kegemaran Berkarya Menjadi Wirausaha Cilik',
        subtitle: 'Pengembangan potensi bakat anak yang membawa manfaat ekonomi mandiri',
        stats: [
          { number: 'Kreativitas', label: 'Kunci Mutu Produk', icon: 'Sparkles' },
          { number: 'Tabungan', label: 'Hasil Penjualan Mandiri', icon: 'Award' }
        ],
        keyPoints: [
          { icon: 'Sparkles', title: 'Mengasah Keahlian Khusus', desc: 'Menguasai keterampilan membuat kue, merajut, atau melukis dengan standar rapi.' },
          { icon: 'FolderHeart', title: 'Pengemasan Menarik', desc: 'Menata karya ke dalam kemasan bersih dan berlabel nama kreasi yang cantik.' },
          { icon: 'Award', title: 'Belajar Berniaga Jujur', desc: 'Menawarkan hasil karya kepada tetangga atau sahabat dengan harga yang pantas.' },
          { icon: 'Lightbulb', title: 'Membangun Jiwa Mandiri', desc: 'Uang hasil penjualan dapat ditabung untuk membeli perlengkapan sekolah mandiri.' }
        ],
        footerNote: 'Pendidikan Karakter & Literasi Finansial Dasar Kelas 5 SD'
      }
    }
  },
  {
    id: 15,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Detektif Ciri Khas Seni Kertas',
    question: 'Perhatikan infografik di atas. Seni melipat kertas tradisional Jepang yang hanya mengandalkan ketelitian lipatan jemari tanpa gunting dan lem disebut...',
    options: ['Kaligrafi', 'Ikebana', 'Origami', 'Batik'],
    correctAnswer: 2,
    explanation: 'Kata origami berasal dari kata bahasa Jepang "ori" (melipat) dan "kami" (kertas), yaitu seni melipat kertas tanpa perekat atau alat potong.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK SENI ORIGAMI',
        title: 'Mengenal Ciri Khas Seni Melipat Kertas Tradisional',
        subtitle: 'Kearifan seni presisi geometri asal Negeri Sakura',
        stats: [
          { number: '0 Gunting', label: 'Hanya Lipatan Jemari', icon: 'Scissors' },
          { number: '0 Perekat', label: 'Bentuk Kokoh Alami', icon: 'FolderHeart' }
        ],
        keyPoints: [
          { icon: 'FolderHeart', title: 'Kertas Washi Persegi', desc: 'Menggunakan kertas khusus berbentuk bujur sangkar dengan ragam corak warna.' },
          { icon: 'Scissors', title: 'Pantangan Memotong', desc: 'Karya dibentuk murni dari teknik melipat lipatan tanpa bantuan gunting atau silet.' },
          { icon: 'Lightbulb', title: 'Kerapian Sudut Geometri', desc: 'Ketelitian dalam menyelaraskan garis dan sudut adalah rahasia bentuk sempurna.' },
          { icon: 'Sparkles', title: 'Bentuk Fauna & Flora', desc: 'Menghasilkan aneka replika hewan seperti katak loncat, burung bangau, dan bunga lili.' }
        ],
        footerNote: 'Materi Muatan Seni Budaya & Keterampilan Kelas 5 SD'
      }
    }
  },
  {
    id: 16,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Tabel Data Kritis',
    question: 'Berdasarkan tabel inventaris perlengkapan ruang kriya di atas, perlengkapan manakah yang persediaannya berada dalam status Kritis / Menipis dan harus segera ditambah?',
    options: ['Kertas Origami Warna', 'Stik Es Krim Kayu', 'Lem Kertas Botol', 'Benang Wol Rajut'],
    correctAnswer: 2,
    explanation: 'Berdasarkan baris ke-3 tabel, Lem Kertas Botol hanya tersisa 3 botol dengan keterangan status Kritis / Menipis.',
    visualClue: {
      table: {
        title: 'Laporan Inventaris Perlengkapan Ruang Kriya & Hobi Sekolah',
        headers: ['Nama Perlengkapan', 'Jumlah Stok', 'Satuan', 'Status Persediaan'],
        rows: [
          ['Kertas Origami Warna', '25', 'Paket', 'Aman / Cukup'],
          ['Stik Es Krim Kayu', '400', 'Batang', 'Sangat Banyak'],
          ['Lem Kertas Botol', '3', 'Botol', 'Kritis / Menipis'],
          ['Benang Wol Rajut', '18', 'Gulung', 'Aman / Cukup']
        ]
      }
    }
  },
  {
    id: 17,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Nilai Karakter pada Infografik',
    question: 'Berdasarkan infografik instrumen angklung di atas, nilai karakter utama apakah yang dilatih ketika anak-anak bermain musik angklung bersama kelompoknya?',
    options: [
      'Keinginan bersaing tampil paling keras',
      'Kerja sama tim, kekompakan, dan kepekaan ritme',
      'Membunyikan tabung di luar giliran not balok',
      'Bermain secara mandiri tanpa memedulikan tempo lagu'
    ],
    correctAnswer: 1,
    explanation: 'Infografik menegaskan bahwa angklung hanya menghasilkan harmoni lagu jika seluruh anggota tim bekerja sama secara kompak sesuai gilirannya.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK MUSIK TRADISIONAL',
        title: 'Nilai Kerja Sama dalam Permainan Angklung',
        subtitle: 'Warisan budaya dunia asli Indonesia yang mendidik kebersamaan',
        stats: [
          { number: '1 Tabung = 1 Nada', label: 'Tanggung Jawab Pribadi', icon: 'Music' },
          { number: '100% Harmoni', label: 'Terwujud dari Kekompakan', icon: 'HeartPulse' }
        ],
        keyPoints: [
          { icon: 'Music', title: 'Satu Anak Satu Nada', desc: 'Setiap siswa memegang tabung dengan nada tertentu dan bertanggung jawab pada nadanya.' },
          { icon: 'Clock', title: 'Ketukan Ritme Tepat', desc: 'Angklung digoyangkan tepat pada ketukan partitur saat dirigen memberi aba-aba.' },
          { icon: 'HeartPulse', title: 'Kekompakan Tim', desc: 'Lagu yang indah merupakan hasil perpaduan bunyi seluruh peserta tanpa ada yang merasa lebih tinggi.' },
          { icon: 'Award', title: 'Apresiasi Budaya Nusantara', desc: 'Menumbuhkan rasa bangga terhadap instrumen bambu tradisional khas Jawa Barat.' }
        ],
        footerNote: 'Warisan Budaya Takbenda Dunia UNESCO'
      }
    }
  },
  {
    id: 18,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Manfaat Menulis',
    question: 'Berdasarkan infografik di atas, kegiatan mencatat pengalaman pribadi, peristiwa menarik, dan perasaan harian secara teratur ke dalam buku catatan disebut hobi...',
    options: [
      'Menulis buku harian (jurnal pribadi)',
      'Menulis artikel koran berita kriminal',
      'Menyalin daftar belanjaan pasar',
      'Membuat buku kas keuangan bank'
    ],
    correctAnswer: 0,
    explanation: 'Mencatat refleksi peristiwa sehari-hari dan perasaan pribadi secara berkala ke dalam buku bersampul disebut menulis buku harian (diary / jurnal pribadi).',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK HOBI MENULIS',
        title: 'Manfaat Menulis Buku Harian (Jurnal Pribadi)',
        subtitle: 'Merekam jejak kenangan dan melatih pengungkapan ekspresi diri',
        stats: [
          { number: '15 Menit', label: 'Waktu Tulis Sebelum Tidur', icon: 'Clock' },
          { number: '100% Bebas', label: 'Mengekspresikan Rasa', icon: 'Lightbulb' }
        ],
        keyPoints: [
          { icon: 'BookOpen', title: 'Merekam Peristiwa Berkesan', desc: 'Menyimpan memori indah tentang petualangan bersama sahabat dan keluarga.' },
          { icon: 'Lightbulb', title: 'Penyalur Emosi Positif', desc: 'Membantu menenangkan hati dengan menuangkan kegembiraan atau kecemasan lewat tulisan.' },
          { icon: 'Sparkles', title: 'Melatih Keterampilan Bahasa', desc: 'Membiasakan diri menyusun kalimat yang runtut, runtut, dan kaya kosa kata.' },
          { icon: 'Compass', title: 'Mengenali Perkembangan Diri', desc: 'Membaca kembali catatan masa lalu untuk melihat bagaimana diri kita bertumbuh makin dewasa.' }
        ],
        footerNote: 'Pembelajaran Bahasa Indonesia Kelas 5 SD - Bab 3'
      }
    }
  },
  {
    id: 19,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Data Persentase Infografik',
    question: 'Berdasarkan diagram lokasi aktivitas hobi di atas, di manakah tempat yang paling banyak digunakan siswa Kelas 5 untuk menjalankan hobinya?',
    options: ['Di Lingkungan Sekolah', 'Di Rumah Masing-masing', 'Di Taman Terbuka', 'Di Sanggar Khusus'],
    correctAnswer: 1,
    explanation: 'Pada diagram, lokasi Di Rumah Masing-masing menempati persentase terbesar yakni 65% (26 dari 40 siswa).',
    visualClue: {
      chart: {
        title: 'Tempat Favorit Siswa Menjalankan Aktivitas Hobi',
        subtitle: 'Responden: 40 Siswa Kelas 5 SD Gugus Cendekia',
        items: [
          { label: 'Di Rumah Masing-masing', count: 26, percent: 65, color: 'bg-emerald-600' },
          { label: 'Di Lingkungan Sekolah', count: 8, percent: 20, color: 'bg-sky-500' },
          { label: 'Di Taman Terbuka', count: 4, percent: 10, color: 'bg-amber-500' },
          { label: 'Di Sanggar Khusus', count: 2, percent: 5, color: 'bg-purple-500' }
        ]
      }
    }
  },
  {
    id: 20,
    sectionId: 'section1',
    sectionTitle: 'Bagian 1: Detektif Hobi & Infografik',
    topicTag: 'Membaca Sikap Positif Berhobi',
    question: 'Berdasarkan infografik Sikap Kreatif di atas, apa langkah terbaik yang harus dilakukan saat kita menghadapi kesalahan tak terduga (seperti cat meluber di kanvas)?',
    options: [
      'Merobek kanvas dan langsung berhenti melukis',
      'Tetap tenang dan mengolah tumpahan cat menjadi objek kreatif baru',
      'Menyalahkan kuas yang dipakai dan membuangnya ke tong sampah',
      'Menangis dan meninggalkan ruang kelas begitu saja'
    ],
    correctAnswer: 1,
    explanation: 'Infografik menganjurkan agar tetap tenang dan berpikir kreatif mengolah kesalahan tak terduga menjadi bentuk karya baru yang bernilai seni.',
    visualClue: {
      infographicPoster: {
        badge: 'INFOGRAFIK PENDIDIKAN KARAKTER',
        title: 'Menyikapi Hambatan Tak Terduga Saat Menjalankan Hobi',
        subtitle: 'Kiat melatih kesabaran, pantang menyerah, dan daya kreasi cilik',
        stats: [
          { number: 'Tenang', label: 'Tarik Nafas & Jangan Panik', icon: 'HeartPulse' },
          { number: 'Kreatif', label: 'Ubah Noda Jadi Peluang', icon: 'Lightbulb' }
        ],
        keyPoints: [
          { icon: 'HeartPulse', title: 'Jaga Ketenangan Pikiran', desc: 'Hindari marah atau putus asa saat rencana awal tidak berjalan sesuai harapan.' },
          { icon: 'Lightbulb', title: 'Berpikir Fleksibel & Kreatif', desc: 'Noda cat yang meluber dapat diubah menjadi bentuk awan, bebatuan, atau dedaunan unik.' },
          { icon: 'Sparkles', title: 'Menghargai Proses Belajar', desc: 'Karya seni yang istimewa sering kali lahir dari keberanian memperbaiki kesalahan.' },
          { icon: 'Award', title: 'Pantang Menyerah', desc: 'Setiap tantangan merupakan batu loncatan untuk mengasah keahlian berkarya lebih tinggi.' }
        ],
        footerNote: 'Instruksi Karakter Merdeka Belajar - Kemendikbudristek'
      }
    }
  },

  // ==========================================
  // BAGIAN 2: KAIDAH AWALAN me- (SOAL 21 - 40)
  // Murni stimulus soal langsung tanpa contekan rumus/analisis morfologi di awal!
  // Pilihan opsi bersih tanpa bocoran kata kunci!
  // ==========================================
  {
    id: 21,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Peluluhan Huruf T',
    question: 'Bentuk kata berimbuhan awalan me- yang benar untuk kata dasar "tulis" adalah...',
    options: ['Mentulis', 'Menulis', 'Mengkulis', 'Metulis'],
    correctAnswer: 1,
    explanation: 'Kata dasar "tulis" berawalan huruf T yang diikuti huruf vokal, sehingga huruf T luluh dan awalan berubah menjadi "men-" sehingga menjadi "menulis".'
  },
  {
    id: 22,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Peluluhan Huruf S',
    question: 'Bentuk kata berimbuhan me- yang baku untuk kata dasar "sapu" adalah...',
    options: ['Mensapu', 'Mesapu', 'Menyapu', 'Mengsapu'],
    correctAnswer: 2,
    explanation: 'Kata dasar "sapu" berawalan huruf S yang diikuti huruf vokal, sehingga huruf S luluh menjadi bunyi sengau "meny-" sehingga menjadi "menyapu".'
  },
  {
    id: 23,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Peluluhan Huruf P',
    question: 'Bentuk kata berimbuhan me- yang tepat untuk kata dasar "potong" adalah...',
    options: ['Mempotong', 'Mepotong', 'Memotong', 'Menpotong'],
    correctAnswer: 2,
    explanation: 'Kata dasar "potong" berawalan huruf P yang diikuti huruf vokal, sehingga huruf P luluh menjadi bunyi "mem-" menghasilkan "memotong".'
  },
  {
    id: 24,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Peluluhan Huruf K',
    question: 'Bentuk bentukan awalan me- yang baku untuk kata dasar "kirim" adalah...',
    options: ['Mengkirim', 'Mengirim', 'Menkirim', 'Mekirim'],
    correctAnswer: 1,
    explanation: 'Kata dasar "kirim" berawalan huruf K yang diikuti huruf vokal, sehingga huruf K luluh menjadi awalan "meng-" menghasilkan "mengirim".'
  },
  {
    id: 25,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Tanpa Peluluhan Huruf L',
    question: 'Bentuk kata berimbuhan awalan me- yang tepat untuk kata dasar "lukis" adalah...',
    options: ['Menlukis', 'Melukis', 'Mendlukis', 'Mengelukis'],
    correctAnswer: 1,
    explanation: 'Kata dasar yang berawalan huruf L tidak mengalami peluluhan, dan bentuk awalannya tetap "me-" menghasilkan kata "melukis".'
  },
  {
    id: 26,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Satu Suku Kata',
    question: 'Bentuk berimbuhan awalan me- yang benar untuk kata dasar "cat" adalah...',
    options: ['Mencat', 'Mecat', 'Mengecat', 'Mengcat'],
    correctAnswer: 2,
    explanation: 'Kata dasar yang hanya memiliki satu suku kata (seperti cat, lap, pel, bor, cek) berubah bentuk awalannya menjadi "menge-" -> mengecat.'
  },
  {
    id: 27,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Mengidentifikasi Kata Tidak Baku',
    question: 'Perhatikan kalimat berikut: "Kakak sedang mempromosikan dagangannya dan mempancing ikan di kolam." Kata yang penulisannya TIDAK baku adalah...',
    options: ['mempromosikan', 'mempancing', 'dagangannya', 'kolam'],
    correctAnswer: 1,
    explanation: 'Kata "mempancing" tidak baku. Kata dasar "pancing" diawali huruf P yang diikuti huruf vokal sehingga huruf P harus luluh menjadi "memancing".'
  },
  {
    id: 28,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Gugus Konsonan',
    question: 'Bentuk kata berimbuhan awalan me- yang baku untuk kata dasar serapan "kritik" adalah...',
    options: ['Mengritik', 'Mengkritik', 'Menkritik', 'Mekritik'],
    correctAnswer: 1,
    explanation: 'Kata "kritik" diawali oleh gugus konsonan (dua konsonan berurutan: k dan r), sehingga huruf k TIDAK luluh melainkan tetap dipertahankan menjadi "mengkritik".'
  },
  {
    id: 29,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Tanpa Peluluhan Huruf R',
    question: 'Ibu sedang ... benang wol merah muda untuk membuat selimut bayi. Bentuk kata berimbuhan me- yang tepat dari kata dasar "rajut" adalah...',
    options: ['Merajut', 'Menrajut', 'Mengrajut', 'Mengerajut'],
    correctAnswer: 0,
    explanation: 'Kata dasar yang diawali huruf R tidak luluh dan mendapat awalan "me-" menghasilkan kata "merajut".'
  },
  {
    id: 30,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Tanpa Peluluhan Huruf W',
    question: 'Bentuk kata berimbuhan me- yang benar untuk kata dasar "warna" adalah...',
    options: ['Menwarna', 'Mengwarna', 'Mewarnai', 'Mengewarna'],
    correctAnswer: 2,
    explanation: 'Kata dasar berawalan huruf W tidak mengalami peluluhan dan mendapat awalan "me-", dengan akhiran -i menjadi "mewarnai".'
  },
  {
    id: 31,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Berawalan Huruf Vokal',
    question: 'Bentuk berimbuhan awalan me- yang benar jika digabungkan dengan kata dasar "atur" adalah...',
    options: ['Meatur', 'Menatur', 'Mengatur', 'Menyatur'],
    correctAnswer: 2,
    explanation: 'Kata dasar yang diawali huruf vokal (a, i, u, e, o) mendapat awalan "meng-" menghasilkan kata "mengatur".'
  },
  {
    id: 32,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Berawalan Huruf Vokal',
    question: 'Ayah sedang ... sayur kangkung segar yang baru dipanen dari kebun. Bentuk kata berimbuhan me- yang tepat dari kata dasar "ikat" adalah...',
    options: ['Meikat', 'Menikat', 'Mengikat', 'Menyikat'],
    correctAnswer: 2,
    explanation: 'Kata dasar yang berawalan huruf vokal "i" mendapat awalan "meng-" sehingga menjadi "mengikat".'
  },
  {
    id: 33,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Berawalan Huruf B',
    question: 'Bentuk berimbuhan me- yang tepat untuk kata dasar "baca" adalah...',
    options: ['Menbaca', 'Membaca', 'Mengbaca', 'Mebaca'],
    correctAnswer: 1,
    explanation: 'Kata dasar berawalan huruf B mendapat awalan "mem-" tanpa peluluhan sehingga menjadi "membaca".'
  },
  {
    id: 34,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Berawalan Huruf D',
    question: 'Bentuk kata berimbuhan me- yang benar untuk kata dasar "dengar" adalah...',
    options: ['Mendengar', 'Memdengar', 'Mengdengar', 'Medengar'],
    correctAnswer: 0,
    explanation: 'Kata dasar berawalan huruf D mendapat awalan "men-" tanpa peluluhan sehingga menjadi "mendengar".'
  },
  {
    id: 35,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kata Berawalan Huruf G',
    question: 'Bentuk berimbuhan me- yang tepat untuk kata dasar "gambar" adalah...',
    options: ['Menggambar', 'Mengambar', 'Menggambarkan', 'Megambar'],
    correctAnswer: 0,
    explanation: 'Kata dasar berawalan huruf G mendapat awalan "meng-" dan huruf G tidak luluh sehingga ditulis "menggambar".'
  },
  {
    id: 36,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Menentukan Kata Dasar',
    question: 'Kata "menyiram" memiliki kata dasar berupa...',
    options: ['Nyiram', 'Siram', 'Iram', 'Miram'],
    correctAnswer: 1,
    explanation: 'Bentuk "menyiram" berasal dari awalan me- yang mengalami peluluhan huruf S pada kata dasar "siram".'
  },
  {
    id: 37,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Menentukan Kata Dasar',
    question: 'Kata "mengelap" memiliki kata dasar berupa...',
    options: ['Ngelap', 'Elap', 'Lap', 'Kelap'],
    correctAnswer: 2,
    explanation: 'Bentuk "mengelap" dibentuk dari awalan menge- yang melekat pada kata dasar satu suku kata yaitu "lap".'
  },
  {
    id: 38,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Menentukan Kata Dasar',
    question: 'Kata "mengunci" memiliki kata dasar berupa...',
    options: ['Ngunci', 'Kunci', 'Kuncian', 'Unci'],
    correctAnswer: 1,
    explanation: 'Bentuk "mengunci" berasal dari awalan me- dengan peluluhan huruf K pada kata dasar "kunci".'
  },
  {
    id: 39,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Gugus Konsonan',
    question: 'Bentuk kata berimbuhan me- yang baku untuk kata dasar "program" adalah...',
    options: ['Memrogram', 'Memprogram', 'Meprogram', 'Mengprogram'],
    correctAnswer: 1,
    explanation: 'Kata dasar "program" berawalan gugus konsonan (pr), sehingga huruf p TIDAK luluh melainkan tetap utuh menjadi "memprogram".'
  },
  {
    id: 40,
    sectionId: 'section2',
    sectionTitle: 'Bagian 2: Kaidah Awalan me-',
    topicTag: 'Kalimat Efektif Berimbuhan',
    question: 'Manakah di antara kalimat berikut yang memuat penulisan kata berimbuhan me- secara BENAR dan BAKU?',
    options: [
      'Sinta gemar memfoto pemandangan sawah dan mentulis puisi.',
      'Sinta gemar memotret pemandangan sawah dan menulis puisi.',
      'Sinta gemar mengpotret pemandangan sawah dan mentulis puisi.',
      'Sinta gemar menyotret pemandangan sawah dan memtulis puisi.'
    ],
    correctAnswer: 1,
    explanation: 'Bentuk baku untuk potret adalah memotret (huruf P luluh) dan untuk tulis adalah menulis (huruf T luluh).'
  },

  // ==========================================
  // BAGIAN 3: SUSUN CERITA & PETA PIKIRAN (SOAL 41 - 60)
  // Tidak ada teks rujukan panjang yang membocorkan jawaban;
  // Siswa menganalisis peristiwa, alur, kalimat utama, dan peta pikiran secara mandiri!
  // ==========================================
  {
    id: 41,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Mengurutkan Alur Peristiwa',
    question: 'Urutkan tahapan kegiatan Dimas berikut agar membentuk alur cerita merawat tanaman cabai yang runut dan logis!\n(1) Dimas memanen cabai merah segar bersama kakek.\n(2) Dimas menabur benih cabai di atas tanah yang gembur.\n(3) Setiap sore Dimas menyiram tunas dan mencabuti rumput liar.\n(4) Muncul bunga putih kecil yang perlahan berubah menjadi buah cabai hijau.',
    options: ['(2) - (3) - (4) - (1)', '(1) - (2) - (3) - (4)', '(2) - (4) - (3) - (1)', '(3) - (2) - (1) - (4)'],
    correctAnswer: 0,
    explanation: 'Urutan peristiwa yang logis adalah: menabur benih (2) -> menyiram tunas (3) -> tumbuh bunga dan buah (4) -> memanen hasil (1).'
  },
  {
    id: 42,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Struktur Teks Narasi',
    question: 'Dalam sebuah cerita tentang hobi, bagian yang menceritakan tentang perkenalan tokoh, kegemaran melukisnya, serta latar tempat ia biasa berkarya disebut bagian...',
    options: ['Awal (Orientasi / Pengenalan)', 'Tengah (Konflik / Puncak Masalah)', 'Akhir (Resolusi / Penyelesaian)', 'Daftar Pustaka'],
    correctAnswer: 0,
    explanation: 'Bagian awal atau orientasi berfungsi memperkenalkan tokoh, kegemarannya, dan latar cerita kepada pembaca.'
  },
  {
    id: 43,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menentukan Kalimat Utama',
    question: 'Bacalah paragraf berikut:\n"(1) Merajut memiliki banyak manfaat bagi perkembangan diri siswa. (2) Aktivitas ini melatih kesabaran saat merangkai tusukan benang demi tusukan. (3) Selain itu, merajut juga mengasah koordinasi motorik antara mata dan jemari tangan. (4) Hasil rajutan bahkan dapat dijadikan hadiah berharga untuk sahabat terdekat."\n\nKalimat utama paragraf tersebut terletak pada nomor...',
    options: ['Nomor (1)', 'Nomor (2)', 'Nomor (3)', 'Nomor (4)'],
    correctAnswer: 0,
    explanation: 'Kalimat nomor (1) merupakan kalimat utama yang memuat ide pokok umum, sedangkan kalimat (2), (3), dan (4) adalah kalimat penjelas.'
  },
  {
    id: 44,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Melengkapi Peta Pikiran',
    question: 'Perhatikan infografik peta pikiran di atas. Pada topik sentral "Hobi Berkebun di Rumah", rincian manakah yang PALING TEPAT untuk mengisi cabang Alat & Bahan yang masih kosong tanda tanya?',
    options: [
      'Sekop mini, pot tanah liat, tanah humus, dan gembor air',
      'Kamera digital, lensa tele, dan kartu memori',
      'Kuas lukis, cat akrilik, dan kain kanvas',
      'Senar gitar, pick pemetik, dan buku not balok'
    ],
    correctAnswer: 0,
    explanation: 'Peralatan dan bahan yang sesuai untuk cabang Hobi Berkebun adalah sekop mini, pot tanah liat, tanah humus, dan gembor penyiram air.',
    visualClue: {
      mindmapDiagram: {
        center: 'Hobi Berkebun',
        branches: [
          { title: 'Manfaat', items: ['Udara pekarangan segar', 'Sayuran sehat', 'Hati gembira'] },
          { title: 'Alat & Bahan', items: ['[ ? Kotak ini harus diisi ? ]'], isTarget: true },
          { title: 'Waktu Pelaksanaan', items: ['Pagi hari sebelum terik', 'Sore hari sepulang sekolah'] }
        ]
      }
    }
  },
  {
    id: 45,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Mengurutkan Prosedur Kriya',
    question: 'Urutkan petunjuk membuat celengan dari botol bekas berikut menjadi teks prosedur yang padu!\n(1) Hias badan botol dengan cat warna dan tempelkan telinga karton.\n(2) Cuci bersih botol plastik bekas dan jemur hingga kering di bawah sinar matahari.\n(3) Masukkan koin pertama ke dalam celengan barumu.\n(4) Buat lubang memanjang seukuran koin pada punggung botol dengan hati-hati.',
    options: ['(2) - (4) - (1) - (3)', '(4) - (2) - (1) - (3)', '(2) - (1) - (4) - (3)', '(1) - (2) - (3) - (4)'],
    correctAnswer: 0,
    explanation: 'Urutan prosedur yang benar: mencuci botol (2) -> melubangi botol (4) -> menghias botol (1) -> memasukkan koin (3).'
  },
  {
    id: 46,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Mengidentifikasi Konflik Cerita',
    question: 'Bacalah penggalan peristiwa berikut:\n"Dua hari menjelang pameran seni di sekolah, kanvas lukisan Bayu ketumpahan air teh oleh adiknya yang sedang berlari. Bayu terduduk lemas melihat warna catnya luntur."\n\nDalam struktur cerita narasi, penggalan peristiwa tersebut termasuk bagian...',
    options: ['Awal (Orientasi)', 'Tengah (Konflik / Masalah Cerita)', 'Akhir (Resolusi)', 'Daftar Isi'],
    correctAnswer: 1,
    explanation: 'Bagian ini memaparkan masalah atau peristiwa menegangkan yang menjadi rintangan bagi tokoh cerita (konflik/tengah).'
  },
  {
    id: 47,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menentukan Resolusi Cerita',
    question: 'Melanjutkan kisah lukisan Bayu yang ketumpahan air teh, bagaimanakah kalimat penyelesaian (resolusi akhir) yang PALING POSITIF dan mendidik sikap kreatif?',
    options: [
      'Bayu memaafkan adiknya, lalu mengolah noda teh menjadi bayangan pohon senja yang artistik hingga menuai pujian dewan juri.',
      'Bayu mengurung diri di dalam kamar dan menolak masuk sekolah selama sepekan.',
      'Bayu membalas merusak mainan kesayangan adiknya sampai hancur.',
      'Bayu membuang lukisannya ke selokan sekolah sambil marah-marah.'
    ],
    correctAnswer: 0,
    explanation: 'Resolusi yang mendidik menunjukkan sikap pemaaf dan kecerdasan kreatif dalam mengatasi masalah menjadi karya yang lebih baik.'
  },
  {
    id: 48,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Melengkapi Peta Pikiran',
    question: 'Perhatikan infografik peta pikiran di atas. Pada bagan peta pikiran dengan topik sentral "Seni Melukis", manakah rincian yang PALING COCOK untuk melengkapi cabang Manfaat Diri yang bertanda tanya?',
    options: [
      'Menumbuhkan daya imajinasi, kepekaan warna, dan ketenangan jiwa',
      'Mempercepat laju kendaraan bermotor',
      'Menghasilkan tanaman buah manis di pekarangan',
      'Mengurangi jumlah sampah kaleng bekas'
    ],
    correctAnswer: 0,
    explanation: 'Manfaat melukis bagi diri anak adalah menumbuhkan daya imajinasi, melatih kepekaan estetika warna, dan menghadirkan ketenangan jiwa.',
    visualClue: {
      mindmapDiagram: {
        center: 'Seni Melukis',
        branches: [
          { title: 'Alat & Bahan', items: ['Kanvas', 'Cat air / akrilik', 'Kuas aneka ukuran', 'Palet'] },
          { title: 'Manfaat Diri', items: ['[ ? Kotak ini harus diisi ? ]'], isTarget: true },
          { title: 'Objek Karya', items: ['Pemandangan alam', 'Satwa & flora', 'Kehidupan desa'] }
        ]
      }
    }
  },
  {
    id: 49,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Kalimat Penjelas Paragraf',
    question: 'Perhatikan kalimat-kalimat berikut:\n(1) Berkebun sayur di pekarangan sekolah membawa banyak dampak positif bagi siswa.\n(2) Siswa belajar secara langsung tentang siklus fotosintesis tanaman.\n(3) Mereka juga membiasakan diri makan sayuran bergizi hasil panen sendiri.\n\nKalimat nomor (2) dan (3) berkedudukan sebagai...',
    options: ['Kalimat utama', 'Kalimat penjelas / pendukung', 'Kalimat tanya', 'Kalimat perintah'],
    correctAnswer: 1,
    explanation: 'Kalimat (2) dan (3) berfungsi menjelaskan dan memperinci gagasan umum yang telah dinyatakan pada kalimat nomor (1).'
  },
  {
    id: 50,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menyimpulkan Alur Cerita',
    question: 'Bacalah ringkasan cerita berikut:\n"Awalnya Riko merasa canggung memainkan biola karena jemarinya kaku dan nadanya sering meleset. Namun, ia tidak menyerah dan berlatih 30 menit setiap sore dengan tekun. Enam bulan kemudian, Riko dipercaya menjadi pemain biola utama pada konser musik perpisahan sekolah."\n\nKesimpulan pesan moral yang terkandung dalam cerita hobi Riko adalah...',
    options: [
      'Alat musik biola hanya boleh dimainkan oleh orang yang berbakat sejak lahir.',
      'Ketekunan berlatih dan sikap pantang menyerah akan membuahkan keberhasilan manis.',
      'Siswa tidak perlu berlatih jika sudah memiliki alat musik yang mahal.',
      'Memainkan musik harus selalu dilakukan secara tergesa-gesa.'
    ],
    correctAnswer: 1,
    explanation: 'Pesan utama cerita menegaskan bahwa rasa canggung dapat diatasi dengan ketekunan berlatih setiap hari tanpa putus asa.'
  },
  {
    id: 51,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Mengurutkan Cerita Pengalaman',
    question: 'Urutkan kejadian berikut agar menjadi cerita pengalaman yang utuh!\n(1) Ibu mengagumi syal buatanku dan mengenakannya saat pergi bekerja.\n(2) Aku membeli gulungan benang wol merah hati dan jarum hakpen nomor 4.\n(3) Dengan sabar aku merajut baris demi baris mengikuti petunjuk buku prakarya.\n(4) Aku merasa bangga karena hasil karyaku dapat menghangatkan tubuh ibu.',
    options: ['(2) - (3) - (1) - (4)', '(1) - (2) - (3) - (4)', '(3) - (2) - (1) - (4)', '(2) - (1) - (4) - (3)'],
    correctAnswer: 0,
    explanation: 'Urutan pengalaman yang logis: membeli bahan (2) -> merajut dengan sabar (3) -> dipakai ibu (1) -> rasa bangga (4).'
  },
  {
    id: 52,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Struktur Akhir Cerita',
    question: 'Bagian akhir sebuah cerita narasi yang menceritakan kondisi akhir tokoh, kepuasan atas hasil karyanya, serta pesan moral yang dapat dipetik oleh pembaca dinamakan...',
    options: ['Orientasi', 'Komplikasi', 'Resolusi / Koda', 'Sinopsis singkat'],
    correctAnswer: 2,
    explanation: 'Resolusi atau koda merupakan bagian penutup cerita yang berisi penyelesaian masalah dan amanat moral.'
  },
  {
    id: 53,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menyusun Paragraf Runtut',
    question: 'Urutkan kalimat-kalimat berikut agar membentuk satu paragraf yang padu!\n(1) Hasil potretannya lalu dicetak dan dipajang di majalah dinding sekolah.\n(2) Setiap akhir pekan, Desta berkeliling desa membawa kamera sakunya.\n(3) Ia memotret aneka burung bangau yang mencari makan di sawah terasering.\n(4) Teman-teman di sekolah sangat menyukai sudut pengambilan gambarnya.',
    options: ['(2) - (3) - (1) - (4)', '(3) - (2) - (1) - (4)', '(1) - (2) - (3) - (4)', '(2) - (1) - (3) - (4)'],
    correctAnswer: 0,
    explanation: 'Alur kronologis yang tepat: berkeliling desa (2) -> memotret burung (3) -> mencetak foto untuk mading (1) -> apresiasi teman-teman (4).'
  },
  {
    id: 54,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Melengkapi Peta Pikiran',
    question: 'Perhatikan infografik peta pikiran di atas. Pada topik sentral "Daur Ulang Sampah Kreatif", rincian manakah yang PALING TEPAT untuk mengisi cabang Contoh Karya Baru yang bertanda tanya?',
    options: [
      'Tempat pensil botol plastik, vas bunga kaleng bekas, dan tas belanja perca',
      'Kompor gas, tabung elpiji, dan wajan penggorengan',
      'Laptop jinjing, tetikus optik, dan papan ketik komputer',
      'Buku ensiklopedia tebal dan kamus besar bahasa Indonesia'
    ],
    correctAnswer: 0,
    explanation: 'Contoh karya daur ulang meliputi tempat pensil dari botol plastik, vas bunga dari kaleng bekas, dan tas belanja dari kain perca.',
    visualClue: {
      mindmapDiagram: {
        center: 'Daur Ulang Kreatif',
        branches: [
          { title: 'Bahan Bekas', items: ['Botol plastik', 'Kardus biskuit', 'Kain perca sisa jahit'] },
          { title: 'Contoh Karya Baru', items: ['[ ? Kotak ini harus diisi ? ]'], isTarget: true },
          { title: 'Manfaat', items: ['Kurangi sampah', 'Hemat uang jajan', 'Asah daya cipta'] }
        ]
      }
    }
  },
  {
    id: 55,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Konjungsi Urutan Waktu',
    question: 'Perhatikan kalimat berikut:\n"Mula-mula Beni menyiapkan bibit cabai, ... ia menggali lubang kecil di dalam pot, ... akhirnya ia menyiram tanah dengan air secukupnya."\n\nKata hubung (konjungsi) antarkalimat yang paling tepat untuk mengisi bagian rumpang tersebut adalah...',
    options: [
      'lalu - kemudian',
      'tetapi - melainkan',
      'karena - sehingga',
      'walaupun - meskipun'
    ],
    correctAnswer: 0,
    explanation: 'Konjungsi temporal (waktu) seperti "mula-mula", "lalu", "kemudian", dan "akhirnya" digunakan untuk menyusun urutan peristiwa yang kronologis.'
  },
  {
    id: 56,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menemukan Gagasan Pokok',
    question: 'Bacalah teks berikut:\n"Origami bukan sekadar hobi melipat kertas biasa. Kegiatan seni asal Jepang ini melatih ketelitian jemari dan pemahaman bentuk bangun ruang. Saat melipat kertas secara simetris, siswa belajar konsep segitiga, persegi, dan diagonal secara menyenangkan."\n\nGagasan pokok paragraf tersebut adalah...',
    options: [
      'Origami melatih ketelitian jemari dan pemahaman konsep bangun ruang.',
      'Seni origami hanya disukai oleh anak-anak di Jepang.',
      'Kertas yang digunakan untuk origami harus berbentuk lingkaran.',
      'Semua kertas lipat pasti menghasilkan karya burung bangau.'
    ],
    correctAnswer: 0,
    explanation: 'Inti gagasan pokok paragraf menjelaskan nilai manfaat origami dalam melatih ketelitian jemari dan pemahaman bentuk bangun ruang.'
  },
  {
    id: 57,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Mengurutkan Teks Prosedur',
    question: 'Urutkan tahapan menyiram tanaman cabai berikut secara benar!\n(1) Arahkan moncong gembor ke dekat pangkal akar tanaman.\n(2) Isi gembor penyiram dengan air bersih hingga tiga perempat penuh.\n(3) Siramkan air perlahan hingga tanah tampak lembap dan tidak tergenang.\n(4) Bawa gembor ke pekarangan tempat deretan pot cabai ditata.',
    options: ['(2) - (4) - (1) - (3)', '(4) - (2) - (1) - (3)', '(1) - (2) - (4) - (3)', '(2) - (1) - (3) - (4)'],
    correctAnswer: 0,
    explanation: 'Urutan yang benar: mengisi gembor (2) -> membawa ke pekarangan (4) -> mengarahkan ke akar (1) -> menyiramkan air secara perlahan (3).'
  },
  {
    id: 58,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Kesesuaian Judul Cerita',
    question: 'Jika sebuah cerita mengisahkan seorang anak bernama Lani yang berhasil mengumpulkan botol bekas di sekitar sekolahnya, mencucinya, mengecatnya dengan motif batik, lalu menjualnya saat bazar sekolah hingga memperoleh uang kas kelas, judul cerita manakah yang PALING SESUAI dan MENARIK?',
    options: [
      'Kreasi Botol Batik Lani Sang Detektif Sampah',
      'Malam Minggu yang Menakutkan di Gudang Tua',
      'Petualangan Mendaki Gunung Bersama Ayah',
      'Cara Memasak Sup Sayur Bening'
    ],
    correctAnswer: 0,
    explanation: 'Judul "Kreasi Botol Batik Lani Sang Detektif Sampah" sangat sesuai dengan tema mendaur ulang botol bekas menjadi karya bernilai jual.'
  },
  {
    id: 59,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Memperbaiki Kalimat Sumbang',
    question: 'Bacalah paragraf berikut:\n"(1) Gita sangat gemar bermain biola sejak duduk di kelas tiga SD. (2) Setiap sore ia meluangkan waktu untuk membaca partitur lagu daerah. (3) Harga beras di pasar tradisional sedang mengalami penurunan. (4) Berkat latihannya, ia berhasil meraih juara pertama festival musik anak."\n\nKalimat nomor berapakah yang TIDAK PADU (sumbang) dan harus dikeluarkan dari paragraf?',
    options: ['Nomor (1)', 'Nomor (2)', 'Nomor (3)', 'Nomor (4)'],
    correctAnswer: 2,
    explanation: 'Kalimat nomor (3) tentang harga beras di pasar sama sekali tidak berkaitan dengan topik kegemaran bermain biola dan prestasi musik Gita.'
  },
  {
    id: 60,
    sectionId: 'section3',
    sectionTitle: 'Bagian 3: Susun Cerita & Peta Pikiran',
    topicTag: 'Menyimpulkan Nilai Hobi',
    question: 'Di akhir perjalanan pembelajaran Bab 3 "Ekspresi Diri Melalui Hobi", kesimpulan sikap manakah yang PALING BAIK dalam memandang sebuah hobi?',
    options: [
      'Hobi adalah sarana positif untuk mengekspresikan bakat diri, mengasah keterampilan, dan membangun karakter mandiri.',
      'Hobi hanya boleh ditekuni jika kita mempunyai modal uang yang sangat besar.',
      'Hobi lebih penting daripada kewajiban belajar sehingga tugas sekolah boleh diabaikan.',
      'Hobi sebaiknya disembunyikan dan tidak boleh dibagikan kepada orang lain.'
    ],
    correctAnswer: 0,
    explanation: 'Hobi merupakan wadah positif berekspresi, melatih kreativitas, dan membentuk kepribadian yang mandiri serta berwawasan luas.'
  }
];
