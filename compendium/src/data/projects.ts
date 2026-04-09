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
  projectDescription: string;
  date: string;
  points: string[];
  id: (string | null);

  constructor(projectTitle:string, projectSubtitle:string, projectDescription:string, date:string, points:string[], id:(string | null)) {
    this.projectTitle = projectTitle;
    this.projectSubtitle = projectSubtitle;
    this.projectDescription = projectDescription;
    this.date = date;
    this.points = points;
    this.id = id;
  }
}

// Store like this for now
const projects:Project[] = [
  new Project(
    "Bulletin and Notification Dashboard",
    "https://github.com/tkf882/bulletin-and-notification-dashboard",
    "I designed and implemented a bulletin-board dashboard web application to help users communicate and sort through ideas. For the back-end server-side code, to make it’s operation clean and efficient I utilized express routing with token-authenticating middleware to secure the various HTTP requests to create, edit, or delete a given user’s entries in an SQLITE database, which are then served to the front-end. As for the front-end, the design includes sleek CSS animations, as well as a multitude of search functionalities such as sorting, word searching, and tag selecting to increase the user’s ease of use. Backend documentation can be found here: https://tkf882.github.io/bulletin-and-notification-dashboard/",
    "Mar 2026",
    [
      "Designed and implemented web app that serves as a dashboard for many users to log into and view, create, edit, comment on, sort, search, tag, and delete posts.",
      "Developed a back-end server utilizing SQLITE in NodeJS to efficiently manage a database served to users through middleware token-authenticated routes for requests using ExpressJS and jsonWebToken.",
      "Improved user experience by designing a responsive animated user interface with HTML, CSS, and React."
    ],
    uuidv4()
  ),
  new Project(
    "Yuzudoro: Pomodoro Productivity Timer",
    "https://tkf882.github.io/yuzudoro/",
    "Front-end project. I iterated upon the homepage of a Pomodoro productivity timer, which required user feedback on how and what compositional layout would best suit the app’s needs. In the end my design prioritizes simplicity for the app’s primary use case (the timer), while extra information or functionality was accessible behind additional steps (e.g., scrolling or clicking), improving the user’s experience.",
    "Feb 2026",
    [
      "Designed and built a website (HTML, CSS, Typescript, React, Vite) that assists in and tracks the user’s time spent focusing using the Pomodoro timer technique.",
      "Divided data types into a scheme that can be reliably scaled into a relational databse for backend use.",
      "Iterated and prototyped design with users to integrate further functionality and increase user experience."
    ],
    uuidv4()
  ),
  new Project(
    "The Compendium",
    "Portfolio Website",
    "This website. Basic and stylized portfolio website.",
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
    "I worked alongside teammates to perform skin cancer detection using various computer vision and AI techniques on the ISIC 2024 3D-TBP skin scan data set. Using a multi-modal approach, I designed the image classification portion of the model using convolutional neural networks (ResNet18). Through multi-modal fusion with my teammate’s model, we successfully binary classified the malignancy of skin lesions with a 80% true positive rate.",
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
    "Computer vision project to classify ASL hand images or 3D landmark data.",
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
    "This project involved analyzing the network performance and reliability of certain data transfer protocols. My teammate and I set out to implement a pipelined network transfer protocol app built using Python sockets. I ensured our scheme was responsive to congestion, and potential packet loss/corruption, increasing its reliability. We then utilized Wireshark to analyze and validate the network traffic from the app.",
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
    "My teammates and I were challenged to use the R programming language to detect anomalies inside a large electrical power grid dataset. To do so, we selected the most prominent features from the dataset using principal component analysis to train a hidden markov model (often employed to identify deviations or anomalies in data). Using cross-validation to determine the optimal model from training, we were successfully able to establish a threshold to distinguish anomalous observations from normal observations.",
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
    "Designed a mobile fitness app with a team, we first engaged with the community and surveyed potential users about their routines and preferences. Then, we discussed and iterated upon various prototype UI designs for the app that would best match our audience’s requirements. ",
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
    "I was involved in a project that set out my teammates and I to analyze the correlation between how well a Reddit comment was received and its sentiment rating. To acquire data, we cleaned and extracted data from a compute cluster using Pyspark. To analyze the data, I utilized various statistical tests in Python on the factors of interest, yielding statistically significant results. In addition to this, I trained various machine learning models on the data to predict how well a comment performs based on the sentiment score. My teammates and I documented and presented our findings with various graphical representations of our data.",
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
    "Data science project that utilizes the numpy and pandas libraries in Python.",
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
    "This project of mine involved setting up and configuring a Linux kernel ran in QEMU for a development environment. I was tasked with writing custom system calls in C for the environment to analyze running processes. To do so, this also required the system calls to be safe and secure. I implemented an extensive test suite covering edge cases which tested invalid memory access, invalid values, and others. Through debugging and ensuring the safety and quality of the code, I was successfully able to implement the system calls.",
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
    "Using UML design frameworks and object orient design, we were able to coordinate well and develop clean, documented code. Using the scrum project management framework, through discussion and reports we analyzed and pointed out issues to fix and troubleshoot, and how to modify our tests accordingly. I wrote high-coverage automated regression tests for various software functionalities using Maven/JUNIT in java, achieving upwards to 90% coverage to ensure the quality of our program. I strive to communicate with my teammates to optimally analyze problems we face and progress in an efficient manner. Reviewing each other’s code, documenting, and reporting on issues served as an excellent way to further bolster the quality of our work.",
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
    "I contributed to the Blackfoot revitalization project to help create an audio-visual learning app for the Blackfoot language in Python. The app utilized the Turtle graphics library to provide the user with a visualized interface to aid the learning process. To further facilitate the learning process, I implemented a user quiz feature that allowed the user to translate Blackfoot words to English (or vice versa), while providing an audio queue for the user to test their knowledge. The app was used in a research study for helping to improve indigenous language learning among youth and increase technological proficiency of indigenous communities.",
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