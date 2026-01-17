export class ProjectList {
  projects: Project[];
  localStorageKey: string;

  constructor(localStorageKey:string) {
    this.localStorageKey = localStorageKey;
    this.projects = projects;
  }

}

export class Project {
  projectTitle: string;
  projectSubtitle: string;
  date: string;
  points: string[];
  id: (string | null);

  constructor(projectTitle:string, projectSubtitle:string, date:string, points:string[], id:(string | null)) {
    this.projectTitle = projectTitle;
    this.projectSubtitle = projectSubtitle;
    this.date = date;
    this.points = points;
    this.id = id;
  }

}

const projects:Project[] = [
  new Project(
    "title1",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '1'
  ),
  new Project(
    "title2",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '2'
  ),
  new Project(
    "title3",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '3'
  ),
  new Project(
    "title4",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '4'
  ),
  new Project(
    "title5",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '5'
  ),
  new Project(
    "title6",
    "sub",
    "Jan-Apr, 2025",
    [
      "first",
      "second",
      "third"
    ],
    '6'
  ),
]; 

export const projectList:ProjectList = new ProjectList('project-list');

// {
//     projectTitle: "title",
//     projectSubtitle: "sub",
//     date: "Jan-Apr, 2025",
//     points: [
//       "first",
//       "second",
//       "third"
//     ]
//   },