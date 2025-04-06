import { ExternalLinkIcon } from "@radix-ui/react-icons"

interface Repo {
    repo_name: string,
    repo_url: string,
    repo_desc: string,
    active: boolean,
    skills: string[]
}

export default  function Repos({repo}: {repo: Repo}) {
    return (
        <div className="flex flex-col justify-start bg-yellow-50 border-yellow-200 border-2 rounded-lg p-4 sm:w-52 flex-wrap hover:shadow-[3px_3px_10px_-5px_rgba(244,164,96,1)]">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2 font-semibold">
                    <h1 className=" flex flex-row gap-1 items-center leading-[1.2rem]">{repo.repo_name}<p className={`${repo.active ? " bg-green-400" : ""} rounded-full w-[10px] h-[10px] mt-[3px]`}>&nbsp;</p></h1>   
                </div>
                <div>
                    <a href={repo.repo_url} target="blank" className=""><ExternalLinkIcon className="p-[1px] hover:p-0 text-gray-500 hover:text-gray-800" /></a>
                </div>
            </div>
            <div>
                <h3 className=" text-sm pt-2">{repo.repo_desc}</h3>
            </div>
            <div className="skills flex flex-row flex-wrap gap-1 mt-2">
                {
                    repo.skills.map(skill => (
                        <p className=" bg-yellow-200 border-[1px] border-yellow-300 hover:bg-yellow-300 px-2 text-black font-medium text-xs w-max py-[2px] rounded-md">{skill}</p>
                    ))
                }
            </div>

        </div>
    )
}