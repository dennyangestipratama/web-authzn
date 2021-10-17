import { Link } from 'react-router-dom'

import { Content } from '../../Utils/Content'
import { LinkTo } from '../../Utils/Link'
import HeroIMG from '@Image/banner.png'

export default function Hero() {
   return (
      <section className='hero'>
         <div className='hero__content'>
            <h2 className='text__banner'>
               <span className='clr-darkPrimary'>{Content.hero.title}</span>
               <span className='clr-primary'>{Content.hero.sub}</span>
            </h2>
            <p className='clr-text'>{Content.hero.body}</p>
            <div className='hero__btn'>
               <button className='bg-primary clr-white btn__primary'>{Content.button.WATCH}</button>
               <Link to={LinkTo.CONTACT}>
                  <button className='bg-white clr-primary btn__outline--primary'>{Content.button.CONTACT}</button>
               </Link>
            </div>
         </div>
         <div className='hero__image'>
            <img src={HeroIMG} alt='banner' />
         </div>
      </section>
   )
}
