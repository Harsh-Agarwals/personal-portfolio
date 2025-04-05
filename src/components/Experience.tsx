export default function Experience() {
    return (
        <div className="work-exp text-left px-12 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
            <h1 className=" font-bold text-xl text-gray-600">Work Experience</h1>
            {
                experiences.map(exp => (
                    <h1>{exp.company}</h1>
                ))
            }
        </div>
    )
}

interface ExperienceProps {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
}

const experiences: ExperienceProps[] = [
    {
        "company": "Mercados",
        "position": "Analyst - Enterprise SaaS",
        "duration": "Mar'24 - Present",
        "location": "Mumbai, India",
        "description": [
            "Working on the development of a machine learning model for demand forecasting in the power sector.",
            "Collaborating with cross-functional teams to integrate machine learning solutions into existing systems."
        ]
    },
    {
        "company": "Renew",
        "position": "Machine Learning Engineer",
        "duration": "Jun'22 - Jul'23",
        "location": "Remote",
        "description": [
            "Assisted in the development of a machine learning model for predictive maintenance.",
            "Conducted data analysis and visualization to support model development."
        ]
    },
    {
        "company": "Superpro.ai",
        "position": "Growth Analytics Intern",
        "duration": "Feb'22 - Apr'22",
        "location": "Remote",
        "description": [
            "Developed a machine learning model for image classification.",
            "Worked on data preprocessing and feature engineering."
        ]
    }
]