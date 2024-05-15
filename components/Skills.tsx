import { DiBootstrap, DiMongodb, DiMysql } from 'react-icons/di'
import { FaCss3, FaHtml5, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJavascript, SiTypescript } from 'react-icons/si'

import { GrGraphQl } from 'react-icons/gr'
import { IoLogoFirebase } from 'react-icons/io5'

const Skills = () => {
	return (
		<section className="flex flex-col justify-center items-center py-10 md:py-20">
			<h2 className="text-4xl font-bold text-gray-800">Yeteneklerim</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-10 px-4">
				{[
					{ icon: <FaHtml5 className="w-14 h-14" />, name: 'HTML5' },
					{ icon: <FaCss3 className="w-14 h-14" />, name: 'CSS3' },
					{ icon: <RiTailwindCssFill className="w-14 h-14" />, name: 'Tailwind CSS' },
					{ icon: <DiBootstrap className="w-14 h-14" />, name: 'Bootstrap' },
					{ icon: <SiJavascript className="w-14 h-14" />, name: 'JavaScript' },
					{ icon: <SiTypescript className="w-14 h-14" />, name: 'TypeScript' },
					{ icon: <FaReact className="w-14 h-14" />, name: 'React' },
					{ icon: <RiNextjsFill className="w-14 h-14" />, name: 'Next.js' },
					{ icon: <SiExpress className="w-14 h-14" />, name: 'Express.js' },
					{ icon: <FaNodeJs className="w-14 h-14" />, name: 'Node.js' },
					{ icon: <GrGraphQl className="w-14 h-14" />, name: 'GraphQL' },
					{ icon: <IoLogoFirebase className="w-14 h-14" />, name: 'Firebase' },
					{ icon: <DiMongodb className="w-14 h-14" />, name: 'MongoDB' },
					{ icon: <DiMysql className="w-14 h-14" />, name: 'MySQL' }
				].map((skill) => (
					<div
						key={skill.name}
						className="flex flex-col items-center justify-center border-2 border-black h-44 w-44 rounded-md hover:bg-black hover:text-white transition-all duration-300"
					>
						{skill.icon}
						<h3 className="text-base md:text-xl font-bold mt-5">{skill.name}</h3>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
