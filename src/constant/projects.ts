import cartProject from "../assets/img/cart-project.png";
import {FaReact} from "react-icons/fa";
import {SiPostgresql, SiRedux, SiSpringboot, SiTailwindcss} from "react-icons/si";
import wrench from "../assets/img/wrench.webp";
import {TbBrandReactNative} from "react-icons/tb";

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
    }
]