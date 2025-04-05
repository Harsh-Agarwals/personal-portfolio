import skills from '../assets/skills'

export default function Skills() {
    return (
        <div className="skills flex flex-row flex-wrap gap-1 text-sm me-3 my-3">
            {
                skills.map(skill => (
                     (
                        <h1 key={Math.random()} className=' bg-black text-white w-max px-2 rounded-md font-medium hover:bg-gray-700 py-[2px]'>{skill}</h1>
                    )
                ))
            }
        </div>
    )
}