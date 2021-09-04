import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowDown } from "@Icon/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "@Icon/icon-arrow-down.svg";

export default function Signup() {
  const [isShow, setShow] = useState(false);
  return (
    <section className="signup">
      <Link to="/">
        <div className="signup__bg"></div>
      </Link>
      <form className="signup__form" method="post">
        <div className="flex">
          <div className="signup__input">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="First Name" />
          </div>
          <div
            className="signup__input signup__dropdown"
            onClick={() => setShow(!isShow)}
          >
            <label>Service</label>
            <div className={`flexBetween ${isShow ? "border__primary" : ""}`}>
              <div className="clr-primaryDark">SAML</div>
              {isShow ? <ArrowUp /> : <ArrowDown />}
            </div>
          </div>
        </div>
        <div className="signup__input">
          <label>Your Email</label>
          <input type="email" name="email" placeholder="name@email.com" />
        </div>
        <div className="signup__input">
          <label>Your Message</label>
          <textarea name="message" cols="30" rows="3" placeholder="Message" />
        </div>
        <div className="signup__btn">
          <button
            type="button"
            className="btn btn__radius btn__outline--primary clr-primary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn__radius btn__primary clr-white"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
