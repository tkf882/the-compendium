import { useState } from 'react';
import { Project } from '../../data/projects';

import { ProjectInfo } from './ProjectInfo';
import { ProjectGrid } from './ProjectGrid';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './PortfolioPage.css'

export function PortfolioPage() {
  // need the state for ProjectInfo and ProjectGrid
  const [currentProject, setCurrentProject] = useState(new Project('','','',[]));


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

        <Header selected={{name: 'portfolio'}}/>

        <div className="content-container-portfolio">

          <h1>// Projects</h1>

          <ProjectInfo
            currentProject={currentProject}
            // setCurrentProject={setCurrentProject}
          />

          <ProjectGrid 
            // currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />

        </div>

        <Footer />

      </div>

    </>
  )
}