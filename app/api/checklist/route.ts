import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, lang, site } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'AI for Legal Teams <onboarding@resend.dev>',
      to: 'marta@proceduresmatter.com',
      subject: `Checkliste angefordert (${site ?? 'aiforlegalteams'}): ${email}`,
      html: `
        <p><strong>Neue Checklist-Anfrage</strong></p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Sprache:</strong> ${lang === 'de' ? 'Deutsch' : 'English'}</p>
        <p><strong>Website:</strong> aiforlegalteams.com</p>
        <p style="margin-top:16px;color:#666;">Diese Person hat die AI Readiness Checkliste auf aiforlegalteams.com angefordert.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
