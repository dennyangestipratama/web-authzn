import { Link } from 'react-router-dom'

import HeroIMG from '@Image/banner.png'

export default function Hero() {
   return (
      <section className='hero'>
         <div className='hero__content'>
            <h2 className='text__banner'>
               <span className='clr-darkPrimary'>Single-Sign-On</span>
               <span className='clr-primary'>Simplified.</span>
            </h2>
            <p className='clr-text'>
               We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!
            </p>
            <div className='hero__btn'>
               <button className='bg-primary clr-white btn__primary'>Watch Video</button>
               <Link to={'/signup'}>
                  <button className='bg-white clr-primary btn__outline--primary'>Contact Us</button>
               </Link>
            </div>
         </div>
         <div className='hero__image'>
            <img src={HeroIMG} alt='banner' />
         </div>
      </section>
   )
}
