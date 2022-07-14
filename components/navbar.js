import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="flex md:grid md:grid-cols-navbar bg-transparent justify-around items-center text-center relative w-full mb-8 mt-5 z-[9999]">
      <div className="h-20 w-auto relative">
        <a href="#top">
            <Image 
              alt="logo" 
              src={Logo} 
              layout="fill"
              objectFit="contain"
            />
        </a>
      </div>
      <input type="checkbox" id="nav-toggle" className="-top-9999px -left-9999px absolute nav-toggle"></input>
      <nav className="absolute text-right text-white pt-5 left-0 w-full origin-top top-full md:items-center md:relative md:text-right md:flex md:justify-end md:pr-5">
        <ul className="flex items-center text-right active">
          <li className="mb-0 ml-4">
            <Link href="/">HOME</Link>
          </li>
          <li className="mb-0 ml-4">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="mb-0 ml-4">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="mb-0 ml-4">
            <Link href="/insights">INSIGHTS</Link>
          </li>
          <li className="mb-0 ml-4">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="mb-0 ml-4">
            <button className="bg-blue-600 text-sm font-semibold text-center uppercase text-white">BOOK NOW</button>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="relative top-0 right-0 h-full items-center mr-2 nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}