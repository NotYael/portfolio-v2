const about = {
  title: "Nice to meet you!",
  description:
    "My name is Danyael, but feel free to call me Yael. I am a 4th year Computer Science student from the University of the Philippines Diliman. I am a full-stack developer with a passion for creating well designed and functional applications. I am also a tech and finance enthusiast. I love playing video games, watching movies and series, and reading books in my spare time. Currently, I am studying to become a Cloud Engineer.",
};

const projects = [
  {
    id: 1,
    title: "Project 1",
    short_description:
      "This model was designed to streamline the process of book genre classification. It was trained on a labeled dataset of 4,656 books across 10 genres.",
    long_description: "Description 2",
    image_link: "/me.JPG",
    other_images: [
      "https://www.google.com",
      "https://www.google.com",
      "https://www.google.com",
    ],
    repository_link: "https://www.google.com",
    logos: {
      react: "/linkedin.svg",
      node: "/linkedin.svg",
      python: "/linkedin.svg",
    },
  },
  {
    id: 2,
    title: "Project 2",
    short_description:
      "This model was designed to streamline the process of book genre classification. It was trained on a labeled dataset of 4,656 books across 10 genres.",
    long_description: "Description 2",
    image_link: "/me.JPG",
    other_images: [
      "https://www.google.com",
      "https://www.google.com",
      "https://www.google.com",
    ],
    repository_link: "https://www.google.com",
    logos: {
      react: "/linkedin.svg",
      node: "/linkedin.svg",
      python: "/linkedin.svg",
      rah: "/linkedin.svg",
    },
  },
  {
    id: 3,
    title: "Project 2",
    short_description:
      "This model was designed to streamline the process of book genre classification. It was trained on a labeled dataset of 4,656 books across 10 genres.",
    long_description: "Description 2",
    image_link: "/me.JPG",
    other_images: [
      "https://www.google.com",
      "https://www.google.com",
      "https://www.google.com",
    ],
    repository_link: "https://www.google.com",
    logos: {
      react: "/linkedin.svg",
      node: "/linkedin.svg",
      python: "/linkedin.svg",
      rah: "/linkedin.svg",
    },
  },
];

const experience = [
  {
    id: 1,
    title: "Software Developer Consultant",
    company: "60Hz BV.",
    date: "April 2025 - Present",
    location: "Spijkerstraat, The Netherlands",
    description:
      "Worked on a backend dashboard for the company's operations. Currently, I am working on a Travel Mobile App utilizing React Native, contributing to its development and functionality from a remote setting.",
    technologies: [
      "Angular",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "React Native",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Engineering Intern",
    company: "Enstack Technologies Inc.",
    date: "June - August 2024",
    location: "Bonifacio Global City, Taguig City",
    description:
      "During my internship, I actively resolved application bugs and significantly enhanced the user interface and experience. My contributions included building a sales report graph using Chart.js and a product report table. I also developed an AWS Lambda function to modify responses from the NinjaVan API and was responsible for developing and integrating backend APIs to support various application features.",
    technologies: ["Angular", "TypeScript", "Flask", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Student Assistant",
    company: "University Computer Center",
    date: "September 2023 - Present",
    location: "University of the Philippines Diliman, Quezon City",
    description:
      "As a student assistant, I play a crucial role in assisting with the operations of the Diliman Network (DILNET) Helpdesk. My responsibilities also encompass maintaining the overall reliability of the university's networks.",
    technologies: [],
  },
];

export { about, projects, experience };
