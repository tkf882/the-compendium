import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Shuffle } from '../../components/Shuffle';
import { HomeProjectPreview } from './HomeProjectPreview';

import './HomePage.css'

import pfp1 from '../../assets/tkf-pfp1.png';
import pfp2 from '../../assets/tkf-pfp2.png';


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
          <div className="profile-section">
            <img className="profile-picture" src={pfp2}/>
            <div>
              <div className="profile-header">
                <div>
                  <h1>Trevor Favel</h1>
                  <h2>Graduated from <span className="bold-span">SIMON FRASER UNIVERSITY</span> with a degree in <span className="bold-span">COMPUTER SCIENCE (DISTINCTION)</span></h2>
                </div>
              </div>
              {/* <span className="bold-span">sad</span> */}
              <p>I am a programmer who enjoys working on people-oriented projects.</p>
              <p>Many of my projects are in <span className="bold-span">Python</span>. I also have project experience in <span className="bold-span">C/C++,</span> <span className="bold-span">Java,</span> and using design tools (Photoshop, Premiere, Maya, Clip Studio).</p>
              <p>My web tech stack includes <span className="bold-span">HTML/CSS,</span> <span className="bold-span">React/TypeScript,</span> and <span className="bold-span">Vite</span>.</p>
            </div>
          </div>

          <h2>Recent Projects</h2>

          <HomeProjectPreview />

        </div>

        <Footer />

      </div>

    </>
  );
}