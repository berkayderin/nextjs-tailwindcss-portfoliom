'use client'

import { DiBootstrap, DiMongodb, DiMysql, DiPostgresql } from 'react-icons/di'
import { FaGitAlt, FaJava, FaNodeJs, FaReact, FaStar, FaStarHalfAlt, FaTrello } from 'react-icons/fa'
import { IoLogoCss3, IoLogoFirebase, IoLogoHtml5 } from 'react-icons/io5'
import { RiJavascriptFill, RiNextjsFill, RiNotionFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiCsharp, SiDotnet, SiExpress, SiPython } from 'react-icons/si'

import AOS from 'aos'
import { BiLogoTypescript } from 'react-icons/bi'
import { GrGraphQl } from 'react-icons/gr'
import { useEffect } from 'react'

const Skills = () => {
	useEffect(() => {
		AOS.init({ duration: 500 })
	}, [])

	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating)
		const halfStars = rating % 1 !== 0 ? 1 : 0
		const emptyStars = 5 - fullStars - halfStars

		return (
			<div className="flex">
				{Array(fullStars).fill(<FaStar className="text-yellow-500" />)}
				{Array(halfStars).fill(<FaStarHalfAlt className="text-yellow-500" />)}
				{Array(emptyStars).fill(<FaStar className="text-gray-300" />)}
			</div>
		)
	}

	const htmlCssSkills = [
		{
			icon: <IoLogoHtml5 className="w-14 h-14" />,
			name: 'HTML5',
			description: 'Web yapısını oluşturmak için kullanılır.',
			rating: 5
		},
		{
			icon: <IoLogoCss3 className="w-14 h-14" />,
			name: 'CSS3',
			description: 'Web sayfalarına stil vermek için kullanılır.',
			rating: 5
		},
		{
			icon: <RiTailwindCssFill className="w-14 h-14" />,
			name: 'Tailwind CSS',
			description: 'Yardımcı sınıflar ile hızlı stil oluşturma.',
			rating: 5
		},
		{
			icon: <DiBootstrap className="w-14 h-14" />,
			name: 'Bootstrap 5',
			description: 'Hazır bileşenler ile hızlı web sayfası oluşturma.',
			rating: 5
		}
	]

	const jsLibrariesFrameworks = [
		{
			icon: <RiJavascriptFill className="w-14 h-14" />,
			name: 'JavaScript',
			description: 'Web sayfalarına dinamik özellikler ekler.',
			rating: 4
		},
		{
			icon: <BiLogoTypescript className="w-14 h-14" />,
			name: 'TypeScript',
			description: 'JavaScript için gelişmiş bir programlama dili.',
			rating: 4
		},
		{
			icon: <FaReact className="w-14 h-14" />,
			name: 'React.js',
			description: 'Kullanıcı arayüzü oluşturmak için kullanılır.',
			rating: 4.5
		},
		{
			icon: <RiNextjsFill className="w-14 h-14" />,
			name: 'Next.js',
			description: 'React tabanlı bir framework.',
			rating: 4.5
		}
	]

	const backendTechnologies = [
		{
			icon: <SiExpress className="w-14 h-14" />,
			name: 'Express.js',
			description: 'Node.js için web uygulama frameworkü.',
			rating: 4
		},
		{ icon: <GrGraphQl className="w-14 h-14" />, name: 'GraphQL', description: 'API sorgulama dili.', rating: 3 },
		{
			icon: <IoLogoFirebase className="w-14 h-14" />,
			name: 'Firebase',
			description: 'Mobil ve web uygulamaları için backend hizmeti.',
			rating: 3.5
		},
		{
			icon: <SiPython className="w-14 h-14" />,
			name: 'Python',
			description: 'Veri analizi ve yapay zeka için kullanılır.',
			rating: 4
		},
		{
			icon: <FaJava className="w-14 h-14" />,
			name: 'Java',
			description: 'Mobil ve web uygulamaları için kullanılır.',
			rating: 3.5
		},
		{
			icon: <SiCsharp className="w-14 h-14" />,
			name: 'C#',
			description: 'Microsoft tarafından geliştirilen bir programlama dili.',
			rating: 3.5
		},
		{
			icon: <SiDotnet className="w-14 h-14" />,
			name: 'ASP.NET Core',
			description: 'C# tabanlı web uygulama frameworkü.',
			rating: 1,
			newBadge: true
		}
	]

	const databases = [
		{ icon: <DiMongodb className="w-14 h-14" />, name: 'MongoDB', description: 'NoSQL veritabanı.', rating: 4 },
		{ icon: <DiMysql className="w-14 h-14" />, name: 'MySQL', description: 'İlişkisel veritabanı.', rating: 4 },
		{
			icon: <DiPostgresql className="w-14 h-14" />,
			name: 'PostgreSQL',
			description: 'İlişkisel veritabanı.',
			rating: 1,
			newBadge: true
		}
	]

	const otherTools = [
		{ icon: <FaGitAlt className="w-14 h-14" />, name: 'Git', description: 'Versiyon kontrol sistemi.', rating: 4.5 },
		{
			icon: <FaTrello className="w-14 h-14" />,
			name: 'Trello',
			description: 'Proje yönetimi için kullanılan bir araç.',
			rating: 5
		},
		{
			icon: <RiNotionFill className="w-14 h-14" />,
			name: 'Notion',
			description: 'Kişisel ve iş grupları için bir organizasyon aracı.',
			rating: 5
		}
	]

	const renderSkills = (
		skills: { icon: JSX.Element; name: string; description: string; rating: number; newBadge?: boolean }[],
		delayStart = 0
	) =>
		skills.map((skill, index) => (
			<div
				key={skill.name}
				className="relative flex flex-col items-center justify-center border-2 border-black h-56 w-56 rounded-md hover:bg-black hover:text-white transition-all duration-300 p-4"
				data-aos="fade-up"
				data-aos-delay={delayStart + index * 20}
			>
				{skill.icon}
				<h3 className="text-base md:text-xl font-bold mt-5">{skill.name}</h3>
				<p className="text-sm text-center mt-2">{skill.description}</p>
				<div className="mt-2">{renderStars(skill.rating)}</div>
				{skill.newBadge && (
					<span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
						Öğreniyorum!
					</span>
				)}
			</div>
		))

	return (
		<section className="flex flex-col justify-center items-center py-10 md:py-20">
			<h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
				Yeteneklerim
			</h2>
			<div className="w-full flex flex-col items-center mt-10 px-4">
				<h3 className="text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up">
					HTML & CSS
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
					{renderSkills(htmlCssSkills)}
				</div>
			</div>
			<div className="w-full flex flex-col items-center mt-10 px-4">
				<h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center" data-aos="fade-up">
					JavaScript Kütüphaneleri ve Frameworkleri
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
					{renderSkills(jsLibrariesFrameworks)}
				</div>
			</div>
			<div className="w-full flex flex-col items-center mt-10 px-4">
				<h3 className="text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up">
					Backend Teknolojileri
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
					{renderSkills(backendTechnologies)}
				</div>
			</div>
			<div className="w-full flex flex-col items-center mt-10 px-4">
				<h3 className="text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up">
					Veritabanları
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
					{renderSkills(databases)}
				</div>
			</div>
			<div className="w-full flex flex-col items-center mt-10 px-4">
				<h3 className="text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up">
					Diğer Araçlar
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
					{renderSkills(otherTools)}
				</div>
			</div>
		</section>
	)
}

export default Skills
