import { Project } from '../../data/projects';
import './ProjectInfo.css';

interface projectInfoProps {
  currentProject: Project;
  // setCurrentProject: (value: Project) => void;
}

export function ProjectInfo({currentProject}: projectInfoProps) {

  console.log(currentProject.projectTitle);

  // const generateList = () => {
  //   let html = '';
  //   currentProject.points.forEach(function(value) {
  //     html += `<li>${value}</li>`
  //   })
  //   return html;
  // }

  const placeholder = (
    <div className="project-info">
      <div className="project-info-placeholder">
        <h2>// Select a Project //</h2>
      </div>
    </div>

  )

  const info = (
    <div className="project-info">
      <div className="project-info-header">
        <h1>{currentProject.projectTitle}</h1>
        <h2>{currentProject.date}</h2>
      </div>

      <h2>{currentProject.projectSubtitle}</h2>
      <ul>
        {
          currentProject.points.map((point) => {
            return (
              <li>{point}</li>
            )
          })
        }
      </ul>
    </div>
  )

  if (currentProject.projectTitle === '') {
    return(
      placeholder
    )
  } else {
    return(
      info
    )
  }

}