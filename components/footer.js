import Link from 'next/link'
import Logo from '../public/images/Logo/Black/N4-Enterprises-Black.png'
import FB from '../public/images/Icons/facebook-brands.svg'
import Insta from '../public/images/Icons/instagram-brands.svg'
import Twitter from '../public/images/Icons/twitter-brands.svg'
import YT from '../public/images/Icons/youtube-brands.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer >
      <div className="footer-cont">
        <ul className='footer-content'>
          <li className="footer-social-li">
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
          </li>
          <li className="footer-email-li">
            <ul >
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
      <ul className="social-links">
        <li>
          <div className="h-20 w-auto relative icon-wrapper">
            <Image 
              alt="fb-icon" 
              src={FB} 
              layout="fill"
              objectFit="contain"
              style={"filter: invert(65%) sepia(0%) saturate(1351%) hue-rotate(205deg) brightness(87%) contrast(91%);"}
            />
          </div>
        </li>
        <li>
          <div className="h-20 w-auto relative icon-wrapper">
            <Image 
              alt="insta-icon" 
              src={Insta} 
              layout="fill"
              objectFit="contain"
            />
          </div>
        </li>
        <li>
          <div className="h-20 w-auto relative icon-wrapper">
            <Image 
              alt="twitter-icon" 
              src={Twitter} 
              layout="fill"
              objectFit="contain"
            />
          </div>
        </li>
        <li>
          <div className="h-20 w-auto relative icon-wrapper">
            <Image 
              alt="yt-icon" 
              src={YT} 
              layout="fill"
              objectFit="contain"
            />
          </div>
        </li>
      </ul>
    </footer>
  )
}