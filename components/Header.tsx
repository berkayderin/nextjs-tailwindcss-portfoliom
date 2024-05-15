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
			<div
				className={`absolute top-16 left-0 w-full md:w-auto md:relative md:top-0  md:flex md:space-x-4 md:items-center md:justify-end ${
					isOpen ? 'block' : 'hidden'
				} md:flex bg-white md:bg-transparent md:flex-row md:flex-1 md:justify-center md:space-x-4 md:px-4 md:py-2 md:rounded-md`}
			>
				<a href="#" className="px-4 py-2 block text-slate-900 hover:text-slate-700">
					Hakkımda
				</a>
				<a href="#" className="px-4 py-2 block text-slate-900 hover:text-slate-700">
					Projeler
				</a>
				<a href="#" className="px-4 py-2 block text-slate-900 hover:text-slate-700">
					Blog
				</a>
				<a href="#" className="px-4 py-2 block text-slate-900 hover:text-slate-700">
					İletişim
				</a>
			</div>
			<button className="hidden md:block bg-slate-900 text-white px-4 py-2 rounded-md font-medium">
				Özgeçmiş
				<IoCodeDownloadOutline className="inline-block ml-2 w-6 h-6" />
			</button>
		</div>
	)
}

export default Header
