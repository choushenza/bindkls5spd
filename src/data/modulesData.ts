import { ModuleInfo } from '../types';

export const MODULES_INFO: ModuleInfo[] = [
  {
    id: 'modul1',
    title: 'Modul 1: Detektif Hobi & Infografik',
    subtitle: 'Identifikasi Hobi, Manfaat & Membaca Data Visual',
    badge: 'Tantangan 20 Soal',
    iconName: 'Search',
    color: 'from-amber-500 to-orange-500',
    description: 'Bantu detektif cilik memecahkan misteri aneka hobi kreatif, manfaatnya bagi diri & lingkungan, serta analisis infografik dan diagram visual.',
    totalQuestions: 20
  },
  {
    id: 'modul2',
    title: 'Modul 2: Petualangan Awalan me-',
    subtitle: 'Kaidah Peluluhan KTSP & Variasi Bentuk Imbuhan',
    badge: 'Tantangan 20 Soal',
    iconName: 'Wand2',
    color: 'from-emerald-500 to-teal-600',
    description: 'Taklukkan kaidah pembentukan kata berimbuhan awalan me-: peluluhan K-T-S-P, kata satu suku kata (menge-), dan gugus konsonan unik.',
    totalQuestions: 20
  },
  {
    id: 'modul3',
    title: 'Modul 3: Susun Cerita & Peta Pikiran',
    subtitle: 'Struktur Alur, Kalimat Utama & Mind Map Hobi',
    badge: 'Tantangan 20 Soal',
    iconName: 'Compass',
    color: 'from-sky-500 to-indigo-600',
    description: 'Rangkai peristiwa acak menjadi cerita runtut (awal, tengah, akhir), temukan ide pokok paragraf, dan lengkapi cabang peta pikiran hobi.',
    totalQuestions: 20
  }
];

export interface HobbyEntry {
  name: string;
  category: string;
  tools: string[];
  benefits: string[];
  tagline: string;
  prefixExample: string;
}

export const HOBBY_DICTIONARY: HobbyEntry[] = [
  {
    name: 'Melukis & Menggambar',
    category: 'Seni Rupa & Visual',
    tools: ['Kanvas', 'Kuas berbagai ukuran', 'Cat air / akrilik', 'Palet warna', 'Pensil sketsa'],
    benefits: ['Mengembangkan imajinasi bebas', 'Relaksasi pikiran setelah belajar', 'Mengekspresikan emosi dalam warna'],
    tagline: 'Goreskan imajinasi di kanvas kehidupan!',
    prefixExample: 'me- + lukis = melukis (tanpa peluluhan L)'
  },
  {
    name: 'Merajut (Knitting & Crochet)',
    category: 'Kriya & Tekstil',
    tools: ['Jarum hakpen (kait)', 'Benang wol aneka warna', 'Gunting benang', 'Jarum tumpul tapestry'],
    benefits: ['Melatih kesabaran tingkat tinggi', 'Mengasah ketelitian motorik halus jemari', 'Menghasilkan pakaian/syal bermanfaat'],
    tagline: 'Jalinan benang cinta yang menghangatkan suasana.',
    prefixExample: 'me- + rajut = merajut (tanpa peluluhan R)'
  },
  {
    name: 'Berkebun & Menanam Sayur',
    category: 'Alam & Lingkungan',
    tools: ['Sekop kecil', 'Pot tanaman', 'Tanah humus subur', 'Gembor air penyiram', 'Benih tanaman'],
    benefits: ['Tubuh bugar bergerak di udara terbuka', 'Belajar tanggung jawab merawat makhluk hidup', 'Panen sayuran segar bebas pestisida'],
    tagline: 'Menghijaukan bumi mulai dari pekarangan rumah.',
    prefixExample: 'me- + tanam = menanam (T luluh menjadi men-)'
  },
  {
    name: 'Mendaur Ulang Barang Bekas',
    category: 'Kreativitas & Pelestarian Alam',
    tools: ['Botol plastik bekas', 'Kardus bekas', 'Lem tembak / kertas', 'Cat warna', 'Gunting'],
    benefits: ['Mengurangi pencemaran sampah lingkungan', 'Meningkatkan daya cipta barang berguna', 'Melatih kepedulian lingkungan (3R)'],
    tagline: 'Ubah sampah menjadi prakarya berkah!',
    prefixExample: 'me- + daur = mendaur (tanpa peluluhan D)'
  },
  {
    name: 'Fotografi Alam & Objek',
    category: 'Media & Seni Visual',
    tools: ['Kamera digital / ponsel', 'Lensa mikro/tele', 'Tripod penopang', 'Kain pembersih lensa'],
    benefits: ['Mengasah kejelian melihat detail keindahan sekitar', 'Belajar ilmu pencahayaan dan sudut pandang', 'Mengabadikan kenangan abadi'],
    tagline: 'Abadikan satu detik keajaiban untuk selamanya.',
    prefixExample: 'me- + potret = memotret (P luluh menjadi mem-)'
  },
  {
    name: 'Memasak & Meracik Kue',
    category: 'Kuliner & Keterampilan Hidup',
    tools: ['Celemek', 'Spatula', 'Mixer adonan', 'Timbangan digital', 'Loyang panggang'],
    benefits: ['Melatih kemandirian dan rasa tanggung jawab', 'Belajar takaran matematika praktis', 'Membawa kebahagiaan bagi keluarga'],
    tagline: 'Dari aroma dapur, tercipta kehangatan keluarga.',
    prefixExample: 'me- + masak = memasak (tanpa peluluhan M)'
  },
  {
    name: 'Robotik & Koding Dasar',
    category: 'Teknologi & Sains',
    tools: ['Papan mikrokontroler', 'Kabel jumper', 'Sensor jarak & cahaya', 'Motor servo', 'Laptop/komputer'],
    benefits: ['Melatih penalaran logis dan algoritma', 'Mengembangkan ketahanan dalam menyelesaikan masalah (debugging)', 'Mempersiapkan masa depan teknologi'],
    tagline: 'Rancang masa depan lewat baris logika!',
    prefixExample: 'me- + rancang = merancang (tanpa peluluhan R)'
  },
  {
    name: 'Membaca Cerita & Buku Sains',
    category: 'Literasi & Pengetahuan',
    tools: ['Buku cerita', 'Ensiklopedi', 'Pembatas buku', 'Buku catatan kosakata', 'Lampu baca'],
    benefits: ['Memperkaya kosakata dan bahasa baku', 'Membuka cakrawala dunia dari rumah', 'Meningkatkan daya konsentrasi otak'],
    tagline: 'Buku adalah jendela dunia yang tak pernah tertutup.',
    prefixExample: 'me- + baca = membaca (tanpa peluluhan B)'
  }
];
