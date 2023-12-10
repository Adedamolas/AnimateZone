import img from '../assets/damola.png'
import '../App.css'
import { FaRegMessage } from "react-icons/fa6";
function About(){
    return(
        <section className='about flex flex-col justify-center align-middle w-full mb-32 space-y-8'>
            <div className="heading flex flex-col align-top justify-start">
                <h2>About me</h2>
            </div>
            <section className='about flex lg:flex-row sm:flex-col space-x-10 align-middle justify-center sm:gap-10 sm:place-items-center w- w-full'>
                <div className='w-full place-items-center flex flex-row justify-center align-middle'>
                    <article className='img_div flex flex-col justify-center align-top p-2 rotate-12 over overflow-visible bg-darkblue w-60  rounded-3xl sm:w-max place-items-center'>
                        <img className='bg-slate-100 bg-darkbg rounded-3xl' width={'250px'} src={img} alt="" />
                    </article>
                </div>
               <article className='flex flex-col w-full space-y-10'>
                    <p className='w-nine text-center'>
                        Hi, I'm James Adedamola, a skilled frontend Developer
                        who aims in building intuitive and user friendly web-apps
                        using the latest Technologies. I'm proficient in HTML, CSS, Javascript
                        , ReactJS, TailwindCSS, Bootstrap 5. With my problem-solving skills and creativity
                        I promise to give you the best service possible
                    </p>
                    <section className='flex flex-row justify-between px-10 space-x-10'>
                        <article className='flex flex-col align-middle justify-center'>
                            <h2>02+</h2>
                            <h2>Years Experience</h2>
                        </article>
                        <article>
                            <h2>15+</h2>
                            <h2>Completed Projects</h2>
                        </article>
                        <article>
                            <h2>20+</h2>
                            <h2>Happy Clients</h2>
                        </article>
                    </section>
                    <button className='flex flex-row w-48 align-middle justify-center space-x-2'>
                        <i className='py-1'><FaRegMessage /></i> <span>Message me</span>
                    </button>
               </article>
            </section>
        </section>
    )
}


export default About