import Image from 'next/image'
import PortfolioCard from './utils/PortfolioCard'
import HeroCard from './utils/HeroCard'
import Skill from './utils/Skill'
import Skills from './components/Skill'
import Header from './components/Header'
import Project from './components/Project'
import Education from './components/Education'
import Experience from './components/Experience'
import BlogCard from './utils/BlogCard'
import Blog from './components/Blog'
import Bulb from './components/Bulb'
import ContactFrom from './components/ContactFrom'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Skills />
      <Project />
      <Bulb />
      <Education />
      <Experience />
      <Blog />
      <ContactFrom />
    </div>
  )
}
