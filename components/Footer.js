import Image from 'next/image'
import TwitterIcon from '../images/icons/twitter.svg'
import TwitchIcon from '../images/icons/twitch.svg'
import GithubIcon from '../images/icons/github.svg'

export default function Footer() {
  return (
    <div className="footer">
      <footer className="text-center">
        <ul className="socials-icons">
          <li>
            <a href="https://www.twitter.com/xemocornx">
              <Image src={TwitterIcon} alt="twitter" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/xemotionalunicornx">
              <Image src={TwitchIcon} alt="twitch" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="https://github.com/xemotionalx">
              <Image src={GithubIcon} alt="github" width={20} height={20} />
            </a>
          </li>
        </ul>
      </footer>
      </div>
  );
}
