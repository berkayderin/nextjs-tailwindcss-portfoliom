import { NextRequest, NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json()
		const { name, email, message } = body

		const yandexUser = process.env.YANDEX_USER
		const yandexPass = process.env.YANDEX_PASS

		if (!yandexUser || !yandexPass) {
			console.error('Yandex kullanıcı adı veya şifre tanımlı değil.')
			return NextResponse.json(
				{ success: false, message: 'Yandex kullanıcı adı veya şifre tanımlı değil.' },
				{ status: 500 }
			)
		}

		const transporter = nodemailer.createTransport({
			host: 'smtp.yandex.com',
			port: 465,
			secure: true,
			auth: {
				user: yandexUser,
				pass: yandexPass
			}
		})

		const mailOptions = {
			from: yandexUser,
			to: yandexUser,
			subject: `İletişim Formu: ${name}`,
			text: `Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
		}

		try {
			await transporter.sendMail(mailOptions)
			return NextResponse.json({ success: true }, { status: 200 })
		} catch (error) {
			console.error('Mail gönderilemedi: ', error)
			return NextResponse.json(
				{ success: false, message: 'Mail gönderilemedi. Lütfen tekrar deneyin.' },
				{ status: 500 }
			)
		}
	} catch (error) {
		console.error('Bir hata oluştu: ', error)
		return NextResponse.json({ success: false, message: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 })
	}
}
