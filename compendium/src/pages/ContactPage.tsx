import { Header } from '../components/Header'
// import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
// import { Fade } from '../components/Fade'

import './ContactPage.css';

import pfp1 from '../assets/tkf-pfp1.png';

export function ContactPage() {

  return(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>Contact</title>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"/>

      <link rel="icon" type="image/svg+xml" href={pfp1} />

      <div className="page-container-contact">

        {/* <Fade /> */}

        <Header selected={{name:'contact'}}/>

        {/* <Sidebar /> */}

        <div className="content-container-contact">

          <h1>// Contact</h1>

          <div className="content-section-contact">
            <h2>Contact information</h2>
            <p>N/A</p>

          </div>

        </div>

        <Footer />

      </div>
      
    </>
  )


}