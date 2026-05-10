import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 7,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 8,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 9,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 10,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 11,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 12,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "AI Resumind Analyzer",
    subtitle: "An AI-powered resume analyzer and ATS optimization platform...",
    fullDescription:"An AI-powered resume analysis platform developed using React, TypeScript, TailwindCSS, and modern AI technologies to help users optimize their resumes for ATS systems and recruiters. The platform analyzes resumes in real-time, extracts keywords, provides ATS scoring, and generates intelligent improvement suggestions using NLP and LLM-based processing. It also includes secure PDF processing and scalable cloud integration to deliver a seamless and efficient user experience for job seekers.",
    borderColor: "#8B5CF6",
    // borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/Abhay-Agnihotri01/ATS-Resume-Analyser",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Linklytics",
    subtitle: "A scalable enterprise-grade URL shortener with analytics...",
    fullDescription:"A full-stack enterprise URL shortener platform developed using React, Spring Boot, MySQL, and JWT Authentication to create secure and scalable shortened links with advanced analytics capabilities. The platform provides real-time tracking of user behavior, click-through rates, geographic insights, and engagement statistics through an interactive analytics dashboard. Designed with performance optimization and modern RESTful APIs, Linklytics focuses on delivering a fast, reliable, and user-friendly experience for managing and analyzing digital links efficiently.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Abhay-Agnihotri01/LinkLytics",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Election Analysis - PowerBI",
    subtitle: "An interactive Power BI dashboard designed to analyze large-scale...",
    fullDescription:"An interactive data analytics dashboard developed using Power BI and DAX to visualize and analyze large-scale election datasets with meaningful insights and KPIs. The dashboard includes data cleaning, transformation, and modeling processes to present metrics such as vote share, voter turnout, winning margins, and constituency-level analysis. With dynamic filtering, drill-down capabilities, and visually engaging reports, the project demonstrates the power of business intelligence and data visualization in transforming complex datasets into actionable insights for decision-making and analysis.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Abhay-Agnihotri01/2024-election-result-analysis",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Movie Recommendation System",
    subtitle: "An AI-powered recommendation system built to deliver ...",
    fullDescription:"An intelligent movie recommendation system developed using Python, Scikit-learn, and machine learning algorithms to provide personalized movie suggestions based on user interests and similarity analysis. The project utilizes data preprocessing, feature engineering, and cosine similarity techniques on thousands of movie records to generate accurate recommendations. Integrated with external APIs and an interactive Streamlit interface, the system delivers dynamic movie information, seamless user interaction, and an engaging recommendation experience while demonstrating the practical application of AI and data science in entertainment platforms.",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://github.com/Abhay-Agnihotri01/movie-recommendor-system.git",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Tree Species Classfier",
    subtitle: "An AI-powered image classification system developed to identify...",
    fullDescription:"An AI-powered tree species classification system developed using Python, PyTorch, and deep learning techniques to accurately identify and classify different tree species from images. The project utilizes data preprocessing, augmentation, and transfer learning with advanced neural network models to improve prediction accuracy across multiple classes. Integrated with an interactive Streamlit interface, the application provides real-time predictions, confidence scores, and visual insights, demonstrating the practical use of Artificial Intelligence and computer vision in environmental monitoring, biodiversity analysis, and smart forestry solutions.",
    borderColor: "#22C55E",
    gradient: "linear-gradient(145deg, #22C55E, #000)",
    url: "https://github.com/Abhay-Agnihotri01/tree-species-classifier",
    dad: "500",
  },
];
