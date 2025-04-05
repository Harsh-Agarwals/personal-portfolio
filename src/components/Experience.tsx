import ExpShow from "./ExpShow";

export default function Experience() {
    return (
        <div className="work-exp text-left px-12 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
            <h1 className=" font-bold text-xl text-gray-600">Work Experience</h1>
            <div className="flex flex-col gap-0 py-6">
            {
                experiences.map(exp => (
                    <ExpShow key={exp.company} exp={exp} />
                ))
            }
            </div>
            {/* Education */}
            <h1 className=" font-bold text-xl text-gray-600">Education</h1>
            <div className="flex flex-col gap-0 py-2">
            <div className={`flex flex-row items-center justify-start text-sm gap-4 p-2 hover:bg-gray-50 md:ps-8 lg:ps-12 md:py-4`} style={{borderRadius:"1.5rem 1rem 1rem 1.5rem"}}>
                <div className={`logo w-14`}>
                    <img src="/nit.jpg" alt="NIT Surat" className=" rounded-full" />
                </div>
                <div className="info w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
                    <div className="head flex flex-row items-center justify-between gap-4">
                        <h2 className="font-semibold flex flex-row">NIT Surat
                        </h2>
                        <p className="font-medium text-right">2018-2022</p>
                    </div>
                    <div className="low">
                        <div className="show flex flex-row items-center justify-between text-xs">
                            <p>Engineering</p>
                            <p>Surat, India</p>
                        </div>
                    </div>
                </div>
            </div>
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
            "Worked on the development of ML models for intraday demand forecasting for Maharashtra state with average error <1%.",
            "Developed ML models for Renewable energy generation, Energy price and district wise load forecasting.",
            "Build weather APIs, deployments on AWS and automation of daily tasks.",
            "Currently building AI agents for automating demand pattern correction with changing weather parameters."
        ],
        "url": "/memi-logo.jpg"
    },
    {
        "company": "homeGurukul.in",
        "position": "Co-founder and Educator",
        "duration": "Aug'23 - Dec'23",
        "location": "Surat, Gujarat",
        "description": [
            "Taught Machine Learning, Programming and Mathematics to 50+ students across India and USA.",
            "Collaboration with schools and startups."
        ],
        "url": "/hG.png"
    },
    {
        "company": "Renew",
        "position": "Machine Learning Engineer",
        "duration": "Jun'22 - Jul'23",
        "location": "Remote",
        "description": [
            "Developed ML and DL models for energy consumption, and energy markets, improving error by 8%",
            "Used NLP, BERT model and LLMs(OpenAI, LLama) for Energy Markets sentiment analysis."
        ],
        "url": "/renew_logo.jpg"
    },
    {
        "company": "Superpro.ai",
        "position": "Growth and Analytics",
        "duration": "Feb'22 - Apr'22",
        "location": "Remote",
        "description": [
            "Led the analytics task of userbase of thousands of users.",
            "Worked on  on improving User Experience, Growth strategies, and Product improvements."
        ],
        "url": "/superproai_logo.jpg"
    }
]