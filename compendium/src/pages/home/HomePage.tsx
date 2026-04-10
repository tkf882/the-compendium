import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Shuffle } from '../../components/Shuffle';
import { HomeProjectPreview } from './HomeProjectPreview';

import './HomePage.css'

import pfp1 from '../../assets/tkf-pfp1.png';
// import pfp2 from '../../assets/tkf-pfp2.png';


export function HomePage() {

  return (
    <>
      <title>Compendium</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />
      
      <link rel="icon" type="image/svg+xml" href={pfp1} />

      <div className="page-container-home">

        <Header selected={{name: 'home'}}/>
        
        <div className="top-image-container">
          <div className="image-container-blur">
            <div className="image-container-box">
              <Shuffle details={{finalString: "TREVOR FAVEL'S", class: 'title-header', underscore: false}} />
              <Shuffle details={{finalString: 'compendium', class: 'title-sub', underscore: true}} />
              <Shuffle details={{finalString: '/////////////////////////////////////////////////////', class: 'title-sep', underscore: false}} />
            </div>
          </div>
          <a className="arrow">{'>>'}</a>
        </div>

        <div className="content-container-home">

          <div className="profile-description">
            <h1>Who am I?</h1>
            <h2>My name is Trevor Favel, and I graduated from Simon Fraser University with a degree in Computer Science (Distinction) 3.6/4.0. I enjoy working on projects that are people-oriented with the goal of helping others in mind. See my projects for details!</h2>
          </div>

          <div className="profile-description-right">
            <h1>What I do:</h1>
            <h2>Programmer, Web Developer (Front-end, Back-end), Designer, Illustrator, </h2>
          </div>

          <div className="profile-description">
            <h1>Tech stack and skills:</h1>
            <h2><span className="bold-span">Languages: </span>Python, C/C++, Java, SQL, JavaScript, TypeScript, HTML, CSS</h2>
            <h2><span className="bold-span">Frameworks/Libraries/Tools: </span>React.js, Node.js, Express.js, Vite</h2>
            <h2><span className="bold-span">Developer Tools: </span>Linux (Bash, Debian-based), Git, GitHub, Visual Studio Code, Virtual Machines</h2> 
            <h2><span className="bold-span">Design: </span>Illustration, Adobe Photoshop, Adobe Premiere Pro, Clip Studio, Maya</h2> 
          </div>

          <h1>Recent Projects</h1>

          <HomeProjectPreview />

        </div>

        <Footer />

      </div>

    </>
  );
}