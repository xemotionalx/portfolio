import Image from "next/image"
import UnicornSkull from "../images/unicorn-skull-logo.PNG"
import TextLogo from "../images/xemotionalunicornx-text-logo.GIF"

export default function Header() {
  return (
    <div className="header">
    <header className="text-center">
      <div>
        <Image
          src={UnicornSkull}
          alt="illustration of unicorn skull crying sparkly tears"
          height={150}
          width={150}
        />
      </div>
      <div>
        <Image
          src={TextLogo}
          alt="sparkly text: emotional unicorn"
          height={30}
          width={266}
        />
      </div>
    </header>
    </div>
  );
}
