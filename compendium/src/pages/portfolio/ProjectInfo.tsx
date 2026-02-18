import { Project } from '../../data/projects';
import './ProjectInfo.css';

interface projectInfoProps {
  currentProject: Project;
  // projectId: (string | null);
  // setCurrentProject: (value: Project) => void;
}

export function ProjectInfo({currentProject}: projectInfoProps) {
  // console.log(currentProject.projectTitle);

  const isLink:boolean = currentProject.projectSubtitle.substring(0,8) === 'https://'; // Test if its a https link

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
      <h2>{isLink ? <a style={{textDecoration: 'underline'}} href={currentProject.projectSubtitle}>Page Link</a> : `${currentProject.projectSubtitle}`}</h2>
      <ul>
        {
          currentProject.points.map((point, index) => {
            return (
              // each point in the points array needs its own key, so just append the index to the id
              <li key={`${currentProject.id}-${index}`}>{point}</li>
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