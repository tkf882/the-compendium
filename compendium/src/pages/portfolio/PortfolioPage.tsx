import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Footer } from '../../components/Footer'
// import { Fade } from '../../components/Fade'

import './PortfolioPage.css'

export function PortfolioPage() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Portfolio</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />

      <link rel="icon" type="image/svg+xml" href="./assets/tkf-pfp1.png" />

      <div className="page-container-portfolio">

        {/* <Fade /> */}

        <Header selected={{name: 'portfolio'}}/>

        <Sidebar />

        <div className="content-container-portfolio">

          <h1>// Projects</h1>

          <div className="project-info">
            when no project selected:
            <div className="project-info-placeholder">
              <h2>// Select a Project //</h2>
            </div>
            when selected:
            <div className="project-info-header">
              <h1>Heres another long project title but well formatted</h1>
              <h2>Jan-Apr, 2025</h2>
            </div>

            <h2>Project info description stuff</h2>
            <ul>
              <li>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
              <li>sadasd</li>
              <li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
            </ul>

          </div>

          <div className="project-grid">
            <div className="project">
              <h2>Project name title LOOOOOOOOOOOOOOOOONG</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Heres another long project title but well formatted</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Project name title sad</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Heres another long project title but well formatted</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Project name title</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Heres another long project title but well formatted and some extra text here</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Project LOOOOOOOOOOOOOOOOONG</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Heres another long project title but well formatted</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Project name title LOOOOOOOOOOOOOOOOONG</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>

            <div className="project">
              <h2>Heres another long project title but well formatted</h2>
              <div className="project-vignette"></div>
              <div className="project-date">Jan-Apr, 2025</div>
            </div>
          </div>

        </div>

        <Footer />

      </div>

    </>
  )
}