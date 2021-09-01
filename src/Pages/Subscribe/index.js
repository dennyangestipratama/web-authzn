export default function Subscribe() {
  return (
    <section className="subscribe bg-primaryDark">
      <h3 className="clr-white">Subscribe now and get 30% off on Launch day</h3>
      <form className="subscribe__form " method="post">
        <input type="email" name="email" placeholder="Your Email" />
        <input type="password" name="password" placeholder="Your Password" />
        <button className="clr-white" type="submit">
          Sign up
        </button>
      </form>
      <p>By signing up, you agree to the Terms of Service.</p>
    </section>
  );
}
