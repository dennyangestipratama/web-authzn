import Device from "@Image/bg-device.png";

export default function Info() {
  return (
    <section className="info">
      <h5 className="clr-primaryDark">
        Use our easy-to-use Dashboard to setup SSO in no time.
      </h5>
      <img src={Device} alt="device" />
      <div className="info__label">
        <div>
          <h6 className="clr-primaryDark">How Startup Framework works?</h6>
          <p>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </p>
        </div>
        <div>
          <h6 className="clr-primaryDark">
            Do you provide hosting with Startup ?
          </h6>
          <p>
            No, hosting is on you. You upload the result on your hosting via FTP
            or using other tools you like. You can use any server, just make
            sure it have a PHP installed in case if you need a contact form.
          </p>
        </div>
      </div>
    </section>
  );
}
