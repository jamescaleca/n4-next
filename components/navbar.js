import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header >
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
      <nav>
        <ul >
          <li >
            <Link href="/" >HOME</Link>
          </li>
          <li >
            <Link href="/about" >ABOUT</Link>
          </li>
          <li >
            <Link href="/services" >SERVICES</Link>
          </li>
          <li >
            <Link href="/insights" >INSIGHTS</Link>
          </li>
          <li >
            <Link href="/contact" >CONTACT</Link>
          </li>
          <li >
            <button className="bg-blue-600 text-sm font-semibold text-center uppercase text-white">BOOK NOW</button>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="relative top-0 right-0 h-full items-center mr-2 md:hidden nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}