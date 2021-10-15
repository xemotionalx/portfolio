import Image from "next/image";
import Github from "../images/icons/github.svg"
import Link from "../images/icons/link.svg"

export default function Card({
  image,
  title,
  description,
  siteLink,
  githubLink,
}) {
  return (
    <div className="card">
      <div className="card__img">{image}</div>
      <div className="card__text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card__links">
      <a href={githubLink}>
          <Image src={Github} alt="github logo" height="30" width="30" />
        </a>
      <a href={siteLink}>
        <Image src={Link} alt="link icon" height="30" width="30" />
      </a>
      </div>
    </div>
  );
}
