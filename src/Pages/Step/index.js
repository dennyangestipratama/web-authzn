import Illustration from "@Image/illustration.png";

export default function Step() {
  return (
    <section className="step">
      <h3>
        <span className="clr-primaryDark">Easy as </span>
        <span className="clr-primary">one</span>
        <span className="clr-primaryDark">-</span>
        <span className="clr-orange">two</span>
        <span className="clr-primaryDark">-</span>
        <span className="clr-red">three</span>
        <span className="clr-primaryDark">...</span>
      </h3>
      <div className="step__information">
        <div className="step__num blue">1</div>
        <div>
          <h5 className="clr-primaryDark">First Step</h5>
          <p>
            This is a content of the steps. Can be up to three lines. This is a
            content of the steps. Can be up to three lines. This is a content of
            the steps. Can be up to three lines. This is a content of the steps.
            Can be up to three lines. This is a content of the steps. Can be up
            to three lines. This is a content of the steps. Can be up to three
            lines.
          </p>
        </div>
        <div className="step__num orange">2</div>
        <div>
          <div>
            <h5 className="clr-primaryDark">Second Step</h5>
            <p>
              This is a content of the steps. Can be up to three lines. This is
              a content of the steps. Can be up to three lines. This is a
              content of the steps. Can be up to three lines. This is a content
              of the steps. Can be up to three lines.
            </p>
          </div>
          <div className="flex illustration">
            <img src={Illustration} alt="illustration" />
            <div>
              <h5 className="clr-primaryDark">Illustration</h5>
              <p>This is a content of the steps. Can be up to three lines. </p>
            </div>
          </div>
        </div>
        <div className="step__num red">3</div>
        <div>
          <h5 className="clr-primaryDark">Third Step</h5>
          <p>
            This is a content of the steps. Can be up to three lines. This is a
            content of the steps. Can be up to three lines. This is a content of
            the steps. Can be up to three lines.
          </p>
        </div>
      </div>
      <button className="step__btn btn btn__primary clr-white">
        Learn More
      </button>
    </section>
  );
}
