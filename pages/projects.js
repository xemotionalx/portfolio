import Image from "next/image";
import Card from "../components/Card";
import Pairigy from "../images/pairigy-home-screen.png";
import PBCC from "../images/pbcc-site.png"

export default function Projects() {
  return (
    <main>
      <div className="projects">
        <div className="projects__heading">
          <h1>Projects</h1>
        </div>
          <div>
            <Card
              image={<Image src={Pairigy} alt="pic" className="card__img" />}
              title="Pairigy"
              description="Pairigy is a social media website for people in tech who want to connect and build projects together. This was my Penn LPS capstone project. I lead the design and development from wireframing to production. Technologies included React, React Redux, Express, Sass and Mongoose DB."
              githubLink="https://github.com/xemotionalx/Pairigy"
              siteLink="https://aqueous-brook-45613.herokuapp.com/"
            />
          </div>
          <div>
            <Card
              image={<Image src={PBCC} alt="pic" className="card__img" />}
              title="PBCC Website"
              description="The PBCC site was created for the 12 week pre-coding bootcamp I ran on Twitch. This was created with HTML and CSs with some basic CSS and Javascript animations. Through the course, I used this template as a model for students to build off of."
              githubLink="https://github.com/xemotionalx/pre-bootcamp-coding-class"
              siteLink="https://precodingbootcamp.com"
            />
          </div>
      </div>
    </main>
  );
}
