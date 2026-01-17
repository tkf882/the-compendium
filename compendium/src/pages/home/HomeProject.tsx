import { Link } from 'react-router';
import { Project } from '../../data/projects';
import './HomeProject.css'

type homeProjectProps = {
  props: {
    project: Project
  }
}

export function HomeProject({props}:homeProjectProps) {
  // const navigate = useNavigate();
  // const redirect = () => {
  //   console.log(`its: ${props.project.projectTitle}`)
  //   navigate('/portfolio/?projectId=sda');
  // }

  return(

    <Link to={`/portfolio/?projectId=${props.project.id}`}>
      <div className="project-container">
        <div className="project-header">
          <h3><span className="bold-span-h3">{props.project.projectTitle}</span></h3>
          <p>{props.project.date}</p>
        </div>
        <p>{props.project.projectSubtitle}</p>
        <p>...</p>
      </div>
    </Link>


  )
}