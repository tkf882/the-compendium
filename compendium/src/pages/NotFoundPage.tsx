import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
// import { Fade } from '../components/Fade'

import './NotFoundPage.css';

import pfp1 from '../assets/tkf-pfp1.png';

export function NotFoundPage() {

  return(
    <>
      <title>404: Not Found</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />
      
      <link rel="icon" type="image/svg+xml" href={pfp1} />

      <div className="page-container-404">
        {/* <Fade /> */}

        <Header selected={{name: ''}}/>

        <Sidebar />

        <div className="not-found-container">
          <h2>404: Page not found.</h2>
        </div>

        <Footer />
      </div>

    </>
  );
}