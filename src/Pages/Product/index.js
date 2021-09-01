import { ReactComponent as Rocket } from "@Icon/icon-rocket.svg";
import { ReactComponent as Puzzle } from "@Icon/icon-puzzle.svg";
import { ReactComponent as Setting } from "@Icon/icon-setting.svg";
import { ReactComponent as Money } from "@Icon/icon-money.svg";

export default function Product() {
  return (
    <section className="product">
      <div className="product__header">
        <h3>
          <span className="clr-primaryDark">What can Authzn</span>
          <span className="clr-primary"> do for you?</span>
        </h3>
        <p className="clr-text">
          We have created a new product that will help businesses implement
          Single-Sign-On easily and will get you up in running in no time.
        </p>
      </div>
      <div className="product__item">
        <div>
          <Rocket />
          <h5>Build Quick</h5>
          <p>
            Implement SSO in your company with a quick turn around, less than 2
            weeks time and ready to go!
          </p>
        </div>
        <div>
          <Puzzle />
          <h5>Compatibility</h5>
          <p>Tested with okta, onelogin, authzero.</p>
        </div>
        <div>
          <Setting />
          <h5>Costumization</h5>
          <p>Authzn can be integrated based on your current configuration.</p>
        </div>
        <div>
          <Money />
          <h5>Value</h5>
          <p>We’re not expensive.</p>
        </div>
      </div>
    </section>
  );
}
