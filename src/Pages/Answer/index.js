import { Content } from '../../Utils/Content'

export default function Answer() {
   return (
      <section className='answer'>
         <h3>
            <span className='clr-primaryDark'>{Content.answer.title}</span>
            <span className='clr-primary'>{Content.answer.sub}</span>
         </h3>
         <div className='answer__content'>
            <div>
               <h5 className='clr-primaryDark'>{Content.answer.worksTitle}</h5>
               <p>{Content.answer.worksContent}</p>
            </div>
            <div>
               <h5 className='clr-primary'>{Content.answer.launchTitle}</h5>
               <p>{Content.answer.launchContent}</p>
            </div>
            <div>
               <h5 className='clr-red'>{Content.answer.serviceTitle}</h5>
               <p>{Content.answer.serviceContent}</p>
            </div>
            <div>
               <h5 className='clr-orange'>{Content.answer.integrateTitle}</h5>
               <p>{Content.answer.integrateContent}</p>
            </div>
            <div>
               <h5 className='clr-green'>{Content.answer.costTitle}</h5>
               <p>{Content.answer.costContent}</p>
            </div>
            <div>
               <h5 className='clr-primaryDark'>{Content.answer.costumeTitle}</h5>
               <p>{Content.answer.costumeContent}</p>
            </div>
         </div>
      </section>
   )
}
