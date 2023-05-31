import { motion, useInView, useAnimation } from "framer-motion"
import {FunctionComponent, HTMLProps, ReactNode, useEffect, useRef} from "react"
import { reveal, slide } from "../../constant/variants"

interface Props extends HTMLProps<HTMLDivElement>{
    children: ReactNode,
    className?: string
}
const Reveal: FunctionComponent<Props> = ({ children,className }) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    const revealAnimation = useAnimation()
    const slideAnimation = useAnimation()
    useEffect(() => {
        if (inView) {
            revealAnimation.start("visible")
            slideAnimation.start("visible")
        }
    }, [inView])
    return (
        <div ref={ref} className={"relative w-fit h-fit "+className}>
            <motion.div
                variants={reveal}
                initial={"hidden"}
                animate={revealAnimation}
                transition={{ duration: 1.2 , delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div variants={slide}
                initial={"hidden"}
                animate={slideAnimation}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom:4,
                    left:0,
                    right:0,
                    zIndex:20,
                    height:"100%"
                }}
                transition={{ duration: 1.2, delay: 0.25 }}
                className="bg-white"
            />
        </div>
    )
}
export default Reveal