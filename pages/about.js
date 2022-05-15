import Image from "next/image";
import Portrait from "../images/xemocornx-portrait.GIF";

export default function About() {
  return (
    <main className="home__main">
      <div className="wrapper">
      <div className="home__feature-image">
        <Image
          src={Portrait}
          alt="illustrated portrait of MaiAda"
          height={300}
          width={300}
        />
      </div>
      <div className="home__feature-text">
        <div className="speech-bubble">
          Web dev!
        </div>
      </div>
      </div>
    </main>
  );
}
