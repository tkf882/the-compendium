import { ProjectComponent } from './ProjectComponent';
import { Project, projectList } from '../../data/projects';

import './ProjectGrid.css';

interface projectGridProps {
  // currentProject: Project;
  setCurrentProject: (value: Project) => void;
}

export function ProjectGrid({setCurrentProject}: projectGridProps) {
  return(
    // <div className="project-grid">

    //   <ProjectComponent />
    //   <ProjectComponent />
    //   <ProjectComponent />
    //   <ProjectComponent />
    //   <ProjectComponent />

    // </div>

    <div className="project-grid">
      {projectList.projects.map((project) => {
        return (
          <ProjectComponent
            project={project}
            setCurrentProject={setCurrentProject}
          />
        )
      })}
    </div>



    // <div className="products-grid">
    //   {products.map((product) => {
      
    //     return (
    //       <Product key={product.id} product={product} loadCart={loadCart} />
    //     );
    //   })}

    // </div>


  )
}