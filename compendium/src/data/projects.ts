// https://www.geeksforgeeks.org/javascript/how-to-create-a-guid-uuid-in-javascript/
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

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

// Store like this for now
const projects:Project[] = [
  new Project(
    "The Compendium",
    "Portfolio Website",
    "Jan 2026",
    [
      "Designed and built a portfolio website using HTML and CSS.",
      "Used TypeScript and React to introduce functionality in an organized and scalable manner.",
      "Utilized and configured Vite to speed up build and development time."
    ],
    uuidv4()
  ),
  new Project(
    "ISIC 2024: Skin Cancer Detection using Multi-modal Deep Learning",
    "CMPT 340 Biomedical Computing",
    "Jan-Apr, 2025",
    [
      "Efficiently communicated with teammates and professor using various features on Slack.",
      "Using Python’s PyTorch library, performed image classification on 3D-TBP skin data using a CNN and ResNet18 model.",
      "Combined image classification model with partner’s tabular model using late multi-modal fusion, scoring above 80% true positive rate."
    ],
    uuidv4()
  ),
  new Project(
    "American Sign Language (ASL) Classification using Autoencoders",
    "CMPT 419 Special Topics in Artificial Intelligence",
    "Jan-Apr, 2025",
    [
      "Trained an Autoencoder using Python’s PyTorch library to express the latent representations of ASL letters.",
      "Applied K-Means clustering to the latent representation in 2D space, and determined how many unique letters were in the dataset using the Elbow method and the Silhouette score."
    ],
    uuidv4()
  ),
  new Project(
    "Pipelined Reliable Transfer Protocol",
    "CMPT 371 Data Communications and Networking SFU",
    "Sep-Dec, 2024",
    [
      "Designed a connection-oriented RDT protocol to reliably transfer files over local network using Python sockets.",
      "Implemented a pipelined packet sender that dynamically changes sending rate based on experienced congestion and packet loss/corruption.",
      "Validated network performance by analysing the network traffic using Wireshark."
    ],
    uuidv4()
  ),
  new Project(
    "Anomaly Detection using Machine Learning",
    "CMPT 318 Special Topics in Computing Science (Cybersecurity) SFU",
    "Jan-Apr, 2024",
    [
      "Collaborated with colleagues to develop a Hidden Markov Model in R to detect anomalies in electrical power grid data.",
      "Enhanced the model’s effectiveness by utilizing Principal Component Analysis to determine relevant features from the data.",
      "Established a threshold to distinguish normal from anomalous observations, using cross-validation to determine the optimal model."
    ],
    uuidv4()
  ),
  new Project(
    "Mobile Fitness App Design",
    "CMPT 363 User Interface Design SFU",
    "Sep-Dec, 2023",
    [
      "Iterated with teammates and sketched out and designed a prototype UI design for the app.",
      "Collaborated with teammates using Figma to construct a functional mockup layout for a mobile application based on the sketches.",
      "Edited a trailer video using Adobe Premiere Pro to demonstrate the app’s key features."
    ],
    uuidv4()
  ),
  new Project(
    "Reddit Sentiment Analysis",
    "CMPT 353 Computational Data Science SFU",
    "May-Aug, 2023",
    [
      "Collaborated with colleagues to devise methodology of gathering, cleaning, preparing, and presenting data utilizing various python libraries such as NumPy, Pandas, PySpark, and Scikit-learn.",
      "Using Python, operated on a large data set with various statistical tests yielding significant results.",
      "Wrote program that computed features on reddit comment data for various machine learning models."
    ],
    uuidv4()
  ),
  new Project(
    "CPU Temperature Analysis",
    "CMPT 353 Computational Data Science SFU",
    "May-Aug, 2023",
    [
      "Using Python, filtered noise from CPU temperature data using LOESS and Kalman smoothing techniques.",
      "Trained linear regression model to predict CPU temperature based on other system data.",
      "Visualized temperature smoothing and machine learning accuracy by plotting data using matplotlib."
    ],
    uuidv4()
  ),
  new Project(
    "Custom Linux Kernel",
    "CMPT 300 Operating Systems I SFU",
    "Jan-Apr, 2023",
    [
      "Configured and ran a custom linux kernel using QEMU virtual machine to create a custom environment for development.",
      "Added useful features to operating system by implementing custom system calls in C.",
      "Successfully debugged and found errors by writing extensive test suite for system calls."
    ],
    uuidv4()
  ),
  new Project(
    "“Knight” 2D game",
    "CMPT 276 Introduction to Software Engineering SFU",
    "Sep-Dec, 2022",
    [
      "Designed well-covered regression tests in Java (Maven/JUnit) for validating correctness of various software functionalities.",
      "Efficiently documented and organized the project by utilizing UML/OOD framework to abstractly organize project. ",
      "Developed player pathfinding algorithm that navigates 2D-maze by implementing Djikstra’s algorithm."
    ],
    uuidv4()
  ),
  new Project(
    "Audio-visual Language Learning App for Blackfoot",
    "CMPT 120 Introduction to Computing Science and Programming I SFU",
    "Jan-Apr, 2021",
    [
      "Developed an interactive text/image/audio-based learning app in Python for the Blackfoot language to assist in learning Blackfoot for English-speakers.",
      "Designed project in respectful and considerate manner that improves intercultural skills and teaches inclusivity.",
      "Optimized code by collaborating with colleague to spot and remove mistakes."
    ],
    uuidv4()
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