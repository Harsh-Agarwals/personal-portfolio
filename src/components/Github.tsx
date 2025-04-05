import Skills from "./Skills";
import Expertise from "./Expertise";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Github() {
    return (
        <div className="tech-abouts text-left px-12 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
            <h2 className=" font-semibold text-base mt-2 text-gray-700">Technologies I work with</h2>
            <div>
                <Expertise />
            </div>
            <div>
                <h2 className=" flex items-center py-2 font-medium">Github Contributions <a href="https://github.com/Harsh-Agarwals" target="blank" className=" ps-1 pt-1"><ExternalLinkIcon /></a></h2>
                <img src="http://ghchart.rshah.org/harsh-agarwals" alt="2016rshah's Github chart" />
            </div>
            <h2 className=" font-semibold text-xl mt-6">Skills</h2>
            <div>
                <Skills />
            </div>
        </div>
    )
}