import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
	return (
		<section className="bg-black text-white mt-10">
			<h2 className="text-center text-4xl font-bold pt-0 md:pt-10">Projelerim</h2>
			<div className="flex flex-wrap flex-col justify-center items-center">
				{/* project card */}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<img src="/img/project.png" alt="" className="w-full md:w-[530px] h-auto md:h-[398px]" />
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">01</h3>
						<h3 className="text-2xl font-bold">CashMate App</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Cashmate, kullanıcıların finansal işlemlerini yönetmelerine yardımcı olan bir web tabanlı uygulamadır.
							Node.js ve Express.js altyapısı kullanılarak geliştirilmiş olup, EJS templating engine ile dinamik içerik
							sunumu sağlar. Google OAuth ile güvenli kullanıcı doğrulaması, MongoDB ile veri depolama özelliklerine
							sahiptir.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://cashmate-ran2.onrender.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
