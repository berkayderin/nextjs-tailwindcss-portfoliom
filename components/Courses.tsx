'use client'

import AOS from 'aos'
import { FaExclamationCircle } from 'react-icons/fa'
import { useEffect } from 'react'

const Courses = () => {
	useEffect(() => {
		AOS.init({ duration: 500 })
	}, [])

	const courseCategories: { [category: string]: string[] } = {
		'Yazılım Mühendisliği': [
			'Yazılım Proje Yönetimi',
			'Yazılım Tasarımı ve Mimarisi',
			'Yazılım Doğrulama ve Geçerleme'
		],
		'Bilgisayar Bilimleri': ['Bilgisayar Mimarisi', 'Nesneye Dayalı Programlama', 'Algoritmalar ve Tasarımı'],
		'Veri Bilimi ve Yapay Zeka': [
			'Veri Tabanı Yönetim Sistemleri',
			'Veri Yapıları ve Algoritmalar',
			'Yapay Zeka',
			'İleri Python Programlama',
			'Makine Öğrenmesi',
			'Sayısal Görüntü İşleme'
		],
		'Web ve Mobil Programlama': ['Web Tasarımı ve Programlama', 'İleri Web Uygulamaları', 'Mobil Programlama']
	}

	const currentCourses = [
		'Yazılım Doğrulama ve Geçerleme',
		'Algoritmalar ve Tasarımı',
		'Makine Öğrenmesi',
		'Sayısal Görüntü İşleme'
	]

	return (
		<section className="flex flex-col justify-center items-center py-10 md:py-20">
			<h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
				Aldığım Dersler
			</h2>
			<div className="mt-10 px-4 w-full flex flex-wrap justify-center">
				{Object.keys(courseCategories).map((category, catIndex) => (
					<div key={category} className="w-full md:w-1/5 p-4">
						<div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
							<h3 className="text-xl font-semibold text-gray-700 mb-4 text-center" data-aos="fade-up">
								{category}
							</h3>
							<ul className="flex flex-col items-start">
								{courseCategories[category].map((course, index) => (
									<li
										key={course}
										className={`text-base md:text-lg font-medium my-2 text-start flex items-center ${
											currentCourses.includes(course) ? 'text-red-500 font-bold' : 'text-gray-700'
										}`}
										data-aos="fade-up"
										data-aos-delay={(catIndex + index) * 50}
									>
										{course}
										{currentCourses.includes(course) && (
											<span className="ml-2 relative group">
												<FaExclamationCircle className="w-4 h-4 text-red-500" />
												<span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
													Şuan bu dersi alıyorum
												</span>
											</span>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Courses
