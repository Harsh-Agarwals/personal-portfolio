import Skills from "./Skills";
import Expertise from "./Expertise";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Repos from "./Repos";

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
            <div className="top-repos">
                <h1 className=" font-semibold text-lg pt-4 text-gray-800">Top repos</h1>
                <div className=" grid grid-cols-2 sm:flex flex-row flex-wrap gap-2 py-4">
                {
                    repos.map(repo => (
                        <Repos key={repo.repo_name} repo={repo} />
                    ))
                }
                </div>
            </div>
            <h2 className=" font-semibold text-xl mt-6">Skills</h2>
            <div>
                <Skills />
            </div>
        </div>
    )
}

interface Repo {
    repo_name: string,
    repo_url: string,
    repo_desc: string,
    active: boolean,
    skills: string[]
}

const repos: Repo[] = [
    {
        "repo_name": "DL Mastery",
        "repo_url": "https://github.com/Harsh-Agarwals/Deep-Learning-Mastery",
        "repo_desc": "Exploring DL, NLP and LLM with Pytorch and Tensorflow",
        "active": true,
        "skills": ["Pytorch", "Langchain", "Huggingface", "MLOps"]
    },
    {
        "repo_name": "100x Devs",
        "repo_url": "https://github.com/Harsh-Agarwals/100xDevs",
        "repo_desc": "Documenting my journey to become a 100x developer",
        "active": true,
        "skills": ["TS", "React", "Next", "Prisma", "Fully-Stack"]
    },
    {
        "repo_name": "Medical Chatbot",
        "repo_url": "https://github.com/Harsh-Agarwals/gyn-chatbot",
        "repo_desc": "Chatbot for Gynaecology using RAG and Langchain",
        "active": false,
        "skills": ["Langchain", "Llama 3.2", "FAISS"]
    },
    {
        "repo_name": "Object Detection App",
        "repo_url": "https://github.com/Harsh-Agarwals/object-detection-app",
        "repo_desc": "Streamlit and Flask app to detect objects using YOLOv5",
        "active": false,
        "skills": ["Flask", "Streamlit", "YOLOv5"]
    },
    {
        "repo_name": "ML Algos",
        "repo_url": "https://github.com/Harsh-Agarwals/ML-pure-python-and-sklearn",
        "repo_desc": "Machine Learning Algorithms with pure python and sklearn",
        "active": true,
        "skills": ["ML", "Sklearn", "Python", "Statistics", "Numpy"]
    }
]