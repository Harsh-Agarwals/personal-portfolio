export default function Experience() {
    return (
        <div className="work-exp text-left px-12 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
            <h1 className=" font-bold text-xl text-gray-600">Work Experience</h1>
            <div className="flex flex-col gap-0 py-6">
            {
                experiences.map(exp => (
                    <div className="flex flex-row items-center justify-start text-sm gap-4 p-2 hover:bg-gray-50 md:ps-8 lg:ps-12" style={{borderRadius:"1.5rem 1rem 1rem 1.5rem"}}>
                        <div className={`logo border-[1px] border-gray-400 rounded-2xl w-14 ${exp.company === "Mercados Energy Markets" ? "p-1" : "p-0"}`}>
                            <img src={exp.url} alt={exp.company} className=" rounded-full" />
                        </div>
                        <div className="info w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
                            <div className="head flex flex-row items-center justify-between gap-4">
                                <h2 className="font-semibold">{exp.company}</h2>
                                <p className="font-medium text-right">{exp.duration}</p>
                            </div>
                            <div className="low">
                                <div className="show flex flex-row items-center justify-between text-xs">
                                    <p>{exp.position}</p>
                                    <p>{exp.location}</p>
                                </div>
                                <p className=" text-sm py-2 hidden">{exp.description}</p>
                            </div>
                            {/* <hr /> */}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

interface ExperienceProps {
    company: string,
    position: string,
    duration: string,
    location: string,
    description: string[],
    url: string
}

const experiences: ExperienceProps[] = [
    {
        "company": "Mercados Energy Markets",
        "position": "Analyst - Enterprise SaaS",
        "duration": "Mar'24 - Present",
        "location": "Mumbai, India",
        "description": [
            "Working on the development of a machine learning model for demand forecasting in the power sector.",
            "Collaborating with cross-functional teams to integrate machine learning solutions into existing systems."
        ],
        "url": "/memi-logo.jpg"
    },
    {
        "company": "Renew",
        "position": "Machine Learning Engineer",
        "duration": "Jun'22 - Jul'23",
        "location": "Remote",
        "description": [
            "Assisted in the development of a machine learning model for predictive maintenance.",
            "Conducted data analysis and visualization to support model development."
        ],
        "url": "/renew_logo.jpg"
    },
    {
        "company": "homeGurukul.in",
        "position": "Co-founder and Educator",
        "duration": "Aug'23 - Dec'23",
        "location": "Surat, Gujarat",
        "description": [
            "Worked on a project to optimize the performance of a recommendation system.",
            "Conducted A/B testing and data analysis to evaluate model performance."
        ],
        "url": "/hG.png"
    },
    {
        "company": "Superpro.ai",
        "position": "Growth Analytics Intern",
        "duration": "Feb'22 - Apr'22",
        "location": "Remote",
        "description": [
            "Developed a machine learning model for image classification.",
            "Worked on data preprocessing and feature engineering."
        ],
        "url": "/superproai_logo.jpg"
    }
]