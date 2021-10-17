import { Link } from 'react-router-dom'
import { Content } from '../../Utils/content'
import { People } from '../../Utils/Team'

export default function Team() {
   return (
      <section className='team bg-primary'>
         <h3 className='clr-white'>{Content.team.title}</h3>
         <p className='clr-white'>{Content.team.sub}</p>
         <div className='team__img'>
            {People.map((item, index) => {
               return (
                  <div key={index} className='team__person'>
                     <img src={item.image} alt={item.name} />
                     <h5 className='clr-white'>{item.name}</h5>
                     <h6 className='clr-white'>{item.position}</h6>
                     <div className='social-media alignCenter'>
                        {item.social.map((media) => (
                           <Link to={media.link}>
                              <img src={media.image} alt={media.name} />
                           </Link>
                        ))}
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
   )
}
