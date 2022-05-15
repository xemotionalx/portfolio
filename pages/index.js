import Image from "next/image";
import Portrait from "../images/xemocornx-portrait.GIF";

export default function Home() {
  return (
    <div className="home">
      <main className="home__main">
        <h1>MaiAda Carpano</h1>
        <h2>Frontend Developer & Educator</h2>
        <div className="wrapper-around-main-img-and-text">
          <div className="home__feature-image">
            <Image
              src={Portrait}
              alt="illustrated portrait of MaiAda"
              height={300}
              width={300}
            />
          </div>
          <div className="home__feature-text">
            <div className="speech-bubble">Hi, I&apos;m MaiAda!</div>
          </div>
        </div>
      </main>
      <nav className="nav">
        <ul>
          <li>
            <a href="https://github.com/xemotionalx">github</a>
          </li>
          <li>
            <a href="https://xemotionalx.github.io/portfolio/assets/maiada-carpano-resume.pdf">
              resume
            </a>
          </li>
          <li>
            <a href="https://precodingbootcamp.com">coding classes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
