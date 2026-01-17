import { ProjectComponent } from './ProjectComponent';
import { Project, projectList } from '../../data/projects';

import './ProjectGrid.css';

interface projectGridProps {
  // currentProject: Project;
  setCurrentProject: (value: Project) => void;
}

export function ProjectGrid({setCurrentProject}: projectGridProps) {
  return(
    <div className="project-grid">
      {projectList.projects.map((project) => {
        return (
          <ProjectComponent
            key={project.id}
            project={project}
            setCurrentProject={setCurrentProject}
          />
        )
      })}
    </div>
  )
}