# CEO SUITE

Frontend untuk menemukan dan menjelajahi ruang kerja, ruang rapat, serta venue untuk kebutuhan bisnis. Aplikasi dibangun dengan React, TypeScript, dan Vite.

## Fitur

- **Beranda (`/`)** — Menampilkan hero dan konten ruang, rekomendasi, promosi, serta penawaran. Pengunjung yang belum login juga melihat kategori ruang, statistik, mitra, berita, FAQ, dan promosi aplikasi. Konten beranda memiliki tampilan loading dan pesan error.
- **Pencarian (`/search`)** — Menampilkan hasil ruang, kontrol pilihan kota, wilayah, jenis ruang, dan tanggal, peta, serta kategori ruang lainnya.
- **Detail produk (`/product/:id`)** — Menampilkan galeri foto, informasi dan harga ruang, add-on, kartu pemesanan, lokasi, dan ruang serupa. Pengguna dapat memilih tanggal dan waktu; produk yang tidak ditemukan mengarahkan kembali ke beranda.
- **Autentikasi** — Halaman masuk

## Teknologi

- React 19, TypeScript, dan Vite
- React Router untuk navigasi
- TanStack Query untuk server state
- Zustand untuk state UI lokal
- Tailwind CSS untuk styling
- Jest dan Testing Library untuk pengujian

## Menjalankan Project

Pastikan Node.js dan npm tersedia, lalu jalankan dari root repository:

```powershell
npm install
npm run dev
```

Vite akan menampilkan URL development server, biasanya `http://localhost:5173`.

Perintah lain yang tersedia:

```powershell
npm test -- --runInBand
npm run lint
npm run format:check
npm run build
```

`npm run build` menjalankan pemeriksaan TypeScript dan production build Vite.

## Gambaran Struktur Folder

```text
src/
├── features/
│   ├── landing/       # Beranda, pencarian, dan detail ruang
│   └── auth/          # Alur autentikasi
├── components/        # Komponen UI lintas fitur
├── hooks/             # Hooks lintas fitur
├── stores/            # State global/lintas fitur
├── routes/            # Konfigurasi route aplikasi
├── layout/            # Layout aplikasi
├── utils/             # Utilitas bersama
├── pages/             # Halaman umum aplikasi
├── App.tsx
└── main.tsx
```

Fitur menyimpan halaman dan komponen presentasi di `presentation/`; pembagian layer lain dapat berbeda pada fitur yang sudah ada. Contoh struktur yang disarankan dan aturan dependensinya dijelaskan lebih lengkap di:

1. [Struktur folder](./documentation/rules/domain-data-presentation/Rules/folder-struktur.md)
2. [Diagram Mermaid dan alur dependensi](./documentation/rules/domain-data-presentation/Rules/mermaid%20diagram.md)
3. [Aturan implementasi](./documentation/rules/domain-data-presentation/Rules/rules.md)

Catatan: lokasi dokumen yang tersedia saat ini adalah `documentation/rules/domain-data-presentation/Rules/`.
