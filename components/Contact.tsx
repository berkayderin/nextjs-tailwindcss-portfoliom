import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'

const Contact = () => {
	return (
		<section className="flex flex-col md:flex-row justify-center items-center text-black mt-10 gap-x-60">
			{/* contact info */}
			<div className="">
				<h2 className="text-4xl font-bold mt-10 text-center md:text-left">Haydi İletişime Geçelim</h2>
				<p className="text-gray-500 mt-5 mb-5 text-center md:text-left">
					Benimle iletişime geçmek için aşağıdaki formu doldurabilir <br className="hidden md:block" /> ya da sosyal
					medya hesaplarımdan bana ulaşabilirsiniz.
				</p>
				<div className="flex justify-center md:justify-start space-x-3 mb-10">
					<a
						href="https://www.linkedin.com/in/berkayderin/"
						target="_blank"
						rel="noreferrer"
						className="border-2 border-black p-2 w-10 h-10 flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 rounded-md"
					>
						<FaLinkedinIn className="w-10 h-10" />
					</a>
					<a
						href="https://github.com/berkayderin"
						target="_blank"
						rel="noreferrer"
						className="border-2 border-black p-2 w-10 h-10 flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 rounded-md"
					>
						<IoLogoGithub className="w-10 h-10" />
					</a>
				</div>
			</div>
			{/* form */}
			<div className="flex flex-col justify-center items-center">
				<form className="flex flex-col justify-center items-start space-y-5 mt-10 px-4 md:w-[30rem] md:px-0">
					<input type="text" placeholder="Adınız" className="border border-gray-300 p-3 rounded-md w-full" />
					<input
						type="email"
						placeholder="E-posta Adresiniz"
						className="border border-gray-300 p-3 rounded-md w-full"
					/>
					<textarea placeholder="Mesajınız" className="border border-gray-300 p-3 rounded-md w-full" />
					<button type="submit" className="bg-black text-white p-3 rounded-md w-full md:w-[10rem]">
						Gönder
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
