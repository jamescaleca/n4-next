import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import FB from '../public/images/Icons/facebook-brands.svg'
import Insta from '../public/images/Icons/instagram-brands.svg'
import Twitter from '../public/images/Icons/twitter-brands.svg'
import YT from '../public/images/Icons/youtube-brands.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-cont">
        <ul className='footer-content'>
          <li className="footer-social-li">
            <Image alt="n4-logo" src={Logo} className="logo-sm" />
          </li>
          <li className="footer-email-li">
            <ul className="footer-nav">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>INSIGHTS</li>
              <li>CONTACT</li>
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
      <ul className="social-links">
        <li><Image alt="fb-icon" src={FB} /></li>
        <li><Image alt="insta-icon" src={Insta} /></li>
        <li><Image alt="twitter-icon" src={Twitter} /></li>
        <li><Image alt="yt-icon" src={YT} /></li>
      </ul>
    </footer>
  )
}