import { Project } from '../../data/projects';
import './ProjectComponent.css';

interface projectComponentProps {
  project: Project;
  setCurrentProject: (value: Project) => void;
}

export function ProjectComponent({project, setCurrentProject}: projectComponentProps) {

  const updateInfo:()=>void = () => {
    setCurrentProject(project)
    // console.log(`updated to ${project.id}`)
  }

  return (
    <div className="project" onClick={updateInfo}>
      <h2>{project.projectTitle}</h2>
      <div className="project-vignette"></div>
      <div className="project-date">{project.date}</div>
    </div>
  )
}