import Illustration from '@Image/illustration.png'
import { Content } from '../../Utils/content'

export default function Step() {
   return (
      <section className='step'>
         <h3>
            <span className='clr-primaryDark'>{Content.step.title}</span>
            <span className='clr-primary'>{Content.number.one}</span>
            <span className='clr-primaryDark'>{Content.char.comma}</span>
            <span className='clr-orange'>{Content.number.two}</span>
            <span className='clr-primaryDark'>{Content.char.comma}</span>
            <span className='clr-red'>{Content.number.three}</span>
            <span className='clr-primaryDark'>{Content.char.dots}</span>
         </h3>
         <div className='step__information'>
            <div className='top__body_tag'>
               <div className='step__num_mobile'>{Content.number.one}</div>
               <div className='top__body__title'>{Content.number.firstStep}</div>
            </div>
            {/* SEPAREATE COMPONENT MOBILE VIIEW */}
            <div className='step__num blue'>{Content.number.one}</div>
            <div>
               <h5 className='clr-primaryDark'>{Content.number.firstStep}</h5>
               <p>{Content.step.firstStepContent}</p>
            </div>

            <div className='top__body_tag'>
               <div className='step__num_mobile'>{Content.number.two}</div>
               <div className='top__body__title'>{Content.number.secondStep}</div>
            </div>
            {/* SEPAREATE COMPONENT MOBILE VIIEW */}
            <div className='step__num orange'>{Content.number.two}</div>
            <div>
               <div>
                  <h5 className='clr-primaryDark'>{Content.number.secondStep}</h5>
                  <p>{Content.step.secondStepContent}</p>
               </div>
               <div className='flex illustration'>
                  <img src={Illustration} alt='illustration' />
                  <div className='illustration title'>{Content.step.illustrationTitle}</div>

                  <div>
                     <h5 className='clr-primaryDark'>{Content.step.illustrationTitle}</h5>
                     <p style={{ marginRight: '2rem' }}>{Content.step.illustrationContent}</p>
                  </div>
               </div>
            </div>

            <div className='top__body_tag'>
               <div className='step__num_mobile'>{Content.number.three}</div>
               <div className='top__body__title'>{Content.number.thirdStep}</div>
            </div>
            {/* SEPAREATE COMPONENT MOBILE VIIEW */}
            <div className='step__num red'>{Content.number.three}</div>
            <div>
               <h5 className='clr-primaryDark'>{Content.number.thirdStep}</h5>
               {Content.step.thirdStepContent}
            </div>
         </div>
         <button className='step__btn btn btn__primary clr-white'>{Content.button.LEARN}</button>
      </section>
   )
}
