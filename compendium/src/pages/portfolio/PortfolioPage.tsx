import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Project, projectList } from '../../data/projects';

import { ProjectInfo } from './ProjectInfo';
import { ProjectGrid } from './ProjectGrid';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './PortfolioPage.css'

export function PortfolioPage() {
  // need the state for ProjectInfo and ProjectGrid
  const [currentProject, setCurrentProject] = useState(new Project('','','',[],null));
  const [params] = useSearchParams();
  const projectId:(string | null) = params.get('projectId');
  // console.log(projectId);

  useEffect(() => {
    if (projectId) {
      for (let i = 0; i < projectList.projects.length; i++) {
        if (projectList.projects[i].id === projectId) {
          setCurrentProject(projectList.projects[i]);
        }
      }
    }
  }, [projectId])

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