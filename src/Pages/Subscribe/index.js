import { Content } from '../../Utils/content'

export default function Subscribe() {
   return (
      <section className='subscribe bg-primaryDark'>
         <h3 className='clr-white'>{Content.subscribe.title}</h3>
         <form className='subscribe__form ' method='post'>
            <input type='email' name='email' placeholder={Content.placeholder.EMAIL} />
            <input type='password' name='password' placeholder={Content.placeholder.PASSWORD} />
            <button className='clr-white' type='submit'>
               {Content.button.SIGNUP}
            </button>
         </form>
         <p>{Content.subscribe.paragraph}</p>
      </section>
   )
}
