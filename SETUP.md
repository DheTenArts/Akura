# AKURA Early Access - Setup Guide

## Konfigurasi Email

Sistem early access menggunakan **Resend** untuk mengirim email.

### Setup Resend

1. Copy `.env.example` ke `.env.local`
2. Tambahkan API key Resend Anda:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

### Email Configuration

- **Pengirim (From)**: `contact@akura.my.id`
- **Penerima Notifikasi**: `pakeakura@gmail.com` (email admin menerima notifikasi setiap pendaftaran)
- **Penerima Konfirmasi**: Email user yang mendaftar

### Fitur Email

1. **Email Notifikasi Admin**
   - Dikirim ke: `pakeakura@gmail.com`
   - Berisi: Detail lengkap pendaftaran (nama, bisnis, email, phone, device ID, IP, timestamp)

2. **Email Konfirmasi User**
   - Dikirim ke: Email user yang mendaftar
   - Berisi: Ucapan terima kasih dan detail pendaftaran mereka

## Validasi Submission

Sistem memiliki 3 layer validasi untuk memastikan satu device/email hanya bisa submit sekali:

1. **IP Address** - Setiap IP hanya bisa submit sekali
2. **Email** - Setiap email hanya bisa terdaftar sekali
3. **Device ID** - Setiap device (browser) hanya bisa submit sekali

## Penyimpanan Data

Data submission disimpan di `data/submissions.txt` dalam format JSON lines (satu JSON per baris).

## Domain Setup

Untuk menggunakan email `contact@akura.my.id`, pastikan domain `akura.my.id` sudah dikonfigurasi di Resend:

1. Login ke [Resend Dashboard](https://resend.com/domains)
2. Tambahkan domain `akura.my.id`
3. Setup DNS records sesuai instruksi Resend
4. Verifikasi domain

## Troubleshooting Email Tidak Masuk

### 1. Cek Console/Terminal Log
Saat submit form, cek terminal yang menjalankan `npm run dev` untuk melihat:
- `Admin email sent: { id: '...' }` - Email admin berhasil
- `User email sent: { id: '...' }` - Email user berhasil
- `Email error details: ...` - Ada error saat kirim email

### 2. Domain Belum Terverifikasi
Jika error seperti: `Domain not verified` atau `Domain not found`
- Pastikan domain `akura.my.id` sudah ditambahkan di [Resend Dashboard](https://resend.com/domains)
- Verifikasi DNS records sudah benar
- Status domain harus "Verified" (hijau)

### 3. API Key Tidak Valid
Jika error: `Invalid API key` atau `Unauthorized`
- Cek `.env.local` ada dan berisi API key yang benar
- Restart development server setelah menambah/edit `.env.local`
- Verifikasi API key di [Resend API Keys](https://resend.com/api-keys)

### 4. Email Masuk ke Spam/Junk
- Cek folder Spam/Junk di Gmail
- Tandai sebagai "Not Spam" jika ada di sana
- Tambahkan `contact@akura.my.id` ke contacts

### 5. Rate Limit
Resend free tier memiliki limit pengiriman:
- Cek [Resend Dashboard](https://resend.com/overview) untuk usage
- Tunggu beberapa menit sebelum test lagi

### 6. Testing dengan Email Domain Lain
Untuk testing awal, bisa pakai domain Resend default:
```typescript
from: 'AKURA <onboarding@resend.dev>'
```

Setelah domain verified, ganti kembali ke:
```typescript
from: 'AKURA <contact@akura.my.id>'
```

## Testing

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## API Endpoints

- `POST /api/early-access` - Submit pendaftaran baru
- `GET /api/early-access` - Lihat semua pendaftaran (jumlah + data)
