import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Content } from '../../Utils/Content'
import { LinkTo } from '../../Utils/Link'

import { ReactComponent as ArrowDown } from '@Icon/icon-arrow-down.svg'
import { ReactComponent as ArrowUp } from '@Icon/icon-arrow-down.svg'

export default function Contact() {
   const [isShow, setShow] = useState(false)
   return (
      <section className='signup'>
         <Link to={LinkTo.HOME}>
            <div className='signup__bg'></div>
         </Link>
         <form className='signup__form' method='post'>
            <div className='signup__top__body'>
               <div className='signup__input'>
                  <label>{Content.input.FIRST_NAME}</label>
                  <input type='text' name='name' placeholder={Content.placeholder.FIRST_NAME} />
               </div>
               <div className='signup__input signup__dropdown' onClick={() => setShow(!isShow)}>
                  <label>{Content.input.SERVICE}</label>
                  <div className={`flexBetween ${isShow ? 'border__primary' : ''}`}>
                     <div className='clr-primaryDark'>{Content.input.SAML}</div>
                     {isShow ? <ArrowUp /> : <ArrowDown />}
                  </div>
               </div>
            </div>
            <div className='signup__input'>
               <label>{Content.input.EMAIL}</label>
               <input type='email' name='email' placeholder={Content.placeholder.EMAIL} />
            </div>
            <div className='signup__input'>
               <label>{Content.input.MESSAGE}</label>
               <textarea name='message' cols='30' rows='3' placeholder={Content.placeholder.MESSAGE} />
            </div>
            <div className='signup__btn'>
               <Link to={LinkTo.HOME}>
                  <button type='button' className='btn btn__radius btn__outline--primary clr-primary'>
                     {Content.button.CANCEL}
                  </button>
               </Link>
               <Link to={LinkTo.HOME}>
                  <button type='submit' className='btn btn__radius btn__primary clr-white'>
                     {Content.button.SEND}
                  </button>
               </Link>
            </div>
         </form>
      </section>
   )
}
