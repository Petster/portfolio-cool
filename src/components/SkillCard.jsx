import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({name, bg, icon}) {
    let classNames = ['gitem justify-center items-center content-center border-white border rounded-md p-5 bg-opacity-75 backdrop-filter backdrop-blur-sm text-white text-center sm:text-left flex', bg].join(' ');

    return (
        <div className={classNames}>
            <div>
                <FontAwesomeIcon size="2x" className="pr-2" icon={icon}></FontAwesomeIcon>
            </div>
            <div className="flex-grow">
                <h1 className="object-fill font-bold">{name}</h1>
            </div>
        </div>
    )
}