import Image from "next/image";

import TwitterIcon from "../../images/icons/twitter.svg";
import GithubIcon from "../../images/icons/github.svg";
import LinkedInIcon from "../../images/icons/linkedin.svg";

export default function Header() {
  return (
    <header className="home__header">
      <h1 className="home__header-title">MaiAda Carpano - Web Developer</h1>
      <div className="home__header-links">
        <a
          href="https://twitter.com/bubblegrungekk"
          className="home__header-links-icon home__header-links-icon--ln"
        >
          <Image
            src={TwitterIcon}
            alt="click to visit MaiAda's twitter"
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
            alt="click to visit MaiAda's Github"
            width={22}
            height={22}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/maiadac/"
          className="home__header-links-icon home__header-links-icon--email"
        >
          <Image
            src={LinkedInIcon}
            alt="click to visit MaiAda's linked in"
            width={22}
            height={22}
          />
        </a>
      </div>
    </header>
  );
}
