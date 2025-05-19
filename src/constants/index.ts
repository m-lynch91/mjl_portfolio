import { Ability } from "../types/Ability";
import { CounterItem } from "../types/CounterItem";
import { NavLink } from "../types/NavLink";
import { Word } from "../types/Word"
import { Image } from "../types/Image"
import { ExperienceCard } from "../types/ExperienceCard";
import { Testimonial } from "../types/Testimonial";

const mobileScreenSize = 768; // px
const tabletScreenSize = 1024; // px
const linkedInProfile = "https://www.linkedin.com/in/micheal-lynch-261938223/";
const githubProfile = "https://github.com/m-lynch91"

const navLinks: NavLink[] = [
	{
		name: "About",
		link: "#about"
	},
	{
		name: "Projects",
		link: "#projects"
	},
	{
		name: "Experience",
		link: "#experience"
	},
	{
		name: "Skills",
		link: "#skills"
	},
	// {
	// 	name: "Testimonials",
	// 	link: "#testimonials"
	// },
]

const words: Word[] = [
	{ text: "Ideas", imgPath: '/images/ideas.svg' },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
];

const counterItems: CounterItem[] = [
	{ value: 2, suffix: "+", label: "Years of Software Development Experience" },
	{ value: 5, suffix: "+", label: "Enterprise Web Applications" },
	{ value: 9, suffix: "+", label: "Years of Technical Expertise" },
]

const logoIconsList = [
	{
		imgPath: "/images/logos/company-logo-1.png",
	},
	{
		imgPath: "/images/logos/company-logo-2.png",
	},
	{
		imgPath: "/images/logos/company-logo-3.png",
	},
	{
		imgPath: "/images/logos/company-logo-4.png",
	},
	{
		imgPath: "/images/logos/company-logo-5.png",
	},
	{
		imgPath: "/images/logos/company-logo-6.png",
	},
	{
		imgPath: "/images/logos/company-logo-7.png",
	},
	{
		imgPath: "/images/logos/company-logo-8.png",
	},
	{
		imgPath: "/images/logos/company-logo-9.png",
	},
	{
		imgPath: "/images/logos/company-logo-10.png",
	},
	{
		imgPath: "/images/logos/company-logo-11.png",
	},
];

const abilities: Ability[] = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
]

const techStackImgs: Image[] = [
	{
		name: "JAVA",
		imgPath: "/images/logos/java.png",
	},
	{
		name: "SPRING BOOT",
		imgPath: "/images/logos/springboot.png",
	},
	{
		name: "C#",
		imgPath: "/images/logos/csharp.png",
	},
	{
		name: "JAVASCRIPT",
		imgPath: "/images/logos/javascript.png",
	},
	{
		name: "NODE JS",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "REACT",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "TAILWIND",
		imgPath: "/images/logos/tailwind.png",
	},
	{
		name: "MYSQL",
		imgPath: "/images/logos/mysql.png",
	},
	{
		name: "GIT",
		imgPath: "/images/logos/git.png",
	},

]

const expCards: ExperienceCard[] = [
	{
		imgPath: "/images/exp1.png",
		logoPath: "/images/rcmp-logo1.png",
		title: "Programmer Analyst",
		date: "December 2024 - May 2025",
		responsibilities: [
			"Designed and executed Oracle database schema modifications using Data Definition Language (DDL) changes, ensuring backward compatibility and supporting new feature deployments.",
			"Restored reliable data persistence and validation error visibility, achieving consistent form feedback, by refactoring JSF pages and Java EE beans",
			"Designed intuitive front-end features by collaborating with stakeholders to translate business needs into clear technical and UX requirements.",
		],
	},
	{
		imgPath: "/images/exp1.png",
		logoPath: "/images/rcmp-logo1.png",
		title: "Junior Programmer Analyst",
		date: "September 2023 - December 2024",
		responsibilities: [
			"Collaborated with Technical Advisor to design and implement a REST API to modernize Missing Children, Persons, and Unidentified Remains application using Spring Boot.",
			"Reduced JasperReport object memory consumption, enabling much larger exports without failures, by refactoring JasperReport templates.",
			"Addressed UAT feedback with rapid fixes, ensuring School Action For Emergencies milestone release was delivered on schedule.",
		],
	},
	{
		imgPath: "/images/exp2.png",
		logoPath: "/images/buckland-logo1.png",
		title: "Junior Developer",
		date: "January 2023 - April 2023",
		responsibilities: [
			"Implemented REST API endpoints in C# / .NET, facilitating seamless communication between the front-end and back-end services.",
			"Wrote SQL scripts for data processing, resolving priority JIRA tickets and improving Business Analyst workflow.",
			"Delivered code updates through Azure DevOps, incorporating peer feedback to maintain high code quality and adherence to best practices."
		],
	},

];

const expLogos: Image[] = [
	{
		name: "rcmpLogo",
		imgPath: "/images/rcmp-logo.png",
	},
	{
		name: "bucklandLogo",
		imgPath: "/images/buckland-logo.png",
	}
];

const testimonials: Testimonial[] = [
	{
		name: "Esther Howard",
		mentions: "@estherhoward",
		review:
			"I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
		imgPath: "/images/client1.png",
	},
	{
		name: "Wade Warren",
		mentions: "@wadewarren",
		review:
			"Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
		imgPath: "/images/client3.png",
	},
	{
		name: "Guy Hawkins",
		mentions: "@guyhawkins",
		review:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		imgPath: "/images/client2.png",
	}
];


export {
	words,
	navLinks,
	counterItems,
	logoIconsList,
	abilities,
	techStackImgs,
	expCards,
	expLogos,
	testimonials,
	mobileScreenSize,
	tabletScreenSize,
	linkedInProfile,
	githubProfile
}