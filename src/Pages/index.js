import Answer from "./Answer";
import Hero from "./Hero";
import Info from "./Info";
import Product from "./Product";
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
    </section>
  );
}
