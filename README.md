# Zavi Grows - Audiobook & Aktivitas Interaktif

Aplikasi web interaktif pendamping tumbuh kembang emosional anak. Berisi pemutar audiobook "Zavi Tak Takut Lagi", panduan orang tua (digital flipbook), dan lembar kegiatan anak yang bisa diunduh (PDF).

## 🚀 Live Demo
- **Vercel**: [zavi-audiobook.vercel.app](https://zavi-audiobook.vercel.app)
- **GitHub Pages**: [khalishalya.github.io/zavi-audiobook/](https://khalishalya.github.io/zavi-audiobook/)

## Fitur Utama
- **Audiobook Player**: Dilengkapi fitur pengatur kecepatan pemutaran (playback speed), tombol skip 10 detik, visualisasi gelombang suara, dan layout responsif otomatis (pemutar berpindah ke atas di layar mobile).
- **Digital Flipbook**: Buku panduan orang tua dengan efek membalik halaman (*page-flip*), spine buku realistis, serta mendukung navigasi keyboard (panah kiri/kanan) dan usapan layar (*touch swipe*).
- **Lembar Aktivitas**: Galeri download PDF kegiatan anak (mewarnai, menebalkan garis, puzzle perasaan) lengkap dengan modal preview PDF langsung di dalam web.
- **Interface Ramah Anak**: UI modern dengan tema warna oranye khas Zavi, tipografi Fredoka & Quicksand, efek glassmorphism transparan, dan latar belakang gelembung mengambang yang dinamis.

## Tech Stack
- HTML5
- Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, & Keyframe Animations)
- Vanilla JavaScript (ES6+, DOM Manipulation, Web Audio API)
- FontAwesome v6.4.0 (Icons)

## Cara Menjalankan Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/khalishalya/zavi-audiobook.git
   ```
2. Jalankan berkas `index.html` langsung di peramban (browser), atau gunakan ekstensi **Live Server** di VS Code.

## Deployment & CI/CD
- **GitHub Pages**: Deploy otomatis terkonfigurasi menggunakan GitHub Actions (`.github/workflows/deploy.yml`) setiap kali melakukan push ke cabang `main`.
- **Vercel**: Deploy produksi dikelola menggunakan Vercel CLI.

## Kontributor
- [khalishalya](https://github.com/khalishalya)
- [ThoriqMustafid](https://github.com/ThoriqMustafid)
