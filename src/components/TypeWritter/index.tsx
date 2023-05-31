import {FunctionComponent, useEffect, useRef, useState} from "react"
import {useInView} from "framer-motion";

interface Props {
    text: string,
    className?: string
}

const TypeWriter: FunctionComponent<Props> = ({text, className}) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const ref = useRef(null)
    const inView = useInView(ref)
    useEffect(() => {
        if (inView){
            const interval = setInterval(() => {
                if (index >= text.length) {
                    setDirection(-1)
                } else if (index === 0) {
                    setDirection(1)
                }
                setIndex(index + direction)
            }, 300)

            return () => {
                clearInterval(interval)
            }
        }
    }, [index,direction,inView])

    return (
        <p ref={ref}
           className={className}>
            {text.substring(0, index)}
            <span className="text-slate-500">|</span>
        </p>
    )
}

export default TypeWriter
