import { Route, Switch } from "react-router";
import Answer from "./Answer";
import Hero from "./Hero";
import Info from "./Info";
import Product from "./Product";
import Signup from "./Signup";
import Step from "./Step";
import Subscribe from "./Subscribe";
import Team from "./Team";

export default function Home() {
  return (
    <section>
      <Hero />
      <Product />
      <Info />
      <Step />
      <Answer />
      <Team />
      <Subscribe />
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </section>
  );
}
