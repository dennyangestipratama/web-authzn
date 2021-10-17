import { Route, Switch } from 'react-router'
import { LinkTo } from '../Utils/Link'

import Answer from './Answer'
import Hero from './Hero'
import Info from './Info'
import Product from './Product'
import Contact from './Contact'
import Step from './Step'
import Subscribe from './Subscribe'
import Team from './Team'

export default function Home() {
   return (
      <section className='home'>
         <Hero />
         <Product />
         <Info />
         <Step />
         <Answer />
         <Team />
         <Subscribe />
         <Switch>
            <Route path={LinkTo.CONTACT} component={Contact} />
         </Switch>
      </section>
   )
}
