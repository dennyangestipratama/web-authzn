import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "@Pages";
import Footer from "@Layouts/Footer";
import Header from "@Layouts/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
