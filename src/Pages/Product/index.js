import { Content } from '../../Utils/content'

import { ReactComponent as Rocket } from '@Icon/icon-rocket.svg'
import { ReactComponent as Puzzle } from '@Icon/icon-puzzle.svg'
import { ReactComponent as Setting } from '@Icon/icon-setting.svg'
import { ReactComponent as Money } from '@Icon/icon-money.svg'

export default function Product() {
   return (
      <section className='product'>
         <div className='product__header'>
            <h3>
               <span className='clr-primaryDark'>{Content.product.title}</span>
               <span className='clr-primary'>{Content.product.title_2}</span>
            </h3>
            <p className='clr-text'>{Content.product.paragraph}</p>
         </div>
         <div className='product__item'>
            <div>
               <Rocket />
               <h5>{Content.product.quickTitle}</h5>
               <p>{Content.product.quickContent}</p>
            </div>
            <div>
               <Puzzle />
               <h5>{Content.product.compabilityTitle}</h5>
               <p>{Content.product.compabilityContent}</p>
            </div>
            <div>
               <Setting />
               <h5>{Content.product.costumizationTitle}</h5>
               <p>{Content.product.costumizationContent}</p>
            </div>
            <div>
               <Money />
               <h5>{Content.product.valueTitle}</h5>
               <p>{Content.product.valueContent}</p>
            </div>
         </div>
      </section>
   )
}
