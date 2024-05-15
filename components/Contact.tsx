'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { FaLinkedinIn } from 'react-icons/fa'
import { FormValues } from '@/type/formTypes'
import { IoLogoGithub } from 'react-icons/io5'
import { sendToast } from '@/utils/sendToast'

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		if (response.ok) {
			sendToast('Mesajınız başarıyla gönderildi.')
		} else {
			sendToast('Bir hata oluştu. Lütfen tekrar deneyin.', false)
		}
	}

	return (
		<section className="flex flex-col md:flex-row justify-center items-center text-black mt-10 gap-x-60">
			{/* contact info */}
			<div className="flex flex-col justify-center items-center md:items-start space-y-5 px-4 md:px-0">
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
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-start space-y-5 mt-10 px-4 w-[24rem] md:w-[30rem] md:px-0"
				>
					<input
						type="text"
						placeholder="Adınız"
						{...register('name', { required: 'Adınız zorunludur.' })}
						className="border border-gray-300 p-3 rounded-md w-full"
					/>
					{errors.name && <span className="text-red-500">{errors.name.message}</span>}
					<input
						type="email"
						placeholder="E-posta Adresiniz"
						{...register('email', {
							required: 'E-posta adresi zorunludur.',
							pattern: { value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, message: 'Geçerli bir e-posta adresi girin.' }
						})}
						className="border border-gray-300 p-3 rounded-md w-full"
					/>
					{errors.email && <span className="text-red-500">{errors.email.message}</span>}
					<textarea
						placeholder="Mesajınız"
						{...register('message', { required: 'Mesajınız zorunludur.' })}
						className="border border-gray-300 p-3 rounded-md w-full"
					/>
					{errors.message && <span className="text-red-500">{errors.message.message}</span>}
					<button type="submit" className="bg-black text-white p-3 rounded-md w-full md:w-[10rem]">
						Gönder
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
