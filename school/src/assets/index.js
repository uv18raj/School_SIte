import {
  FaAngleDoubleDown,
  FaCertificate,
  FaChalkboardTeacher,
  FaQuoteRight,
  FaSchool,
} from "react-icons/fa";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpeg";
// import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
// import image12 from "../assets/image12.jpg";
// import image13 from "../assets/image13.jpg";
// import image14 from "../assets/image14.png";
import image15 from "../assets/image15.jpg";
// import image16 from "../assets/image16.jpg";

export const navLinks = [
  {
    id: "Home",
    link: "",
  },
  {
    id: "About",
    link: "about",
  },
  {
    id: "Facilities",
    link: "facility",
  },
  {
    id: "Gallery",
    link: "gallery",
  },
  {
    id: "Contact Us",
    link: "contact",
  },
  {
    id: "Admission",
    link: "apply",
  },
  {
    id: "Owner Login",
    link: "/login",
  },
];

export const missionVision = [
  {
    id: 1,
    title: "Our Mission",
    text: "At school, our mission is to provide a dynamic and inclusive learning environment that fosters academic excellence, creativity, and personal growth. We are dedicated to cultivating a community of learners who are inspired to reach their highest potential and become compassionate global citizens.",
    icon: <FaAngleDoubleDown />,
  },
  {
    id: 2,
    title: "Our Vision",
    text: "At school, our vision is driven by a passion for excellence in education and a dedication to creating a nurturing environment where every student can thrive. We strive to be a beacon of educational innovation, setting new standards for academic excellence and holistic development.",
    icon: <FaAngleDoubleDown />,
  },
];

export const whySchool = [
  {
    id: 1,
    title: "Good Facilities",
    reason:
      "We take pride in offering students an exceptional learning environment that is supported by top-notch facilities. We believe that a well-equipped setting is instrumental in enhancing our students' educational experience",
    icon: <FaSchool />,
  },
  {
    id: 2,
    title: "Certificates",
    reason:
      "A reason why students should come to our school is the opportunity to earn valuable certificates that can open doors to future success. These certificates are a testament to the diverse skills our students gain during their time with us",
    icon: <FaCertificate />,
  },
  {
    id: 3,
    title: "Conducive Learning",
    reason:
      "At our school, we pride ourselves on creating a learning environment that is truly conducive to unleashing the full potential of each and every student. We invite you to join our vibrant learning community",
    icon: <FaChalkboardTeacher />,
  },
];

export const testimonials = [
  {
    id: 1,
    icon: <FaQuoteRight />,
    image: image3,
    name: "Ashish",
    testimonial:
      "I cannot express enough gratitude for the exceptional education I have received at school. The school's nurturing and supportive environment allowed me to flourish both academically and personally. The dedicated teachers and their innovative teaching methods sparked my curiosity and passion for learning",
  },
  {
    id: 2,
    icon: <FaQuoteRight />,
    image: image4,
    name: "Kavya",
    testimonial:
      "My time at school has been nothing short of transformative. From the first day I stepped foot on campus, I felt welcomed and supported by the caring staffs and fellow students. I am grateful for the incredible opportunities I had at school, which have prepared me for a bright future in higher education and beyond.",
  },
  {
    id: 3,
    icon: <FaQuoteRight />,
    image: image3,
    name: "Ashish",
    testimonial:
      "I can confidently say that my time at school has been the most enriching and fulfilling experience of my life. The school's emphasis on holistic development helped me not only excel academically but also grow as an individual.",
  },
  {
    id: 4,
    icon: <FaQuoteRight />,
    image: image4,
    name: "Emily Martinez",
    testimonial:
      "I've been inspired to pursue my passions and have discovered a love for science that I never knew I had. Moreover, the sense of community at our school is heartwarming. I've made lifelong friends and feel like I'm part of a big family.",
  },
  {
    id: 5,
    icon: <FaQuoteRight />,
    image: image3,
    name: "Anthony Joshua",
    testimonial:
      "I transferred to school during my sophomore year, and it was one of the best decisions I ever made. The transition was seamless, thanks to the warm and supportive environment created by both teachers and fellow students.",
  },
];

// export const footerLinks = [
//     {
//         id: 1,
//         link: "Home",
//     },
//     {
//         id: 2,
//         link: "About",
//     },
//     {
//         id: 3,
//         link: "Facility",
//     },
//     {
//         id: 4,
//         link: "Programs",
//     },
//     {
//         id: 5,
//         link: "Apply",
//     },
// ]

export const AboutPart = [
  {
    id: 1,
    image: image7,
    title: "Programs",
    text: "Our programs are designed to ignite the spark of curiosity and innovation in students. Through hands-on experiments, projects, and collaborative activities, students explore the fascinating realms of science, technology, engineering, and others.",
  },
  {
    id: 2,
    image: image8,
    title: "Facilities",
    text: "we take pride in providing state-of-the-art facilities that create an ideal environment for holistic learning and growth. Our commitment to excellence extends beyond the classroom, ensuring that every aspect of a student's educational journey is supported.",
  },
  {
    id: 3,
    image: image9,
    title: "Faculties",
    text: "Our faculties play a pivotal role in shaping the future of our students. Their unwavering dedication to academic excellence creates an environment where students can thrive and transform into well-rounded individuals ready to make a positive impact on the world.",
  },
];

export const facilities = [
  {
    id: 3,
    image: image11,
    title: "Sport Facility",
    text: "Our school offers a range of sports facilities, playground, and courts for various sports, encouraging students to stay active and develop a spirit of sportsmanship.",
  },
  {
    id: 7,
    image: image15,
    title: "Medicare",
    text: "The well-being of our students is of utmost importance. Our school provides a dedicated medical room and trained staff to attend to any health-related needs and emergencies.",
  },
  {
    id: 9,
    image: image9,
    title: "Modern Classrooms",
    text: "Our school boasts spacious and well-equipped modern classrooms designed to create an optimal learning environment. Each classroom is thoughtfully arranged to enhance student engagement and foster a collaborative atmosphere.",
  },
];
