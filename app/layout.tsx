import './globals.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

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
			<body className={sora.className}>{children}</body>
		</html>
	)
}
