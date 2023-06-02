import {FC, HTMLProps, useState, useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";

type DropdownProps = {
    title: string;
} & HTMLProps<HTMLDivElement>;

type BodyProps = HTMLProps<HTMLDivElement>;

const Dropdown: FC<DropdownProps> & { Body: FC<BodyProps> } = ({
                                                                   children,
                                                                   className,
                                                                   title,
                                                               }) => {
    const [active, setActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className={
                "bg-white flex flex-col relative rounded-md hover:cursor-pointer " +
                className
            }
            onClick={() => {
                setActive(!active);
            }}
        >
            <p className={"px-5 py-1"}>{title}</p>
            {active && (
                <div className={"px-2 flex flex-col w-full mt-3"}>
                    {children}
                </div>
            )}
        </div>
    );
};

const Body: FC<BodyProps> = ({children}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, y: -5}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0}}
                className={"bg-white w-full rounded-lg h-[150px] overflow-y-scroll"}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

Dropdown.Body = Body;

export default Dropdown;
