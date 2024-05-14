import React from 'react'

const Footer = () => {
	// güncel yıl
	const year = new Date().getFullYear()

	return (
		<footer className="flex flex-row flex-wrap justify-center items-center py-5 mt-10 text-sm text-black font-mono">
			<p>© {year} Tüm hakları saklıdır.</p>
			<p className="ml-2">
				Made with ❤️ &nbsp;
				<a
					href="https://www.linkedin.com/in/berkayderin/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-black hover:text-gray-500"
				>
					Berkay Derin
				</a>
			</p>
		</footer>
	)
}

export default Footer
