import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <a href="#top">
          <Image alt="logo" src={Logo} className="logo-sm" />
        </a>
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav>
        <ul className="active">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/services">SERVICES</Link>
          </li>
          <li>
            <Link href="/insights">INSIGHTS</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li>
            <button>BOOK NOW</button>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  )
}