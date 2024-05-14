import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full max-w-screen-xl mx-auto py-10">
			{/* Left side */}
			<div className="flex flex-col justify-center items-start space-y-5 px-5 md:px-0">
				<div className="text-5xl flex flex-col space-y-5 text-center md:text-left">
					<h1 className="font-bold">
						<span className="font-light">Merhaba, ben </span> Berkay Derin
					</h1>
					<h2 className="font-semibold">Yazılım Mühendisiyim</h2>
					<h3 className="font-semibold text-3xl">
						<span className="font-mono">İstanbul</span> / Türkiye
					</h3>
					<p className="text-base max-w-lg text-zinc-500">
						Öğrenmeye ve gelişmeye açık, yeni teknolojilere ve projelere ilgi duyan bir yazılım mühendisiyim.
					</p>
				</div>

				<div className="flex space-x-4">
					<a
						href="https://www.linkedin.com/in/berkayderin/"
						target="_blank"
						rel="noreferrer"
						className="border-2 border-black p-2 w-12 h-12 flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 rounded-md"
					>
						<FaLinkedinIn className="w-10 h-10" />
					</a>
					<a
						href="github.com/berkayderin"
						target="_blank"
						rel="noreferrer"
						className="border-2 border-black p-2 w-12 h-12 flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 rounded-md"
					>
						<IoLogoGithub className="w-10 h-10" />
					</a>
				</div>
			</div>

			{/* Right side */}
			<div className="mt-5 md:mt-0">
				<img src="/img/banner.png" alt="Berkay Derin" className="h-auto w-[400px] md:w-[575px]" />
			</div>
		</div>
	)
}

export default Hero
