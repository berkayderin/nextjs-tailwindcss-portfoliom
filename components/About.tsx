import Image from 'next/image'

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-10 space-y-10 md:space-y-0 md:flex-row md:space-x-10 md:w-[75rem] mx-auto">
			<Image
				src="/img/about.png"
				alt="Berkay Derin"
				className="w-[300px] h-auto md:w-[525px] md:h-[572px]"
				width={525}
				height={572}
			/>
			<div className="flex flex-col justify-center items-center md:items-start space-y-5 px-5 md:px-0">
				<h2 className="text-center md:text-start text-4xl font-bold text-gray-800">Hakkımda</h2>
				<p className="text-lg font-light text-zinc-500 text-justify">
					Node.js ve React.js başta olmak üzere modern web teknolojileri konusunda tutkulu ve deneyimli bir
					geliştiriciyim. Bionlukta freelancer olarak kazandığım Frontend ve Backend (Nodejs) tecrübesi ile karmaşık
					sorunları çözme yeteneğimi geliştirdim.
				</p>
				<p className="text-lg font-light text-zinc-500 text-justify">
					Yeni teknolojileri hızla öğrenme ve uygulama konusundaki hevesimle, staj yapmayı hedeflediğim şirketinizde hem
					mevcut becerilerimi geliştirmek hem de yenilikçi projelere katkıda bulunmak istiyorum. Katkı sağlayabileceğim
					projelerde yer almak için sabırsızlanıyorum
				</p>
			</div>
		</div>
	)
}

export default About
