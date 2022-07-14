import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import FB from '../public/images/Icons/facebook-brands.svg'
import Insta from '../public/images/Icons/instagram-brands.svg'
import Twitter from '../public/images/Icons/twitter-brands.svg'
import YT from '../public/images/Icons/youtube-brands.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 flex w-full flex-col">
      <div className="footer-cont">
        <ul className='flex list-none w-full justify-between p-0 footer-content'>
          <li className="footer-social-li">
            <Image alt="n4-logo" src={Logo} className="logo-sm" />
          </li>
          <li className="footer-email-li">
            <ul className="p-0">
              <li className="hidden">HOME</li>
              <li className="hidden">ABOUT</li>
              <li className="hidden">SERVICES</li>
              <li className="hidden">INSIGHTS</li>
              <li className="hidden">CONTACT</li>
            </ul>
            <form>
              <input 
                className="email-input" 
                type="email" 
                placeholder="Enter your email"
              />
              <input 
                className="email-sub" 
                type="submit" 
                value="Subscribe Me"
              />
            </form>
          </li>
        </ul>
      </div>
      <ul className="flex list-none justify-around flex-row w-full p-0 content-between social-links">
        <li><Image alt="fb-icon" src={FB} /></li>
        <li><Image alt="insta-icon" src={Insta} /></li>
        <li><Image alt="twitter-icon" src={Twitter} /></li>
        <li><Image alt="yt-icon" src={YT} /></li>
      </ul>
    </footer>
  )
}