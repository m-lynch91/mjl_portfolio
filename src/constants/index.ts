import { Ability } from "../types/Ability";
import { CounterItem } from "../types/CounterItem";
import { NavLink } from "../types/NavLink";
import { Word } from "../types/Word"
import { Image } from "../types/Image"
import { TechStackIcon } from "../types/TechStackIcon";
import { ExperienceCard } from "../types/ExperienceCard";
import { Testimonial } from "../types/Testimonial";

const mobileScreenSize = 768; // px
const tabletScreenSize = 1024; // px

const navLinks: NavLink[] = [
	{
		name: "Work",
		link: "#work"
	},
	{
		name: "Experience",
		link: "#experience"
	},
	{
		name: "Skills",
		link: "#skills"
	},
	{
		name: "Testimonials",
		link: "#testimonials"
	},
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
	{ value: 2, suffix: "+", label: "Years of Experience" },
	{ value: 200, suffix: "+", label: "Satisfied Clients" },
	{ value: 2, suffix: "+", label: "Completed Projects" },
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
		name: "React Developer",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "Python Developer",
		imgPath: "/images/logos/python.svg",
	},
	{
		name: "Backend Developer",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "Interactive Developer",
		imgPath: "/images/logos/three.png",
	},
	{
		name: "Project Manager",
		imgPath: "/images/logos/git.svg",
	},
]

const techStackIcons: TechStackIcon[] = [
	{
		name: "React Developer",
		modelPath: "/models/react_logo-transformed.glb",
		scale: 1,
		rotation: [0, 0, 0],
	},
	{
		name: "Python Developer",
		modelPath: "/models/python-transformed.glb",
		scale: 0.8,
		rotation: [0, 0, 0],
	},
	{
		name: "Backend Developer",
		modelPath: "/models/node-transformed.glb",
		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	{
		name: "Interactive Developer",
		modelPath: "/models/three.js-transformed.glb",
		scale: 0.05,
		rotation: [0, 0, 0],
	},
	{
		name: "Project Manager",
		modelPath: "/models/git-svg-transformed.glb",
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
]

const expCards: ExperienceCard[] = [
	{
		review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
		imgPath: "/images/exp1.png",
		logoPath: "/images/rcmp-logo1.png",
		title: "Programmer Analyst",
		date: "December 2024 - Present",
		responsibilities: [
			"Designed and executed Oracle database schema modifications using Data Definition Language (DDL) changes, ensuring backward compatibility and supporting new feature deployments.",
			"Refactored Java Server Faces markup and Java EE enterprise beans, resolving critical issues that previously blocked data persistence and validation error visibility.",
			"Worked with stakeholders and technology partners to ensure solutions met technical direction, requirements, performance, and deadline expectations.",
		],
	},
	{
		review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
		imgPath: "/images/exp1.png",
		logoPath: "/images/rcmp-logo1.png",
		title: "Junior Programmer Analyst",
		date: "September 2023 - December 2024",
		responsibilities: [
			"Collaborated with Technical Advisor to design and implement a REST API to modernize Missing Children Persons and Unidentified Remains application using Spring Boot.",
			"Enhanced the RCMP School Action For Emergencies application’s offline reporting capabilities, increasing the number of schools generating reports.",
			"Optimized Java EE bean by integrating a virtualizer, reducing Jasper Report object memory consumption and enabling processing of larger report file sizes.",
		],
	},
	{
		review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
		imgPath: "/images/exp2.png",
		logoPath: "/images/buckland-logo1.png",
		title: "Junior Developer",
		date: "January 2023 - April 2023",
		responsibilities: [
			"Built multiple UI components for a new company web application using Blazor and Radzen.",
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
	},
	{
		name: "Marvin McKinney",
		mentions: "@marvinmckinney",
		review:
			"Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
		imgPath: "/images/client5.png",
	},
	{
		name: "Floyd Miles",
		mentions: "@floydmiles",
		review:
			"Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
		imgPath: "/images/client4.png",
	},
	{
		name: "Albert Flores",
		mentions: "@albertflores",
		review:
			"Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
		imgPath: "/images/client6.png",
	},
];

const socialImgs: Image[] = [
	{
		name: "insta",
		imgPath: "/images/insta.png",
	},
	{
		name: "fb",
		imgPath: "/images/fb.png",
	},
	{
		name: "x",
		imgPath: "/images/x.png",
	},
	{
		name: "linkedin",
		imgPath: "/images/linkedin.png",
	},
];

export {
	words,
	navLinks,
	counterItems,
	logoIconsList,
	abilities,
	techStackImgs,
	techStackIcons,
	expCards,
	expLogos,
	testimonials,
	socialImgs,
	mobileScreenSize,
	tabletScreenSize,
}