import { Link } from 'react-router-dom'

import { Content } from '../../Utils/Content'
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
               <span>{Content.footer.title}</span>
               <Link className='clr-primary'>{Content.nav.termsUse}</Link>
               <span>{Content.footer.sub}</span>
               <Link className='clr-primary'>{Content.nav.privacyPolicy}</Link>
            </p>
            <div className='footer__media'>
               <Twitter />
               <Facebook />
               <Google />
            </div>
         </section>
         <section className='footer__nav'>
            <NavTitle label={Content.nav.product} />
            <div className='footer__link'>
               <Nav label={Content.nav.feature} />
               <Nav label={Content.nav.pricing} />
               <Nav label={Content.nav.tour} />
            </div>
         </section>
         <section className='footer__nav'>
            <NavTitle label={Content.nav.work} />
            <div className='footer__link'>
               <Nav label={Content.nav.portfolio} />
               <Nav label={Content.nav.latestWork} />
               <Nav label={Content.nav.brands} />
            </div>
         </section>

         <section className='footer__nav'>
            <NavTitle label={Content.nav.stuff} />
            <div className='footer__link'>
               <Nav label={Content.nav.privacy} />
               <Nav label={Content.nav.support} />
               <Nav label={Content.nav.helpDesk} />
               <Nav label={Content.nav.faq} />
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
