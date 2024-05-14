'use client'

import { IoCloseOutline, IoCodeDownloadOutline, IoMenuOutline } from 'react-icons/io5'

import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="flex justify-between items-center h-16 text-slate-900 px-4 font-semibold text-lg w-full max-w-screen-xl mx-auto">
			<div>Berkay Derin</div>
			<button className="md:hidden" onClick={toggleMenu}>
				{isOpen ? <IoCloseOutline className="w-6 h-6" /> : <IoMenuOutline className="w-6 h-6" />}
			</button>
			<div className={`md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
				<li className="md:mx-4 text-center">Hakkımda</li>
				<li className="md:mx-4 text-center">Yeteneklerim</li>
				<li className="md:mx-4 text-center">Projelerim</li>
				<li className="md:mx-4 text-center">İletişim</li>
			</div>
			<button className="hidden md:block bg-slate-900 text-white px-4 py-2 rounded-md font-medium">
				Özgeçmiş
				<IoCodeDownloadOutline className="inline-block ml-2 w-6 h-6" />
			</button>
		</div>
	)
}

export default Header
