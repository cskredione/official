# Kredione — Halaman Call Center & Panduan Pembatalan (SEO-ready)

Saya telah menyiapkan halaman statis (index.html) plus stylesheet, skrip, robots.txt, dan sitemap.xml dengan optimasi dasar SEO agar bisa lebih mudah tampil di Google. Berikut ringkasan yang saya kerjakan dan langkah selanjutnya untuk memastikan halaman terindeks dan optimal.

Apa yang sudah saya lakukan
- Semantik HTML, headings (H1, H2), dan atribut ARIA untuk aksesibilitas.
- Meta tags penting: title, description, canonical, viewport, robots.
- Open Graph & Twitter Card untuk preview sosial.
- JSON-LD terstruktur: Organization (ContactPoint), WebSite (SearchAction), FAQPage.
- robots.txt dan sitemap.xml disertakan.
- Gambar lazy-loaded dan alt text (pastikan ganti /assets/hero-illustration.webp dan /assets/og-image.jpg).
- Responsive CSS dan mobile-friendly layout.
- Form dengan validasi klien sederhana (mock endpoint).

Langkah yang saya rekomendasikan (apa yang perlu Anda lakukan sekarang)
1. Ganti placeholder domain
   - Ubah semua `https://www.example.com/` ke domain produksi Anda (mis. https://www.kredione.id).

2. Upload / Host
   - Host file ke server/hosting (Vercel, Netlify, GitHub Pages, atau server Anda).
   - Pastikan situs tersedia di HTTPS (sertifikat TLS).

3. Ganti aset & kontak resmi
   - Ganti logo, gambar OG, dan alamat email jika berbeda.
   - Pastikan nomor 087757644038 aktif dan dicantumkan sama di halaman.

4. Verifikasi & Submit ke Google
   - Daftarkan domain di Google Search Console.
   - Submit sitemap.xml (URL: https://your-domain/sitemap.xml).
   - Gunakan fitur "URL Inspection" → "Request Indexing" untuk halaman utama setelah terbit.

5. Validasi structured data & mobile
   - Gunakan Rich Results Test: https://search.google.com/test/rich-results
   - Gunakan Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

6. Performance & Crawlability
   - Aktifkan kompresi (gzip/brotli) di server.
   - Gunakan cache headers, minify CSS/JS, optimalkan gambar (WebP, ukuran w/ srcset).
   - Pertimbangkan menambahkan HTTP/2 atau HTTP/3 di hosting.

7. Optional (rekomendasi untuk peringkat lebih baik)
   - Tambahkan konten unik, panjang 700+ kata dengan kata kunci relevan (mis. "cara membatalkan pinjaman kredione") di halaman.
   - Tambahkan blog atau artikel penunjang untuk long-tail keywords.
   - Dapatkan back-link berkualitas dan daftar di Google My Business (jika bisnis memiliki lokasi fisik).
   - Implementasikan meta data OpenGraph yang akurat dan markup BreadcrumbList jika ada banyak halaman.

Validasi saya bisa bantu
- Saya dapat:
  - Mengganti `example.com` ke domain Anda dan menyiapkan repo Git (push ke GitHub).
  - Menambahkan serverless endpoint contoh untuk menyimpan form (Netlify Functions / Vercel Serverless / Express).
  - Membuat versi AMP atau structured long-form content untuk peringkat lebih baik.

Katakan langkah mana yang ingin Anda saya bantu selanjutnya (contoh: ganti domain + push ke GitHub Pages, atau buat endpoint form). Saya akan siapkan file/commit yang diperlukan.