import { Header } from '../components/Header'
// import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
// import { Fade } from '../components/Fade'

import './AboutPage.css';

import pfp1 from '../assets/tkf-pfp1.png';

export function AboutPage() {

  return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>About</title>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"/>

      <link rel="icon" type="image/svg+xml" href={pfp1} />

      <div className="page-container-about">

        {/* <Fade /> */}

        <Header selected={{name:'about'}}/>

        {/* <Sidebar /> */}

        <div className="content-container-about">

          <h1>// About</h1>

          <div className="content-section-about">
            <h2>About me</h2>
            <p>Real human being.</p>
            <p>Graduated from Simon Fraser University with a degree in Computer Science (distinction) in Fall 2025.</p>
            <p>I enjoy working on projects that are people-oriented with the goal of helping others in mind.</p>
            <p>As an artist and programmer I want to continue to design websites and projects, with the technical experience to implement them efficiently.</p>
          </div>

          <div className="content-section-about">
            <h2>Other</h2>
            <p>Some other things about me.</p>
            <ul>
              <li>Linux (Debian) user</li>
              <li>Illustrator and art connoisseur</li>
              <li>Video game enjoyer</li>
              <li>Book reader</li>
            </ul>
        
          </div>

          <div className="content-section-about">
            <h2>This website</h2>
            <p>The <span className="bold-span-p">compendium_</span> is a website designed to showcase my portfolio.</p>
            <p>Grid background image and colours were referenced from <a href="https://metakirby5.github.io/yorha/?#">here</a>.</p>
        
          </div>

        </div>

        <Footer />

      </div>
      
    </>
  )


}