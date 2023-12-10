import { GrHtml5 } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
function Technologies() {
    return(
        <section className="mb-32 flex flex-col w-full place-items-center space-y-10">
            <div className="heading">
                <h2>Technologies</h2>
            </div>
            <section className="grid grid-cols-2 gap-10 place-items-left text-left bg-darkblue rounded-lg">
                <article className=" backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row space-x-3 align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72 place-items-start">
                    <i className="p-2 text-medium"><GrHtml5 /></i>
                    <h2 className="text text-medium">HTML5</h2>
                </article>  
                <article className="bg-darkblue backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72">
                    <i className="p-2 text-medium"><FaCss3Alt /></i>
                    <h2 className="text text-medium">CSS3</h2>
                </article>  
                <article className="bg-darkblue backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72">
                    <i className="p-2 py-2 text-medium"><SiJavascript /></i>
                    <h2 className="text text-medium">Javascript</h2>
                </article>  
                <article className="bg-darkblue backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72">
                    <i className="p-2 py-2 text-medium"><SiTailwindcss /></i>
                    <h2 className="text text-medium">TailwindCSS</h2>
                </article>
                <article className="bg-darkblue backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72"> 
                    <i className="p-2 py-2 text-medium"><FaBootstrap /></i>
                    <h2 className="text text-medium">Bootstrap</h2>
                </article>
                <article className="bg-darkblue backdrop-blur-sm p-5 rounded-lg cursor-pointer flex flex-row align-middle justify-center border-2 border-transparent hover:border-2 hover:border-darkblue hover:bg-transparent w-72"> 
                    <i className="p-2 py-2 text-medium"><FaBootstrap /></i>
                    <h2 className="text text-medium">ReactJS</h2>
                </article>
            </section>
        </section>
    )
}

export default Technologies