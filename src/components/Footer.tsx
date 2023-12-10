import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function Footer(){
    return(
        <>
            <section className='flex flex-col place-items-center py-24 bg-darkblue gap-8'>
                <h2>Adedamola</h2>
                <ul className='flex flex-row gap-8'>
                    <i className='bg-darkbg p-4 rounded-2xl'><FaInstagram /></i>
                    <i className='bg-darkbg p-4 rounded-2xl'><FaLinkedin /></i>
                    <i className='bg-darkbg p-4 rounded-2xl'><FaTwitter /></i>
                </ul>
                &copy; James Adedamola 2023
            </section>
        </>
    )
}

export default Footer