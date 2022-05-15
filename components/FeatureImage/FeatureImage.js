import Image from 'next/image'

import Portrait from "../../images/xemocornx-portrait.GIF";

export default function FeatureImage() {
  return (
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
      <div className="speech-bubble">
        <p>Ask me about a11y!</p>
      </div>
    </div>
  </div>
  );
}
