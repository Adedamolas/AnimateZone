import React from "react"
import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { SiOpenproject } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import '../App.css'
function Navbar(){

const navlinks = [
"Projects",
"About",
"Details",
]
const navLinks2 = [
    <i className=""><AiOutlineHome /> </i>,
    <i className=""><LuUser /> </i>,
    <i className=""><BsTools /> </i>,
    <i className=""><RiServiceLine /></i>,
    <i className=""><SiOpenproject /> </i>,
    <i className=""><GrContact /></i>,
]
const headerlinks = navLinks2.map((span) => (
    <li className="flex flex-row align-middle justify-center"> 
        {span}
    </li>
))
    return(
        <nav className= "">
            <ul className="">
                {headerlinks}
            </ul>
        </nav>
    )
}


export default Navbar