import { CiMapPin } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { GoNote } from "react-icons/go";
import { Link } from 'react-router-dom';
import { RiTwitterXFill } from "react-icons/ri";

export default function AboutMe() {
    return (
        <div>
            <div className="header text-left py-8 px-12 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
                <h1 className=" text-3xl">Hi 👋, I'm <span className=" font-bold">Harsh Agarwal</span></h1>
                <h3 className=" text-lg py-2 text-gray-600">Machine Learning Engineer | Full Stack Developer | Building SaaS, Generative AI and Agentic AI applications</h3>
                {/* <hr className=" my-2" /> */}
                <div className="abouts">
                    <div className="prev flex flex-row flex-wrap gap-[6px] my-3 sm:pe-8">
                        <p className="border-[1px] rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center text-green-600 bg-green-100 border-green-500"><HiOutlineBuildingOffice className=" me-1 text-green-800" />Working at&nbsp;<a href="https://www.crunchbase.com/organization/mercados-energy-markets-india" className=" hover:underline hover:decoration-dotted hover:text-green-700 underline decoration-dotted" target="blank">Mercados</a>&nbsp;for&nbsp;<a href="https://en.wikipedia.org/wiki/Maharashtra_State_Electricity_Distribution_Company_Limited" className=" hover:underline hover:decoration-dotted hover:text-green-700 underline decoration-dotted" target="blank">MSEDCL</a></p>
                        <p className="border-[1px] text-purple-500 border-purple-400 bg-pink-100 rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center"><CiMapPin className=" me-[2px] text-purple-800" />From Mumbai, India</p>
                        <p className="border-[1px] rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center  bg-yellow-100 text-orange-600 border-orange-500"><LiaLaptopCodeSolid className=" me-1 text-orange-800" />Previously at&nbsp;<a href="https://www.renew.com/" className=" hover:underline hover:decoration-dotted hover:text-orange-700 underline decoration-dotted" target="blank">Renew</a>&nbsp;and&nbsp;<a href="https://yourstory.com/companies/superproai" className=" hover:underline hover:decoration-dotted hover:text-orange-700 underline decoration-dotted" target="blank">Superpro.ai</a></p>
                        <p className="border-[1px] rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center text-red-600 bg-red-100 border-red-500"><GoNote className=" me-1 text-red-800" /><Link to="/blogs" className=" hover:underline hover:decoration-dotted hover:text-red-700 underline decoration-dotted">Blogs</Link>&nbsp;and&nbsp;<Link to="/blogs" className=" hover:underline hover:decoration-dotted hover:text-red-700 underline decoration-dotted">Recommendations</Link></p>
                        <p className="border-[1px] rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center text-blue-600 bg-sky-100 border-blue-500"><GoRocket className=" me-1 text-blue-800" />Building&nbsp;<a href="" className=" hover:underline hover:decoration-dotted hover:text-blue-700 underline decoration-dotted" target="blank">FusionLabs AI</a>&nbsp;and&nbsp;<a href="" className=" hover:underline hover:decoration-dotted hover:text-blue-700 underline decoration-dotted" target="blank">UtsavStores</a></p>
                        <p className="border-[1px] rounded-md w-max px-1 py-[1px] text-sm font-medium flex items-center text-gray-600 bg-gray-100 border-gray-500"><RiTwitterXFill className=" me-1 text-gray-800"/>Connect on&nbsp;<a href="https://www.x.com/harshagarwals" target="blank" className=" hover:underline hover:decoration-dotted hover:text-gray-700 underline decoration-dotted">Twitter</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}