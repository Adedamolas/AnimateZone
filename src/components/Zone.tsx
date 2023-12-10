import '../index.css'
import '../App.css'
import resume from '../my_resume.pdf'
import { FaWhatsapp } from "react-icons/fa6"
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Zone(){


    return(
        <>
            <header className='flex flex-row justify-center z-20 bg-none px-20 space-x-10'>
                <div className="flex flex-col py-20 space-y-5 sm:text-center lg:text-left">
                    <h1 className='md-10'>Hi,</h1>
                    <h1>I'm James Adedamola</h1>
                    <h1>A Frontend Developer</h1>
                    <div className='flex flex-row space-x-10'>
                        <a href="my_resume.pdf" download={resume}>
                            <button>Download CV</button>
                        </a>
                        <button>Hire me</button>
                    </div>
                </div>
            </header>
            <article className='flex flex-col absolute top-40 left-10 gap-10 place-items-center'>
                <FaWhatsapp />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                <div className='bg-white w-1 h-10'></div>
            </article>
        </>
    )
}

export default Zone