import './globals.css'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Berkay Derin | Portfolio'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<ToastContainer />
				{children}
			</body>
		</html>
	)
}
