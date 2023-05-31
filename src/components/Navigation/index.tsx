import {useState} from 'react';
import {useMobile} from "../../hooks";
import {motion} from "framer-motion";

const Navigation = () => {
    const navigation = [
        {
            text: 'Home',
            href: "#"
        },
        {
            text: 'Profile',
            href: "#profile"
        },
        {
            text: 'Projects',
            href: "#projects"
        },
        {
            text: 'Certificates',
            href: "#certificates"
        },
        {
            text: 'Contact',
            href: '#contact'
        }
    ]
    const currentPath = location.pathname;
    const [isActive, setIsActive] = useState(false);
    const isMobile = useMobile()
    return (
        <div
            className={"w-full h-[75px] flex justify-between border-b-neutral-500 p-10 fixed top-0 z-[5] shadow-xl bg-[rgba(0,0,0,0.9)] backdrop-blur-sm"}>
            <div className="md:w-1/4 xs:w-1/2 text-white xs:order-2 h-full flex items-center">
                <h2 className={"relative text-lg"}>Iqbal Network
                    <span className={"absolute top-0 text-sm"}>v2</span>
                </h2>
            </div>
            {
                isMobile && (
                    <motion.div
                        animate={isActive ? {width: '50%'} : {width: "0"}}
                        transition={{duration: !isActive ? 1 : 0.3}}
                        className={`absolute h-screen flex flex-col gap-3 pt-5 left-0 top-[75px] bg-neutral-800 md:hidden`}>
                        {
                            navigation.map((el, index) => (
                                <motion.a
                                    href={el.href}
                                    key={el.text}
                                    animate={isActive ? {x: 0} : {x: -150}}
                                    transition={{duration: index * 0.1}}
                                    className={`${
                                        el.href === currentPath ? 'text-blue-500' : 'text-gray-400'
                                    } hover:text-gray-100 duration-300 ease-in-out font-bold px-3 block`}
                                >
                                    {el.text.toUpperCase()}
                                </motion.a>
                            ))}
                    </motion.div>
                )
            }
            {
                isMobile ? (
                    <div
                        onClick={() => setIsActive(!isActive)}
                        className={"flex w-1/2 items-center xs:order-1"}
                    >
                        <div
                            className="flex flex-col gap-[5px] w-[30px] justify-center h-[30px] px-[3px] rounded-md hover:cursor-pointer">
                            <span className="h-[2px] w-full bg-gray-500 block rounded-full"/>
                            <motion.span
                                className="h-[2px] w-full bg-gray-500 block rounded-full"
                                animate={isActive ? {x:-3}:{x:0}}
                            />
                            <span className="h-[2px] w-full bg-gray-500 block rounded-full"/>
                        </div>
                    </div>
                ) : (
                    <div className="md:w-[70%] h-full flex items-end gap-3 p-5">
                        {navigation.map((el) => (
                            <a
                                href={el.href}
                                key={el.text}
                                className={`${
                                    el.href === currentPath ? 'text-blue-500' : 'text-gray-400'
                                } nav hover:text-gray-100 font-bold`}
                            >
                                {el.text.toUpperCase()}
                            </a>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Navigation;
