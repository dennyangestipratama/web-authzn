import Device from '@Image/bg-device.png'

import { Content } from '../../Utils/Content'

export default function Info() {
   return (
      <section className='info'>
         <h5 className='clr-primaryDark'>{Content.info.title}</h5>
         <img src={Device} alt='device' />
         <div className='info__label'>
            <div>
               <h6 className='clr-primaryDark'>{Content.info.worksTitle}</h6>
               <p>{Content.info.worksContent}</p>
            </div>
            <div>
               <h6 className='clr-primaryDark'>{Content.info.startupTitle}</h6>
               <p>{Content.info.startupContent}</p>
            </div>
         </div>
      </section>
   )
}
