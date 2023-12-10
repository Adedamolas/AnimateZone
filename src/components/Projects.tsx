import chirp from '../assets/Chirp.png'
import earnestly from '../assets/Earnestly.png'
import erudite from '../assets/Erudite.png'
import gadgets from '../assets/Josh - Tech - Google Chrome 6_20_2023 11_02_11 PM.png'
import form from '../assets/Multi-step form.png'
import simt from '../assets/SIMT.png'
import sneakers from '../assets/Sneakers.png'
import space from '../assets/Space Tourism.png'

function Projects(){
// const images = [
//     <img src= {chirp} alt="" />,
//     <img src= {earnestly} alt="" />,
//     <img src={erudite} alt="" />,
//     <img src= {gadgets} alt="" />,
//     <img src= {form} alt="" />,
//     <img src= {simt} alt="" />,
//     <img src= {sneakers} alt="" />,
//     <img src= {space} alt="" />
// ]
// const images2 =[
//     chirp,
//     earnestly,
//     erudite,
//     gadgets,
//     form,
//     simt,
//     sneakers,
//     space
// ]
    return(
        <section  className="mb-32 flex flex-col w-full place-items-center space-y-10">
            <div className="heading">
                <h2>Projects</h2>
            </div>
            <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 place-items-center text-left space-x-10 px-24 m-0">
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img height={'200px'} src= {earnestly} alt="" />
                    <p className='text text-xl'>A Twitter engine Landing page</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72 mx-0'>
                    <img className='' src= {gadgets} alt="" />
                    <p className='text text-xl'>A Gadgets ecommerce web-app</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img className='' src= {erudite} alt="" />
                    <p className='text text-xl'>A Twitter engine Landing page</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl m-0'>
                    <img height={'200px'} src= {chirp} alt="" />
                    <p className='text text-xl'>A Twitter engine Landing page</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img className='' src= {form} alt="" />
                    <p className='text text-xl'>A Multi-step form</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img className='' src= {simt} alt="" />
                    <p className='text text-xl'>A Educational landing page</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img className='' src= {sneakers} alt="" />
                    <p className='text text-xl'>A E-commerce component</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
                <article  className='flex flex-col gap-5  bg-darkblue p-5 rounded-2xl min-h-72'>
                    <img className='' src= {space} alt="" />
                    <p className='text text-xl'>A Space Exploration web-app</p>
                    <div className='flex flex-row gap-3'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </article>
            </section>
        </section>
    )
}


export default Projects