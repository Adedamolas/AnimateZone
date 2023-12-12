import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { SiOpenproject } from "react-icons/si";
import { GrContact } from "react-icons/gr";
import { Link, animateScroll as scroll } from 'react-scroll';
import '../App.css'
function Navbar(){

// const navlinks = [
// "Projects",
// "About",
// "Details",
// ]
const navLinks2 = [
    <Link to="section1" smooth={true} duration={500} className='i' > <AiOutlineHome /> </Link>,
    <Link to="section2" smooth={true} duration={500} className='i'> <LuUser /> </Link>,
    <Link to="section3" smooth={true} duration={500} className='i'><BsTools /></Link>,
    <Link to="section4" smooth={true} duration={500} className='i'><RiServiceLine /></Link>,
    <Link to="section5" smooth={true} duration={500} className='i'><SiOpenproject /></Link>,
    <Link to="section6" smooth={true} duration={500} className='i'><GrContact /></Link>,
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