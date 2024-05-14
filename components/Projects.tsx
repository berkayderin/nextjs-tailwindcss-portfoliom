import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const Projects = () => {
	return (
		<section className="bg-black text-white mt-10">
			<h2 className="text-center text-4xl font-bold pt-0 md:pt-10">Projelerim</h2>
			<div className="flex flex-wrap flex-col justify-center items-center">
				{/* project card 1*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
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
							<a
								href="https://github.com/berkayderin/Nodejs-Cashmate-App"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
				{/* project card 2*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">02</h3>
						<h3 className="text-2xl font-bold">FullStack Duyuru Projesi</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							FullStack Duyuru Projesi, kullanıcıların duyuru oluşturmasına ve diğer kullanıcıların bu duyuruları
							incelemesine olanak tanıyan bir web uygulamasıdır. Node.js ve Express.js altyapısı kullanılarak
							geliştirilmiş olup, EJS templating engine ile dinamik içerik sunumu sağlar. MongoDB ile veri depolama
							özelliklerine sahiptir. Jwt ile güvenli kullanıcı doğrulaması sağlar. MVC mimarisine uygun olarak
							geliştirilmiştir.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://iwebduyuru.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/FullStack-Duyuru-Projesi-Nodejs"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
				</div>
				{/* project card 3*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">03</h3>
						<h3 className="text-2xl font-bold">Nextjs Todo App</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Todo-App, kullanıcıların günlük görevlerini kolayca yönetmelerine olanak tanıyan bir web uygulamasıdır.
							Next.js kullanılarak geliştirilmiş olan bu uygulama, görev ekleme, düzenleme ve silme gibi temel işlevleri
							içerir. Firebase ve Axios kullanılarak backend entegrasyonu sağlanmıştır.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://todo-app-anytime.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/Nextjs-Todo-App"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
				{/* project card 4*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">04</h3>
						<h3 className="text-2xl font-bold">Nodejs Otel Rezervasyonu Api</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Bu proje, bir otel rezervasyon sisteminin backend kısmını oluşturmak için Node.js, Express.js ve MongoDB
							kullanılarak geliştirilmiştir. Sistem, kullanıcı kaydı, otel ve oda yönetimi gibi temel işlevleri
							gerçekleştirebilen RESTful APIlar sağlar. JWT ile güvenli kullanıcı doğrulaması sağlar. Bcryptjs ile şifre
							şifreleme işlemi gerçekleştirilmiştir. CORS politikaları ile güvenli veri paylaşımı sağlanmıştır. MVC
							mimarisine uygun olarak geliştirilmiştir.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://github.com/berkayderin/Hotel-Api-Nodejs"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
				</div>
				{/* project card 5*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">05</h3>
						<h3 className="text-2xl font-bold">Frontend Challenge</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Frontend öğrenirken kodladığım birçok küçük projem var. Bunlardan biri de bu Frontend Challenge
							projesidir. Bu projede Portfolyo, Nike, Anime, Hero Banner, Blockchain, Login page, Pokedex, Gym gibi
							birçok farklı tasarımı kodladım. Bu projeleri geliştirirken HTML, CSS, JavaScript gibi teknolojileri
							kullandım. Projeleri geliştirirken responsive tasarım, animasyonlar, hover efektleri gibi birçok farklı
							konuyu öğrendim.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://github.com/berkayderin/Nextjs-Todo-App"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
				{/* project card 6*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">06</h3>
						<h3 className="text-2xl font-bold">FullStack Kitap Yönetim Sistemi</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							GraphQL, Apollo Server, MongoDB, React ve Apollo Client kullanılarak geliştirilmiş bir kitap yönetim
							sistemidir. Sistem, kullanıcıların kitap eklemelerine, güncellemelerine, silmelerine ve kitapları
							listelemelerine olanak tanır. Aynı zamanda kullanıcı kaydı ve girişi işlevselliğini de barındırır.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://fullstack-graphql-react.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/Fullstack-Graphql-React"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
				</div>
				{/* project card 7*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">07</h3>
						<h3 className="text-2xl font-bold">FullStack Sohbet Uygulaması</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Bu proje, kullanıcıların anlık mesajlaşmalarını sağlayan bir web uygulamasıdır. Node.js, Express.js,
							Socket.io, Reactjs, Tailwindcss kullanılarak geliştirilmiştir. Kullanıcılar, sohbet odaları oluşturabilir,
							sohbet odalarına katılabilir ve anlık mesajlaşma yapabilir.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://fullstack-socket-chat.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/Fullstack-Socket-Chat"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
				{/* project card 8*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">08</h3>
						<h3 className="text-2xl font-bold">Nextjs Landing Page</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Nextjs ve tailwindcss kullanarak geliştirdiğim bir landing page projesidir. Responsive tasarım
							kodlanmıştır.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://nextjs-tailwindcss-landing-page.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/Nextjs-Tailwindcss-Landing-Page"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
				</div>
				{/* project card 9*/}
				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-1 w-full md:w-[75rem] py-5">
					<Image
						src="/img/project.png"
						alt=""
						className="w-full md:w-[530px] h-auto md:h-[398px]"
						width={530}
						height={398}
					/>
					<div className="flex flex-col justify-center items-start space-y-3 w-full px-5">
						<h3 className="text-4xl font-extrabold">09</h3>
						<h3 className="text-2xl font-bold">FullStack Nextjs Netflix App</h3>
						<p className="text-lg font-normal text-justify text-zinc-500">
							Nextjs 14, NextAuth, Prisma, Mongodb, Zustand, Swiper Slider, Tailwindcss kullanılarak geliştirilmiş bir
							Netflix Clone uygulamasıdır. Kullanıcılar, filmleri inceleyebilir, favori listelerine ekleyebilir ve
							filmleri izleyebilir. NextAuth ile güvenli kullanıcı doğrulaması sağlanmıştır. Prisma ORM ile veritabanı
							işlemleri gerçekleştirilmiştir. Zustand ile global state yönetimi sağlanmıştır. Swiper Slider ile slider
							özelliği eklenmiştir. Tailwindcss ile responsive tasarım kodlanmıştır.
						</p>
						<div className="flex flex-row justify-start items-center space-x-5">
							<a
								href="https://fullstack-nextjs-netflix-app.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FiExternalLink />
								<span>Projeyi Görüntüle</span>
							</a>
							<a
								href="https://github.com/berkayderin/Fullstack-Nextjs-Netflix-App"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row justify-center items-center space-x-2 bg-white text-black px-5 py-2 rounded-md transition-all hover:bg-gray-200"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
