import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

export default function ShowBlogs() {
    return (
        <div className="work-exp text-left px-12 py-4 mb-10 sm:px-[15%] lg:px-[20%] xl:px-[24%]">
            <h1 className=" text-2xl font-medium text-gray-600 py-4 pb-2 underline decoration-2 underline-offset-2">Blogs and Recommendations</h1>
            <div className="flex flex-row flex-wrap items-center gap-2 justify-start">
                <div className="notes flex flex-row items-center gap-1 border-[1px] border-gray-400 px-1 my-2 w-max rounded-md">
                    <h4 className=" text-sm">View all Blogs</h4>
                    <Link to="/blogs" className=" text-blue-600 pt-[2px]">
                        <ExternalLinkIcon className="p-[1px] hover:p-0" />
                    </Link>
                </div>
                <div className="notes flex flex-row items-center gap-1 border-[1px] border-gray-400 px-1 w-max rounded-md">
                    <h4 className=" text-sm">Recommendations</h4>
                    <Link to="/blogs" className=" text-blue-600 pt-[2px]">
                        <ExternalLinkIcon className="p-[1px] hover:p-0" />
                    </Link>
                </div>
            </div>
            <div className="md:mx-8">
                {
                    blogList.map(blog => (
                        <div key={blog[0]} className=" flex flex-col md:flex-row items-start md:justify-between justify-center py-2 text-gray-500 hover:text-gray-700 border-b-[2px] border-dotted border-gray-400">
                            <a href={blog[1]} className=" font-semibold pb-[2px] sm:max-w-[80%] hover:underline">{blog[0]}</a>
                            <p className=" text-sm">
                                {blog[2]}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

let blogList: string[][] = [
    ["Why one should write?", "https://medium.com/@harshagarwal9835/why-one-should-write-f9b5ae86d476", "Jan, 2023"],
    ["Achieving 99% accuracy in Cat vs Dog classification using CNN Transfer Learning", "https://medium.com/@harshagarwal9835/achieving-99-accuracy-in-cat-vs-dog-classification-using-cnn-transfer-learning-e7e945c6140c", "Sept, 2024"],
    ["Deep Learning 101: Basics of Neural Network", "https://medium.com/@harshagarwal9835/deep-learning-101-basics-of-neural-network-69c9e552e63b", "Aug, 2024"],

]