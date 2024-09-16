// src/data/index.ts

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
    link: "", // Provide a link if available
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
  { name: "Work Experience", link: "#work experience" },
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

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  // Add more testimonials as needed
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  // Add more companies as needed
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // Add more work experiences as needed
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
  },
  {
    id: 2,
    title: "Placement Coordinator",
    content: ` 
    • Built and maintained strong relationships with 
employers and industry clients to create 
placement opportunities.
    • Coordinated campus recruitment drives and 
events with effective communication and 
organizational skills.
    • Managed the placement process, including 
scheduling interviews and communicating with 
students and recruiters, demonstrating 
leadership, adaptability, and a proactive 
approach.
    • Efficiently managed multiple tasks and 
deadlines during recruitment drives and 
events.`,
  },
  // Add more timeline events as needed
];

// Define any other necessary data or functions here
