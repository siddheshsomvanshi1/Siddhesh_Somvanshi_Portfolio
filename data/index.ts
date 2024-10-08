// src/data/index.ts

import { Card } from "@/components/ui/ContainerScrollAnimation";
import { link } from "fs";

// Define the Project interface and project data in index.ts

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

// Sample project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Incronix",
    des: `Designed user-friendly Figma prototypes to enhance functionality and aesthetics. Optimized the company website with React.js, EmailJS API, and cPanel, reducing load times by 40% and improving cross-platform compatibility. Developed a Web Quotation Calculator, cutting data collection time by 30% and streamlining client requirements. Maintained documentation and conducted testing, showcasing strong technical skills.`,
    img: "/project1.png",
    iconLists: [
      "/tail.svg",
      "/html.svg",
      "/css.svg",
      "/bootstrap.svg",
      "uiux.png",
      "sqlite.svg",
      "figma.svg",
    ],
    link: "https://incronix.com/", // Provide a link if available
  },
  {
    id: 2,
    title: "PetMed",
    des: `Developed an Android app for animal healthcare appointments with SQLite for efficient data storage. The app reduces paper use, aids veterinarians in managing records and generating online prescriptions, and ensures easy access to client history for future checkups. This project showcases technical expertise and a proactive approach to real-world challenges.`,
    img: "petmed.png",
    iconLists: ["android.svg", "xml.svg", "java.svg", "sqlite.svg"],
    link: "", // Provide a link if available
  },
  {
    id: 3,
    title: "MindSpark",
    des: `Developed a user-friendly web-based learning platform with 
a focus on visual design and user experience.
Implemented user validation, resource management, and 
student interaction features. Organized learning materials 
for easy access and management, demonstrating innovation, 
problem-solving skills, and a proactive approach to 
improving educational processes.`,
    img: "mindspark.png",
    iconLists: [
      "/tail.svg",
      "/html.svg",
      "/css.svg",
      "/bootstrap.svg",
      "sqlite.svg",
    ],
    link: "", // Provide a link if available
  },
  {
    id: 4,
    title: "VS Digitals",
    des: `VS Digitals is an e-commerce platform that simplifies online shopping for laptops and mobile phones. It offers users the ability to browse, preview, and purchase products from anywhere, anytime. With detailed product information, competitive pricing, and a smooth checkout process, VS Digitals makes shopping convenient and accessible.`,
    img: "VSDigitals.png",
    iconLists: ["java.svg", "sqlite.svg"], // List any relevant icons or leave empty
    link: "", // Provide a link if available
  },
];

// Export any other relevant data
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#work experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative flex items-center justify-center overflow-hidden",
    imgClassName: "w-full h-auto max-w-96 max-h-full object-cover",
    titleClassName: "justify-center",
    img: "/siddhesh6.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "",
    description:
      "Hello! I’m Siddhesh, a dedicated software developer with Master’s and Bachelor’s degrees in Computer Applications. My skills include HTML, CSS, JavaScript, Java, Android, Python, SQL, and experience with frameworks like React.js, Bootstrap, Spring, and Hibernate. I’m proficient with tools such as Figma, Android Studio, Eclipse, and NetBeans, and follow methodologies like Agile and DevOps. My professional background includes developing prototypes and web applications during my internship, earning certifications in SQL and Java from HackerRank, and serving as a Placement Coordinator and IEEE member. I'm always excited to embrace new challenges and technologies. Let’s connect if you’re interested in collaborating or learning more about my work!",
    className:
      "md:col-span-3 md:row-span-2 flex items-center justify-center p-6 relative",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "text-center md:text-left text-lg font-medium mb-4",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 flex items-center justify-center",
    imgClassName: "hidden",
    titleClassName: "text-center text-lg font-bold",
    img: "",
    spareImg: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/siddheshsomvanshi1",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/siddheshsomvanshi/",
  },
  // Add more social media icons as needed
];

export const timelineData = [
  {
    title: "Software Developer Internship",
    company: "Incronix Technology",
    content: `
      • Designed user-friendly prototypes using Figma and AI tools, enhancing functionality and aesthetics.
      • Launched and optimized the company’s website with React.js, EmailJS API, and cPanel, improving load times by 40% and ensuring cross-platform compatibility.
      • Developed a Web Quotation Calculator that reduced data collection time by 30% and provided instant, accurate quotations.
      • Maintained technical documentation, conducted unit and integration testing, ensuring high application quality.
    `,
    link: "https://incronix.com/", // Incronix specific link
  },
  {
    id: 2,
    title: "Placement Coordinator",
    company: "Indira Group Of Institute",
    content: ` 
      • Built and maintained strong relationships with employers and industry clients to create placement opportunities.
      • Coordinated campus recruitment drives and events with effective communication and organizational skills.
      • Managed the placement process, including scheduling interviews and communicating with students and recruiters, demonstrating leadership, adaptability, and a proactive approach.
      • Efficiently managed multiple tasks and deadlines during recruitment drives and events.
    `,
    link: "https://indiraedu.com/", // Indira Group specific link
  },
  // Add more timeline events as needed
];

export const cards = [
  {
    title: "Foundations of User Experience (UX) Design",
    description: "Certification by Google",
    src: "/c1.png",
    ctaText: "Check",
    ctaLink:
      "https://www.coursera.org/account/accomplishments/verify/3YLVLXFSCSCQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    content:
      "This certification teaches UX basics, including user-centered design, prototyping, usability, and accessibility. It helps beginners understand the design process and create user-friendly products, preparing them for a career in UX.",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    description: "Certification by Google",
    src: "/c2.jpg",
    ctaText: "Check",
    ctaLink:
      "https://www.coursera.org/account/accomplishments/verify/7VXB8FWJ9HW6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    content:
      "This course teaches how to leverage data for informed decision-making, using structured problem-solving approaches, spreadsheets for data management, and key concepts of structured thinking.",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    description: "Certification by Google",
    src: "/c3.jpg",
    ctaText: "Check",
    ctaLink:
      "https://www.coursera.org/account/accomplishments/verify/8898YY9SHKPF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    content:
      "Data analytics involves data (raw facts), data analysis (interpretation), and data ecosystems (sources). Analytical thinking uses data-driven problem-solving. Tools include spreadsheets, SQL, and Tableau. Data analysts analyze data to provide insights for decision-making.",
  },
  {
    title: "Java HackerRank",
    description: "Certification by HackerRank",
    src: "/c4.jpg",
    ctaText: "Check",
    ctaLink: "https://www.hackerrank.com/certificates/abb26ef60982",
    content:
      "This certificate validates foundational Java programming skills, including syntax, object-oriented concepts, and basic application development.",
  },
  {
    title: "IEEE Student Member",
    description: "Certification by IEEE",
    src: "/c5.jpg",
    ctaText: "Check",
    ctaLink: "https://example.com/card5",
    content:
      "As an IEEE Student Member, I engage with a global network of professionals, access resources for learning and development, and participate in events that enhance my knowledge in engineering and technology.",
  },
  {
    title: "Advance Java",
    description: "Certification by Gryphon",
    src: "/c6.jpg",
    ctaText: "Check",
    ctaLink: "https://example.com/card6",
    content:
      "This certificate demonstrates proficiency in advanced Java concepts, including multithreading, Java Server Pages (JSP), Servlets, and frameworks such as Spring and Hibernate, equipping me for complex application development.",
  },
];
