import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Tooltip } from '@radix-ui/themes'

export default function Socials() {
    return (
        <div className=" flex flex-row gap-2 py-3">
            <Tooltip content="Twitter">
                <button className=" text-base p-2 text-sky-500 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaTwitter /></a></button>
            </Tooltip>
            <Tooltip content="Instagram">
                <button className=" text-base p-2 text-pink-400 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaInstagram /></a></button>
            </Tooltip>
            <Tooltip content="Medium">
                <button className=" text-base p-2 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaMedium /></a></button>
            </Tooltip>
            {/* <Tooltip content="YouTube">
                <button className=" text-base p-2 text-red-500 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaYoutube /></a></button>
            </Tooltip> */}
            <Tooltip content="Github">
                <button className=" text-base p-2 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaGithub /></a></button>
            </Tooltip>
            <Tooltip content="LinkedIn">
                <button className=" text-base p-2 text-blue-600 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaLinkedin /></a></button>
            </Tooltip>
            <Tooltip content="WhatsApp">
                <button className=" text-base p-2 text-green-600 bg-gray-100 rounded-full hover:bg-gray-200"><a href="" target="blank"><FaWhatsapp /></a></button>
            </Tooltip>
        </div>
    )
}