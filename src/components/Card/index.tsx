import {FunctionComponent, ReactNode} from "react";

type imgProps = {
    src: string,
    alt: string
}

interface CardProps {
    img?: imgProps;
    title: string;
    subtitle?: string;
    description: string;
    className?: string;
    optionalChildren?: ReactNode;
}

const Card: FunctionComponent<CardProps> = (props) => {
    return (
        <div className={"w-[450px] xs:w-full h-fit p-10 shadow-md shadow-gray-800 flex flex-col gap-5 " + props.className} >
    {
        props.img && (
            <div className={"h-fit"}>
                <img src={props.img.src} className={"w-full h-[250px] object-center object-cover rounded-lg"} alt={props.img.alt}/>
            </div>
        )
    }
    <div className={"flex flex-col text-gray-300 "}>
        <h3 className={"text-2xl"}>{props.title}</h3>
        {props.subtitle && (
            <h4 className={"text-sm my-1"}>{props.subtitle}</h4>
        )}
        <h4 className={"text-sm"}>{props.description}</h4>
        {props.optionalChildren && props.optionalChildren}
    </div>
</div>
)
    ;
};

export default Card;
