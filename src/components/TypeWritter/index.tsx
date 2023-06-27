import { FC, useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion";

interface Props {
    text: string,
    className?: string
}

const TypeWriter: FC<Props> = ({ text, className }) => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)
    const ref = useRef(null)
    const inView = useInView(ref)
    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                setDirection(index >= text.length ? -1 : 1)
                setIndex(index + direction)
            }, 300)

            return () => {
                clearInterval(interval)
            }
        }
    }, [text.length, index, direction, inView])

    return (
        <p ref={ref}
            className={className}>
            {text.slice(0, index)}
            <span className="text-slate-500">|</span>
        </p>
    )
}

export default TypeWriter
