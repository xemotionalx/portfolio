import Link from "next/link"

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="text-center">
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="about">about</Link>
          </li>
          <li>
            <Link href="projects">web dev</Link>
          </li>
          <li>
            <a href="https://precodingbootcamp.com">
              coding classes
            </a>
          </li>
          <li>
            <a href="https://xemotionalx.github.io/assets/maiada-carpano-resume.pdf">resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
