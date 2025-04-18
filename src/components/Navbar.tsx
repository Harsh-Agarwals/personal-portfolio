import {FaTwitter, FaGithub, FaLinkedin, FaRegFileAlt, FaHome} from 'react-icons/fa'
import { Tooltip } from '@radix-ui/themes'
import { SunIcon } from '@radix-ui/react-icons'
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className=' flex flex-row align-middle gap-5 bg-transparent backdrop-blur-[10px] fixed border-[1px] border-gray-200 shadow-[2px_2px_10px_-5px_rgba(105,105,105,1)] py-2 justify-center my-0 mx-auto rounded-full w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] top-4 left-[50%] -translate-x-1/2 translate-y-[1rem]'>
            <div className="info flex flex-row gap-5">
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="Home">
                        <Link to="/">
                            <FaHome />
                        </Link>
                    </Tooltip>
                </div>
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="Blogs">
                        <Link to="/blogs">
                            <MdLibraryBooks />
                        </Link>
                    </Tooltip>
                </div>
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="About">
                        <Link to="/about">
                            <IoPerson />
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className="social-media flex flex-row gap-5 border-e-[1px] border-s-[1px] border-gray-400 px-4 ">
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="Github">
                        <a href="https://github.com/Harsh-Agarwals" target='blank'>
                            <FaGithub />
                        </a>
                    </Tooltip>
                </div>
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="LinkedIn">
                        <a href="https://www.linkedin.com/in/harsh--agarwal/" target='blank'>
                            <FaLinkedin />
                        </a>
                    </Tooltip>
                </div>
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="Twitter">
                        <a href="https://www.x.com/harshagarwals" target='blank'>
                            <FaTwitter />
                        </a>
                    </Tooltip>
                </div>
                <div className=' sm:text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                    <Tooltip content="Resume">
                        <a href="https://drive.google.com/file/d/1yRtskxU8vR3rbkDv2HVDDd1PURkzDqNk/view" target='blank'>
                            <FaRegFileAlt />
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className='mode flex items-center text-xl py-3 hover:px-3 bg-transparent hover:bg-gray-300 rounded-full transition-all cursor-pointer duration-300'>
                <SunIcon />
            </div>
        </div>
    )
}