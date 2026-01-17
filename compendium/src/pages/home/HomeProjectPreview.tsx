import { HomeProject } from './HomeProject';

import { projectList } from '../../data/projects.ts'

import './HomeProjectPreview.css'

export function HomeProjectPreview() {

  console.log(projectList.projects[0])

  return (
    <div className="project-grid-home">

      <HomeProject props={{project: projectList.projects[0]}}/>
      <HomeProject props={{project: projectList.projects[1]}}/>
      <HomeProject props={{project: projectList.projects[2]}}/>
      <HomeProject props={{project: projectList.projects[3]}}/>
      <HomeProject props={{project: projectList.projects[4]}}/>
      <HomeProject props={{project: projectList.projects[5]}}/>

    </div>
  )
}