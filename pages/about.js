import Image from "next/image"
import Link from "next/link"
import Portrait from "\../images/xemocornx-portrait.GIF"

export default function About() {
  return (
    <main>
      <Image src={Portrait} alt="illustrated portrait of MaiAda" height={300} width={300} /> 
      <p>
        Hi! I&apos;m MaiAda Carpano. I love building websites and teaching future web
        developers how to code.
      </p>
      <p>
        I started writing code over 20 years ago when I taught myself HTML and
        CSS so I could build myself some sick Neopets and Myspace layouts. I
        freelanced through grad school and in between jobs, building basic
        static websites for clients ranging from LECASE Ecovillage, to Marketing
        inSites to Sharp Shirter.
      </p>
      <p>
        At the time, I didn&apos;t know it was possible for me to turn my nerdy hobby into a full
        time job. I got a Graduate Certificate in Teaching and taught middle
        school for 6 years.
      </p>
      <p>
        I eventually decided to transition to a career in tech, and attended the
        Penn LPS Full Stack coding bootcamp in the fall of 2019. Immediately
        after, I began working at Creditly Corp. as a frontend software engineer.
      </p>
      <p>
        Since then, I&apos;ve gained an extensive skillset as a developer and a UX/UI
        designer, from wireframing and creating mocks in Sketch, to building out
        features in Javascript frameworks suck as React, React Native and Next
        JS.
      </p>
      <p>
        I still apply the skills I gained as a teacher every day. My previous experience working
        with students with a wide range of abilities has given me a sharp and
        unique skillset around UX and accessibility. I also teach free coding
        classes on Twitch. My goal is to empower other marginalized people to
        gain the skills and confidence to pursue a career in tech.
      </p>
      <p>
        I feel super lucky that I get to do what I love all day every day - and
        I even get paid for it!
      </p>
    </main>
  );
}
