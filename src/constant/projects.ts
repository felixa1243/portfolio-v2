import cartProject from "../assets/img/cart-project.png";
import {FaReact} from "react-icons/fa";
import {SiPostgresql, SiRedux, SiSpringboot, SiTailwindcss} from "react-icons/si";
import wrench from "../assets/img/wrench.webp";
import {TbBrandReactNative} from "react-icons/tb";

export const projects = [
    {
        title: "React Cart",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos laborum pariatur placeat rem. Cumque perspiciatis quod reprehenderit soluta veniam.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos laborum pariatur placeat rem. Cumque perspiciatis quod reprehenderit soluta veniam.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos laborum pariatur placeat rem. Cumque perspiciatis quod reprehenderit soluta veniam.",
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