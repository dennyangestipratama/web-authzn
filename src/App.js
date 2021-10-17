import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { LinkTo } from './Utils/Link'

import Home from '@Pages'
import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'

export default function App() {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path={LinkTo.HOME} component={Home} />
            <Route exact path={LinkTo.SIGNUP} component={Home} />
            <Route exact path={LinkTo.LOGIN} component={Home} />
            <Route exact path={LinkTo.CONTACT} component={Home} />
         </Switch>
         <Footer />
      </Router>
   )
}
