import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '@Icon/logo.svg'
import { ReactComponent as LogoFont } from '@Icon/logo-font.svg'
import { ReactComponent as BarNav } from '@Icon/icon-bar-right.svg'

export default function Header() {
   return (
      <header className='header flexBetween'>
         <section className='header__logo alignCenter'>
            <Logo />
            <LogoFont />
         </section>
         <nav className='header__nav alignCenter'>
            <Nav label='How it Works' />
            <Nav label='Pricing' />
            <Nav label='About' />
         </nav>
         <nav className='header__auth alignCenter'>
            <Nav label='Login' />
            <NavButton label='Sign Up' to='/signup' />
         </nav>
         <nav className='header__auth__svg'>
            <Link to={'/signup'}>
               <BarNav />
            </Link>
         </nav>
      </header>
   )
}

const Nav = ({ to = '#', label, style }) => {
   return (
      <Link style={style} className='clr-primaryDark text__nav' to={to}>
         {label}
      </Link>
   )
}

const NavButton = ({ to = '#', label, style }) => {
   return (
      <Link style={style} className='clr-primaryDark text__nav nav__btn' to={to}>
         {label}
      </Link>
   )
}
