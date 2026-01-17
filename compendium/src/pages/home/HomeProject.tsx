import { Project } from '../../data/projects';
import './HomeProject.css'

type homeProjectProps = {
  props: {
    project: Project
  }
}

export function HomeProject({props}:homeProjectProps) {
  console.log(`its: ${props.project.projectTitle}`)
  return(
    <div className="project-container">
      <div className="project-header">
        <h3><span className="bold-span-h3">{props.project.projectTitle}</span></h3>
        <p>{props.project.date}</p>
      </div>
      <p>{props.project.projectSubtitle}</p>
      <p>...</p>
    </div>
  )
}