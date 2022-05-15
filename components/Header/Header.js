import Image from "next/image";

import EmailIcon from "../../images/icons/email.svg";
import GithubIcon from "../../images/icons/github.svg";
import LinkedInIcon from "../../images/icons/linkedin.svg";

export default function Header() {
  return (
    <header className="home__header">
      <h1 className="home__header-title">MaiAda Carpano - Web Developer</h1>
      <div className="home__header-links">
        <a href="https://www.linkedin.com/in/maiadac/" className="home__header-links-icon home__header-links-icon--ln">
          <Image
            src={LinkedInIcon}
            alt="click to see MaiAda's linked in"
            width={22}
            height={22}
          />
        </a>
        <a
          href="https://github.com/xemotionalx"
          className="home__header-links-icon home__header-links-icon--gh"
        >
          <Image
            src={GithubIcon}
            alt="click to see MaiAda's Github"
            width={22}
            height={22}
          />
        </a>
        <a href="mailto:maiadacx@gmail.com" className="home__header-links-icon home__header-links-icon--email">
          <Image
            src={EmailIcon}
            alt="click to send MaiAda an email"
            width={22}
            height={22}
          />
        </a>
      </div>
    </header>
  );
}
