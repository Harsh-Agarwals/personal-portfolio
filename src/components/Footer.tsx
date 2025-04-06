import { useState } from "react";
import Socials from "./Socials";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Alert from "./Alert";

export default function Footer() {
    const [email, setEmail]  = useState("");
    const [msg, setMsg] = useState("");

    const emailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const msgChange = (e: any) => {
        setMsg(e.target.value);
    }

    const btnClick = () => {
        console.log(email, msg);
        if (!email || !msg) {
            // alert("Please enter both Email and Password");
            console.log('here');
            
            <Alert />
            return;
        }
        setEmail("");
        setMsg("");
    }

    return ( 
        <div className=" px-12 sm:px-[12%] lg:px-[16%] xl:px-[20%]">
            <div className=" flex flex-col md:flex-row gap-6 md:justify-around border-t-[1px] border-gray-200 pt-8">
                <div className="left px-2 flex flex-col items-center md:items-start">
                    <p className=" text-white font-medium bg-black w-max px-3 text-base my-3 rounded-lg">Contact</p>
                    <h2 className=" font-bold text-3xl pt-3 pb-1">Get in touch</h2>
                    <p className=" font-medium text-xl text-gray-500 mb-4">Have any <span className=" text-pink-500 hover:underline">idea</span>? Let's <span className=" text-sky-600 hover:underline">Connect!</span></p>
                    <Socials />
                    <div className="notes flex flex-row items-center gap-1 border-[1px] border-gray-400 px-1 my-2 w-max rounded-md">
                        <h4 className=" text-sm">Handwritten ML Notes</h4>
                        <a href="/" className=" text-blue-600 pt-[2px]">
                            <ExternalLinkIcon className="p-[1px] hover:p-0" />
                        </a>
                    </div>
                    <h3 className="font-semibold hover:underline hover:text-amber-00"><a href="/" target="blank"><img src="/svgviewer-output.svg" alt="bmc" className=" inline-block w-6 align-middle p-[2px] m-1" />Buy Me a Coffee!</a></h3>
                </div>
                <div className="right flex flex-col gap-3 items-center md:items-start mb-2 border-t-[1px] border-gray-200 md:border-0 pt-4">
                    <p className=" font-semibold text-2xl pb-1 text-gray-600">Email me</p>
                    <input type="email" name="email" id="email" placeholder="yourmail@gmail.com" className=" border-2 px-2 py-[2px] text-sm border-gray-400 w-[70%] sm:w-[60%] md:w-[250px] lg:w-[280px] rounded-md" value={email} onChange={emailChange} required />
                    <textarea name="message" id="message" placeholder="Your Message" className=" text-sm border-2 px-2 py-[2px] border-gray-400 w-[70%] sm:w-[60%] md:w-[250px] lg:w-[280px] h-24 rounded-md" value={msg} onChange={msgChange} required></textarea>
                    <button className="text-white font-medium bg-black w-max px-3 py-1 text-base rounded-lg hover:bg-gray-700" onClick={btnClick}>Send message</button>
                </div>
            </div>
            <hr className=" mt-4" />
            <p className=" py-2 px-2 text-center text-sm md:text-left">Designed with ❤️ by <a href="/" className=" text-blue-600 hover:text-blue-800">Harsh Agarwal</a></p>
        </div>
    )
}