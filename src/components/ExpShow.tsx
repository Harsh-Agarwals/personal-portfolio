import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface ExperienceProps {
    company: string,
    position: string,
    duration: string,
    location: string,
    description: string[],
    url: string
}

export default function ExpShow({ exp }: {exp: ExperienceProps}) {
    const [status, setStatus] = useState("right");
    const [hidden, setHidden] = useState(true);
    
    function btnClick() {
        if (status == "right") {
            setStatus("down");
            setHidden(false);
        } else {
            setStatus("right");
            setHidden(true);
        }
    }
    return (
        <div className={`flex flex-row ${hidden? "items-center" : "items-start"} justify-start text-sm gap-4 p-2 hover:bg-gray-50 md:ps-8 lg:ps-12`} style={{borderRadius:"1.5rem 1rem 1rem 1.5rem"}}>
            <div className={`logo border-[1px] border-gray-400 rounded-2xl w-14 ${exp.company === "Mercados Energy Markets" ? "p-1" : "p-0"} hover:shadow-[2px_2px_10px_-5px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out`}>
                <img src={exp.url} alt={exp.company} className=" rounded-full" />
            </div>
            <div className="info w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
                <div className="head flex flex-row items-center justify-between gap-4">
                    <h2 className="font-semibold flex flex-row">{exp.company} <button className="pt-[3px] ps-1 transition-transform duration-300 ease-in-out" onClick={btnClick}>
                        <span className={`inline-block transition-transform duration-300 ease-in-out ${status === "right" ? "rotate-0" : "rotate-90"
                        }`}><ChevronRightIcon /></span>
                    </button>
                    </h2>
                    <p className="font-medium text-right">{exp.duration}</p>
                </div>
                <div className="low">
                    <div className="show flex flex-row items-center justify-between text-xs">
                        <p>{exp.position}</p>
                        <p>{exp.location}</p>
                    </div>
                    <ul>
                        <p className={`pt-2 text-sm overflow-hidden transition-all duration-500 ease-in-out ${status === "right" ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"}`}>
                            {exp.description.map(desc => (
                                <li className="italic" key={Math.random()}>- {desc}</li>
                            ))}
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    )
}