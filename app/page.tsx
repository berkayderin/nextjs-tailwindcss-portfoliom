import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Skills />
			<Experience />
			<About />
			<Projects />
			<Courses />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	)
}
