import logo from "./img/logo.png";
import icon_facebook from "./img/facebook.png";
import icon_instagram from "./img/instagram.png";
import icon_twitter from "./img/twitter.png";
import icon_mail from "./img/mail.png";
import icon_twitch from "./img/twitch.png";

const Footer = () => {
  return (
    <section className="container bg-grey">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5">
        <div className="col-lg-4 mb-3">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>letsflight@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col mb-3">
          <h5>Our Services</h5>
          <h5>Destination</h5>
          <h5>Why Us</h5>
        </div>
        <div className="col-lg-3 mb-3">
          <p>Connect with us</p>
          <ul className="list-unstyled d-flex">
            <li>
              <a className="link-dark" href="https://facebook.com">
                <img
                  src={icon_facebook}
                  style={{ width: 30 }}
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_facebook"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://instagram.com">
                <img
                  src={icon_instagram}
                  style={{ width: 30 }}
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_instagram"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://twitter.com">
                <img
                  src={icon_twitter}
                  style={{ width: 30 }}
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_twitter"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://mail.com">
                <img
                  src={icon_mail}
                  style={{ width: 30 }}
                  fill="currentColor"
                  className="bi bi-1-circle"
                  alt="icon_mail"
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="https://whatsapp.com">
                <img
                  src={icon_twitch}
                  style={{ width: 30 }}
                  className="bi bi-1-circle"
                  alt="icon_twitch"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <p>Copyright Lef.id 2022</p>
          <img src={logo} style={{ width: 80 }} alt="logo" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
