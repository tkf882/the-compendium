import { HomeProject } from './HomeProject';

import { projectList } from '../../data/projects.ts'

import './HomeProjectPreview.css'

export function HomeProjectPreview() {

  console.log(projectList.projects[0])

  return (
    <div className="project-grid-home">

      <HomeProject />
      <HomeProject />
      <HomeProject />
      <HomeProject />
      <HomeProject />
      <HomeProject />

    </div>
  )
}