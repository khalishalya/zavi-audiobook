# Zavi Grows - Audiobook & Aktivitas Interaktif 🎨🎧

**Zavi Grows** adalah aplikasi web interaktif yang dikembangkan khusus untuk mendampingi tumbuh kembang emosional anak. Platform ini menyajikan kisah edukatif **"Zavi Tak Takut Lagi"** dalam format audio interaktif, panduan *bonding* orang tua berbentuk flipbook digital, serta aneka aktivitas motorik halus anak yang siap diunduh.

## 🚀 Live Demo
* **Vercel Production**: [zavi-audiobook.vercel.app](https://zavi-audiobook.vercel.app)
* **GitHub Pages**: [khalishalya.github.io/zavi-audiobook/](https://khalishalya.github.io/zavi-audiobook/)

---

## ✨ Fitur Utama

### 1. 🎨 Identitas Visual Premium & Cozy
* **Warna Cerah & Harmonis**: Menggunakan aksen warna oranye khas Zavi yang dipadukan dengan latar belakang gradasi pastel hangat (peach/lavender).
* **Efek Glassmorphism**: Panel beranda, pemutar audio, dan jendela modal preview dilapisi efek kaca buram transparan (`backdrop-filter`) untuk tampilan premium.
* **Animasi Latar Belakang**: Dilengkapi gelembung gradasi mengambang (*animated floating bubbles*) yang bergerak lambat secara dinamis.

### 2. 🎧 Pemutar Audiobook Interaktif
* **Desain Eksklusif**: Tampilan kolom ganda di desktop yang menyandingkan sinopsis, rentang usia, dan fokus emosi anak di sebelah kiri pemutar.
* **Kontrol Musik Kustom**: Dilengkapi pengatur kecepatan audio (0.5x - 1.5x), tombol skip (+10s / -10s), tombol putar dengan efek ripple, serta indikator gelombang suara animasi.
* **Linimasa Presisi**: Slider waktu pemutaran yang disesuaikan secara dinamis mengikuti aksen oranye brand.
* **Mobile-Optimized**: Pada perangkat ponsel, posisi pemutar audio otomatis naik ke atas demi kemudahan interaksi, sementara teks sinopsis mengalir di bawahnya.

### 3. 📖 Flipbook Digital (Panduan Orang Tua)
* **Book Chat Plan**: Panduan halaman interaktif untuk membantu Ayah & Bunda mengajukan pertanyaan bermakna kepada anak selepas membaca buku.
* **Navigasi Buku Realistis**: Menggunakan visualisasi spine binder (garis tengah buku), bayangan lipatan kertas, dan efek membalik halaman (*page-flip*).
* **Navigasi Fleksibel**: Mendukung navigasi tombol, tombol panah keyboard (kiri/kanan), dan sapuan layar (*touch swipe*) untuk tablet & ponsel.

### 4. 🖍️ Galeri Lembar Aktivitas Edukatif
* **Kartu Aktivitas Modern**: Kartu lembar kegiatan anak (mewarnai, menebalkan garis, puzzle emosi) dengan ikon gradasi yang membesar dan memantul saat disentuh.
* **Jendela Modal PDF Preview**: Pratinjau berkas kegiatan beresolusi tinggi langsung di dalam web sebelum mengunduhnya.

---

## 🛠️ Tech Stack
* **Struktur**: HTML5 (Struktur Semantik & SEO)
* **Gaya & Animasi**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Transitions, Keyframe Animations)
* **Logika Aplikasi**: Vanilla JavaScript (ES6+, DOM Manipulation, Web Audio API, Touch Events)
* **Ikon**: FontAwesome v6.4.0
* **Tipografi**: Google Fonts (Fredoka & Quicksand)

---

## 💻 Cara Menjalankan Secara Lokal

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/khalishalya/zavi-audiobook.git
   ```
2. **Masuk ke folder proyek**:
   ```bash
   cd zavi-audiobook
   ```
3. **Buka file di Browser**:
   Cukup klik dua kali berkas `index.html` untuk menjalankannya secara lokal, atau gunakan ekstensi **Live Server** di VS Code untuk memuat perubahan secara instan.

---

## 📦 Alur Integrasi CI/CD & Deployment
* **GitHub Actions**: Alur kerja otomatis dikonfigurasi melalui berkas `.github/workflows/deploy.yml` untuk memublikasikan situs ke GitHub Pages secara otomatis setiap ada push ke cabang `main`.
* **Vercel Deploy**: Proyek telah terhubung dan didistribusikan ke jaringan produksi Vercel.

---

## 👥 Kontributor
* **[khalishalya](https://github.com/khalishalya)** - Product Owner & Developer
* **[ThoriqMustafid](https://github.com/ThoriqMustafid)** - Developer & UI Redesign
