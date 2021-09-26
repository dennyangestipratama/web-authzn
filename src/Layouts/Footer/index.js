import { Link } from 'react-router-dom'

import { ReactComponent as Twitter } from '@Icon/media-twitter.svg'
import { ReactComponent as Facebook } from '@Icon/media-facebook.svg'
import { ReactComponent as Google } from '@Icon/media-google.svg'
import { ReactComponent as Logo } from '@Icon/logo-white.svg'
import { ReactComponent as LogoFont } from '@Icon/logo-font-white.svg'

export default function Footer() {
   return (
      <footer className='bg-primaryDark'>
         <section>
            <div className='footer__logo alignCenter'>
               <Logo />
               <LogoFont />
            </div>
            <p className='text__paragraph clr-white'>
               <span>Be sure to take a look at our </span>
               <Link className='clr-primary'>Terms of Use</Link>
               <span> and </span>
               <Link className='clr-primary'>Privacy Policy</Link>
            </p>
            <div className='footer__media'>
               <Twitter />
               <Facebook />
               <Google />
            </div>
         </section>
         <section className='footer__nav'>
            <NavTitle label='Product' />
            <div className='footer__link'>
               <Nav label='Features' />
               <Nav label='Pricing' />
               <Nav label='Tour' />
            </div>
         </section>
         <section className='footer__nav'>
            <NavTitle label='Work' />
            <div className='footer__link'>
               <Nav label='Our Portfolio' />
               <Nav label='Lastest Work' />
               <Nav label='Brands' />
            </div>
         </section>

         <section className='footer__nav'>
            <NavTitle label='Stuff' />
            <div className='footer__link'>
               <Nav label='Privacy' />
               <Nav label='Support' />
               <Nav label='Help Desk' />
               <Nav label='FAQ' />
            </div>
         </section>
      </footer>
   )
}

const NavTitle = ({ label }) => {
   return <h5 className='text__article footer__nav__title clr-white'>{label}</h5>
}

const Nav = ({ to = '#', label, style }) => {
   return (
      <Link style={style} className='clr-white text__paragraph' to={to}>
         {label}
      </Link>
   )
}
