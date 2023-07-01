import cartProject from "../assets/img/cart-project.png";
import {FaReact} from "react-icons/fa";
import {SiPostgresql, SiRedux, SiSpringboot, SiTailwindcss} from "react-icons/si";
import wrench from "../assets/img/wrench.webp";
import {TbBrandNextjs, TbBrandReactNative} from "react-icons/tb";
import bagiTimnya from '../assets/img/bagi-timnya.png';
import spm from '../assets/img/thumbs-spm.png'

export const projects = [
    {
        title: "React Cart",
        description: "A simple cart system build by React Js,Tailwind and Redux js.",
        img: {
            src: cartProject,
            alt: "project-1"
        },
        type: "Front end App",
        url: "https://cartsubmission-rajiph.vercel.app/",
        iconList: [
            {
                icon: FaReact,
                name: "React"
            }, {
                icon: SiTailwindcss,
                name: "Tailwindcss"
            },
            {
                icon: SiRedux,
                name: "Redux"
            }
        ]
    },
    {
        title: "Warung makan bahari Mobile",
        description: "Study case about restaurant management. Build by React native. though, their api is keep secret. so we use mockito to mock the api.",
        img: {
            src: wrench,
            alt: "wmb"
        },
        type: "Mobile App",
        url: "https://github.com/felixa1243/wmb-mobile",
        iconList: [
            {
                name: "React Native",
                icon: TbBrandReactNative
            }
        ]
    }, {
        title: "E-Procurement",
        description: "An API to manage procurement process. you can add product,add vendor and add transaction. Built with Spring boot and Postgresql.",
        type: "Rest API",
        url: "https://github.com/felixa1243/e-procurement",
        img: {
            src: wrench,
            alt: "e-procurement"
        },
        iconList: [
            {
                name: "Spring boot",
                icon: SiSpringboot
            },
            {
                name: "postgre sql",
                icon: SiPostgresql
            }
        ]
    },
    {
        title: "Bagi timnya",
        description: "ever want to split your team? but you don't know to start off. use our apps, you can split your team.",
        img: {
            src: bagiTimnya,
            alt: "bagi timnya"
        },
        type: "Front end App",
        url: "https://bagi-timnya.vercel.app",
        iconList: [
            {
                icon: TbBrandNextjs,
                name: "Nextjs"
            }, {
                icon: SiTailwindcss,
                name: "Tailwindcss"
            }
        ]
    },
    // {
    //     title: "Spm web app",
    //     description: "Catalog app for SPM rental. Spm rental is a motorcycle renting service from indonesia. this app include a catalog for product and a blog.",
    //     img: {
    //         src: spm,
    //         alt: "spm-web"
    //     },
    //     type: "Front end App",
    //     url: "https://sewamotorspm.vercel.app/",
    //     iconList: [
    //         {
    //             icon: FaReact,
    //             name: "Reactjs"
    //         }, {
    //             icon: SiTailwindcss,
    //             name: "Tailwindcss"
    //         }
    //     ]
    // },
    // {
    //     title: "Damovie",
    //     description: "Simple app to manage movie collections. Built with React Native and Spring boot. You can do crud activity and find movie by title.",
    //     img: {
    //         src: bagiTimnya,
    //         alt: "Damovie"
    //     },
    //     type: "Fullstack App",
    //     url: "https://sewamotorspm.vercel.app/",
    //     iconList: [
    //         {
    //             icon: TbBrandReactNative,
    //             name: "ReactNative"
    //         }, {
    //             icon: SiSpringboot,
    //             name: "Spring boot"
    //         }, {
    //             icon: SiPostgresql,
    //             name: "Postgresql"
    //         }
    //     ]
    // }
]