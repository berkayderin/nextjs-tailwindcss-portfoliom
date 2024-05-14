const About = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-10 space-y-10 md:space-y-0 md:flex-row md:space-x-10 md:w-[75rem] mx-auto">
			<img src="/img/about.png" alt="Berkay Derin" className="w-[300px] h-auto md:w-[525px] md:h-[572px]" />
			<div className="flex flex-col justify-center items-center md:items-start space-y-5 px-5 md:px-0">
				<h2 className="text-center md:text-start text-4xl font-bold text-gray-800">Hakkımda</h2>
				<p className="text-lg font-light text-zinc-500 text-justify">
					Merhaba, ben Berkay Derin. 2001 yılında Zonguldak'ta doğdum. Burdur Mehmet Akif Ersoy Üniversitesi Yazılım
					Mühendisliği 3. sınıf öğrencisiyim. Kendimi sürekli geliştirmeye ve yeni şeyler öğrenmeye açığım. Bu siteyi
					geliştirirken Next.js ve Tailwind CSS teknolojilerini kullandım.
				</p>
			</div>
		</div>
	)
}

export default About
