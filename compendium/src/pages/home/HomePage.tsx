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
                  <h2>Graduated from <span className="bold-span-h2">SIMON FRASER UNIVERSITY</span> with a degree in <span className="bold-span-h2">COMPUTER SCIENCE (DISTINCTION)</span></h2>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <h2>Project Highlights</h2>

          <HomeProjectPreview />

        </div>

        <Footer />

      </div>

    </>
  );
}