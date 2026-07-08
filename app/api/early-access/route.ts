import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const DATA_DIR = path.join(process.cwd(), 'data')
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.txt')

interface SubmissionData {
  fullName: string
  businessName: string
  businessType: string
  location: string
  email: string
  phone: string
  deviceId: string
  ip: string
  timestamp: string
}

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true })
  }
  if (!existsSync(SUBMISSIONS_FILE)) {
    await writeFile(SUBMISSIONS_FILE, '', 'utf-8')
  }
}

async function getSubmissions(): Promise<SubmissionData[]> {
  await ensureDataDir()
  const content = await readFile(SUBMISSIONS_FILE, 'utf-8')
  if (!content.trim()) return []
  
  return content
    .split('\n')
    .filter(line => line.trim())
    .map(line => JSON.parse(line))
}

async function addSubmission(data: SubmissionData) {
  await ensureDataDir()
  const line = JSON.stringify(data) + '\n'
  await writeFile(SUBMISSIONS_FILE, line, { flag: 'a' })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check existing submissions
    const submissions = await getSubmissions()
    
    // Check if IP already submitted
    const ipExists = submissions.some(s => s.ip === ip)
    if (ipExists) {
      return NextResponse.json(
        { error: 'IP address sudah pernah submit!' },
        { status: 400 }
      )
    }
    
    // Check if email already submitted
    const emailExists = submissions.some(s => s.email === body.email)
    if (emailExists) {
      return NextResponse.json(
        { error: 'Email ini sudah pernah terdaftar!' },
        { status: 400 }
      )
    }
    
    // Check if device ID already submitted
    const deviceExists = submissions.some(s => s.deviceId === body.deviceId)
    if (deviceExists) {
      return NextResponse.json(
        { error: 'Device ini sudah pernah submit!' },
        { status: 400 }
      )
    }
    
    // Save submission
    const submissionData: SubmissionData = {
      ...body,
      ip,
      timestamp: new Date().toISOString(),
    }
    
    await addSubmission(submissionData)
    
    // Send email notification using Resend
    try {
      const adminEmail = await resend.emails.send({
        from: 'AKURA Early Access <contact@akura.my.id>',
        to: ['pakeakura@gmail.com'],
        subject: `AKURA Early Access - ${body.businessName}`,
        html: `
          <h2>Pendaftaran Early Access Baru</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nama Lengkap</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nama Bisnis</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Jenis Bisnis</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.businessType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Lokasi</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.location}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone (WhatsApp)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.phone || '-'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Device ID</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${body.deviceId}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>IP Address</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${ip}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Waktu Pendaftaran</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</td>
            </tr>
          </table>
        `,
      })

      console.log('Admin email sent:', adminEmail)

      // Send confirmation email to user
      const userEmail = await resend.emails.send({
        from: 'AKURA <contact@akura.my.id>',
        to: [body.email],
        subject: 'Selamat! Anda Terdaftar di AKURA Early Access',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Terima kasih telah bergabung, ${body.fullName}!</h2>
            <p>Anda telah berhasil terdaftar dalam daftar tunggu <strong>AKURA</strong>.</p>
            <p>Kami akan segera menghubungi Anda melalui email atau WhatsApp ketika AKURA siap untuk diluncurkan.</p>
            
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Detail Pendaftaran Anda:</h3>
              <p><strong>Nama Bisnis:</strong> ${body.businessName}</p>
              <p><strong>Jenis Bisnis:</strong> ${body.businessType}</p>
              <p><strong>Lokasi:</strong> ${body.location}</p>
            </div>

            <p>Sebagai early adopter, Anda akan mendapatkan:</p>
            <ul>
              <li>Akses prioritas saat peluncuran</li>
              <li>Gratis untuk periode tertentu</li>
              <li>Dukungan khusus dari tim kami</li>
            </ul>

            <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.</p>
            
            <p style="margin-top: 30px;">Salam,<br><strong>Tim AKURA</strong></p>
          </div>
        `,
      })

      console.log('User email sent:', userEmail)
    } catch (emailError) {
      console.error('Email error details:', emailError)
      // Continue even if email fails
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Submission successful' 
    })
    
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Gagal memproses submission' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const submissions = await getSubmissions()
    return NextResponse.json({ 
      count: submissions.length,
      submissions 
    })
  } catch (error) {
    console.error('Get submissions error:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data' },
      { status: 500 }
    )
  }
}
