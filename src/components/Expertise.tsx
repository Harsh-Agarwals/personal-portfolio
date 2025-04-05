import expertises from '../assets/expertise'

export default function Expertise() {
    return (
        <div className="skills flex flex-row flex-wrap gap-1 text-sm me-3 my-3">
            {
                expertises.map(expertise => (
                     (
                        <h1 className=' bg-gray-200 text-gray-700 w-max px-2 rounded-md font-medium hover:bg-gray-300 py-[2px]'>{expertise}</h1>
                    )
                ))
            }
        </div>
    )
}