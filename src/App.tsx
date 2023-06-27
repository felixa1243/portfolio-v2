import './assets/css/index.css';
import {Card, Dropdown, Modal, Navbar, Reveal, TypeWriter} from "./components";
import {BsFillArrowDownCircleFill, BsFillPersonFill} from "react-icons/bs";
import profile from './assets/img/profile.png';
import {FaGithub, FaReact} from "react-icons/fa";
import {SiPostgresql, SiSpringboot, SiTailwindcss} from "react-icons/si";
import {TbBrandFramerMotion} from "react-icons/tb";
import enigmaCertificate from './assets/img/enigma-certificate.webp'
import SqlCertificate from './assets/img/sql_intermediate certificate.webp'
import {projects} from "./constant/projects";
import {AiFillLinkedin, AiFillMail} from "react-icons/ai";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import rickRoll from './assets/img/rickroll-roll.gif'

function App() {
    const stackList = [
        {
            name: "React",
            icon: FaReact
        }, {
            name: "Tailwindcss",
            icon: SiTailwindcss
        }, {
            name: "Framer motion",
            icon: TbBrandFramerMotion
        }, {
            name: "Spring boot",
            icon: SiSpringboot
        }, {
            name: "Postgres",
            icon: SiPostgresql
        }
    ]
    const ratings = [1, 2, 3, 4, 5]
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const audioRickRoll = new Audio("/assets/rickroll.mp3")
    audioRickRoll.volume = 0.5
    const [rating, setRating] = useState<number>(5)
    type data = {
        name: string,
        email: string,
        message: string
    }
    const [data, setData] = useState<data>({name: "", email: "", message: ""})
    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1500)
    }, [])
    return (
        <div className="h-screen scroll-smooth max-w-screen">
            {
                isLoaded ? (
                    <>
                        <Navbar/>
                        <div
                            className="w-full h-fit flex items-center gap-5 px-5 xs:px-3 py-5 xs:pt-[85px] xs:pb-5 text-white bg-neutral-900 xs:flex-col relative xs:items-start md:pt-[85px] bg-gradient-to-tl from-neutral-800 via-neutral-900 to-black"
                            id={"home"}>
                            <div className="w-1/2 xs:w-full xs:h-fit h-full flex flex-col justify-between relative">
                                <Reveal className="w-fit py-3 overflow-hidden">
                                    <h2 className="text-6xl xs:text-3xl font-bold">Hello, <br/> I'm Rajiph <br/> iqbal
                                        ghandi</h2>
                                </Reveal>
                                <TypeWriter
                                    text="Fullstack developer"
                                    className="font-bold"
                                />
                                <Reveal className="w-fit">
                                    <div className="flex gap-3 mt-5">
                                        <motion.a
                                            href="mailto:felixarajiph@gmail.com"
                                            className="w-fit h-fit border border-2 px-5 py-3 xs:text-[12px] xs:py-3 xs:px-3 gap-3 font-bold font-poppins flex items-center justify-center rounded-xl hover:shadow hover:shadow-white"
                                            whileHover={{
                                                scale: 1.1,
                                                transition: {
                                                    type: "spring",
                                                    duration: 1
                                                }
                                            }}
                                            whileTap={{scale: 0.9}}
                                        >CONTACT
                                            ME <BsFillPersonFill/></motion.a>
                                        <motion.a
                                            href="/assets/cv-rajiph-iqbal.pdf"
                                            className="w-fit h-fit border border-2 px-5 py-3 xs:text-[12px] xs:py-3 xs:px-3 gap-3 font-bold font-poppins flex items-center justify-center rounded-xl hover:shadow hover:shadow-white"
                                            whileHover={{
                                                scale: 1.1,
                                                transition: {
                                                    type: "spring",
                                                    duration: 1
                                                }
                                            }}
                                            whileTap={{scale: 0.9}}
                                        >DOWNLOAD
                                            CV <BsFillArrowDownCircleFill/></motion.a>
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <div className={"flex gap-5 mt-5"}>
                                        {
                                            stackList.map(item => (
                                                <item.icon key={item.name} className={"text-gray-500 text-2xl "}/>))
                                        }
                                    </div>
                                </Reveal>
                            </div>
                            <div
                                className="w-1/2 xs:w-full xs:h-fit lg:h-full flex flex-col justify-center xs:bg-gray-300 xs:hover:bg-gray-100 xs:mt-5 xs:justify-end md:justify-end">
                                <img src={profile}
                                     className="grayscale hover:grayscale-0 object-cover object-center w-full h-fit"
                                     alt="hero"/>
                            </div>
                            <div
                                className={"flex items-center gap-3 absolute bottom-3 xs:bottom-0 left-3 xs:hidden md:hidden"}>
                                <a href={"https://www.linkedin.com/in/rajiph-iqbal-ghandi-426a56186/"}>
                                    <Reveal>
                                        <AiFillLinkedin className={"text-gray-500 text-2xl"}/>
                                    </Reveal>
                                </a>
                                <a href={"https://github.com/felixa1243"}>
                                    <Reveal>
                                        <FaGithub className={"text-gray-500 text-2xl"}/>
                                    </Reveal>
                                </a>
                            </div>
                        </div>
                        <div className="w-full h-fit flex flex-col xs:h-fit relative" id={"profile"}>
                            <div className={"w-full h-fit flex xs:flex-col"}>
                                <div className="xs:h-full bg-gray-200 w-1/2 xs:w-full flex">
                                    <Reveal>
                                        <img src={profile} alt="profile-image"/>
                                    </Reveal>
                                </div>
                                <div
                                    className="flex flex-col gap-3 xs:h-full bg-neutral-800 text-neutral-300 justify-center items-center w-1/2 xs:w-full px-5 py-5">
                                    <Reveal>
                                        <h2 className={"text-2xl"}>Profile</h2>
                                    </Reveal>
                                    <Reveal>
                                        <p className={"text-justify"}>
                                            I am a fullstack developer who work with java spring boot and react with a
                                            passion for
                                            solving problems and building scalable and efficient systems. I am a quick
                                            learner and
                                            enjoy learning new technologies and frameworks. I am excited to continue
                                            building my
                                            skills and gain experience in the field of backend development. In my free
                                            time, I enjoy
                                            reading about technology, tinkering with code, and playing video games.
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full h-fit xs:h-fit py-5 flex flex-col gap-5 justify-center items-center bg-black"
                            id={"projects"}>
                            <Reveal>
                                <h2 className="text-2xl justify-self-start text-amber-500">Projects</h2>
                            </Reveal>
                            <div
                                className="grid xs:grid-cols-1 grid-cols-2 gap-5 xs:justify-center xs:items-center p-5">
                                {
                                    projects.map((item) => {
                                        return (
                                            <a href={item.url} key={item.title} target={"_blank"}>
                                                <Reveal>
                                                    <Card title={item.title}
                                                          description={item.description}
                                                          className={"bg-neutral-900"}
                                                          img={{src: item.img.src, alt: item.img.alt}}
                                                          subtitle={`Type: ${item.type}`}
                                                          optionalChildren={(
                                                              <div className={"w-full flex gap-3 mt-3 text-white"}>
                                                                  {
                                                                      item.iconList.map(ic => {
                                                                          return (
                                                                              <ic.icon key={ic.name}
                                                                                       className={"text-2xl"}/>
                                                                          )
                                                                      })
                                                                  }
                                                              </div>
                                                          )}
                                                    />
                                                </Reveal>
                                            </a>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div
                            className="w-full h-fit xs:h-fit py-5 flex flex-col gap-5 justify-center items-center bg-neutral-900"
                            id={"certificates"}>
                            <Reveal>
                                <h2 className="text-2xl justify-self-start text-amber-500">Certificates</h2>
                            </Reveal>
                            <div
                                className={"grid xs:grid-cols-1 grid-cols-2 gap-5 xs:justify-center xs:items-center p-5"}>
                                <Reveal>
                                    <Card title={"Enigma Camp Certificate"}
                                          className={"bg-black rounded-xl"}
                                          description={"A certificate for completing a Java,Spring boot,Postgresql,Javascript,React bootcamp."}
                                          img={{src: enigmaCertificate, alt: "enigma-certificate"}}/>
                                </Reveal>
                                <Reveal>
                                    <Card title={"SQL Intermediate Certificate"}
                                          className={"bg-black rounded-xl"}
                                          description={"A certificate for completing a challenge in Hackerrank SQL Certification."}
                                          img={{src: SqlCertificate, alt: "Sql certificate"}}/>
                                </Reveal>
                            </div>
                        </div>
                        <div
                            className={"w-full h-fit xs:h-fit py-5 flex flex-col gap-5 justify-center items-center bg-black"}
                            id={"contact"}>
                            <Reveal>
                                <h2 className="text-2xl justify-self-start text-amber-500">Contact me</h2>
                            </Reveal>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault()
                                    const formData = new FormData()
                                    formData.append("name", data.name)
                                    formData.append("email", data.email)
                                    formData.append("message", data.message)
                                    formData.append("rating", String(rating))
                                    try {
                                        await fetch(import.meta.env.VITE_google_appscript_url, {
                                            method: "POST",
                                            body: formData
                                        })
                                        setModalOpen(true)
                                        audioRickRoll.play()
                                    } catch (err) {
                                        console.log(err)
                                    }
                                }
                                }
                                className={"w-1/2 xs:w-full flex flex-col gap-2 px-10"}>
                                <label htmlFor={"name"} className={"text-white cursor-pointer"}>Name:</label>
                                <input
                                    id={"name"}
                                    placeholder={"enter your name"}
                                    onChange={e => setData({...data, name: e.target.value})}
                                    className={"py-2 px-2 rounded-lg focus:outline-none"}
                                    type={"text"}/>
                                <label htmlFor={"email"} className={"text-white cursor-pointer"}>E-mail:</label>
                                <input
                                    id={"email"}
                                    placeholder={"enter your e-mail"}
                                    className={"py-2 px-2 rounded-lg focus:outline-none"}
                                    onChange={e => setData({...data, email: e.target.value})}
                                    type={"email"}/>
                                <label htmlFor={"message"} className={"text-white cursor-pointer"}>Message:</label>
                                <textarea
                                    placeholder={"enter your message here!"}
                                    className={"h-[150px] rounded-lg focus:outline-none px-3 py-2"}
                                    onChange={e => setData({...data, message: e.target.value})}
                                    id={"message"}></textarea>
                                <p className={"text-white"}>Rating</p>
                                <Dropdown title={String(rating)}>
                                    <Dropdown.Body>
                                        {
                                            ratings.map((item, index) => {
                                                return (
                                                    <p className={"hover:bg-gray-300 w-full px-3 py-1"}
                                                       onClick={() => setRating(item)} key={index}>{item}</p>
                                                )
                                            })
                                        }
                                    </Dropdown.Body>
                                </Dropdown>
                                <button
                                    className={"bg-amber-600 w-fit flex items-center gap-2 rounded-lg px-3 py-2 text-white"}
                                    type={"submit"}
                                >Send <AiFillMail/>
                                </button>
                                {
                                    modalOpen && (
                                        <Modal
                                            closeOnClickOutside={true}
                                            className={" backdrop-blur-[4px] "}
                                            onClose={() => setModalOpen(false)}>
                                            <Modal.Head className={"bg-neutral-800"}>
                                                <p className={"text-white"}>Success!</p>
                                            </Modal.Head>
                                            <Modal.Body className={"bg-neutral-900"}>
                                                <div className={"text-white"}>
                                                    Your message is sent! &#127881;
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                    )
                                }
                            </form>
                        </div>
                    </>

                ) : (
                    <AnimatePresence>
                        <motion.div
                            className={"max-w-screen h-screen flex-col bg-gradient-to-tl from-neutral-800 via-neutral-900 to-black text-white flex justify-center items-center"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0}}
                        >
                            <p>Please wait...</p>
                            <img
                                src={rickRoll}
                                alt={"rick-roll"}
                                className={"w-[150px]"}
                            />
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div>
    );
}

export default App;
