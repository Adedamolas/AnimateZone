import headerImg from '../assets/header_img 2.png'
import headerImg2 from '../assets/header_img 3.png'
import cardImg from '../assets/headerimg 2.png'
import '../index.css'
import { useState } from 'react'
function Zone(){

const Adventure = () => {
    return(
        <>
                <section>
                    <article>
                        <h3>INTRODUCING</h3>

                        <h1>
                            ADVENTURE ZONE
                        </h1>
                        <h4>
                            Dive into the world of adventures
                            and enjoy thrills and mystery
                        </h4>
                        <p>
                            This zone is filled with stories of adventure talse
                            which knows no bounds.
                        </p>
                    </article>
                    <article>
                        <img src={headerImg} alt="" />
                    </article>
                </section>
                <section>
                    <article>
                        <img src={headerImg} alt="" />
                        <div>
                            <button>
                                Case Study
                            </button>
                            <p className='flex font-light'>
                                Check out our latest chapter
                            </p>
                        </div>
                    </article>
                </section>
        </>
    )
}
const Fantasy = () => {
    return(
        <>
                <section>
                    <article>
                        <h3>INTRODUCING</h3>

                        <h1>
                            EXTRA-TERRESTRIAL ZONE
                        </h1>
                        <h4>
                            We are not alone in the Universe, and you know it.
                        </h4>
                        <p>
                            This zone is filled with stories of life-forms not from this
                            world or Earth. Get ready for a bumpy ride.
                        </p>
                    </article>
                    <article>
                        <img src={headerImg2} alt="" />
                    </article>
                </section>
                <section>
                    <article>
                        <img src={cardImg} alt="" />
                        <div>
                            <button>
                                Case Study
                            </button>
                            <p className='flex font-light'>
                                Check out our latest chapter
                            </p>
                        </div>
                    </article>
                </section>
        </>
    )
}
const components = [
    <Adventure />,
    <Fantasy />
]
const [activeZone, setActiveZone] = useState(0)
const handleButtonClick = () => {
    // Cycle to the next component
    setActiveZone((prevIndex) =>
      prevIndex === components.length + 1 ? 0 : prevIndex + 1
    );
  };
  const handlePreviousButton = () => {
    setActiveZone((prevIndex) =>
    prevIndex === components.length - 1 ? 0 : prevIndex - 1
  );
  }
    return(
        <>
            <header className='fles flex-column w-1/2'>
                {components[activeZone]}
            </header>
            <div className="nav_zone">
                <h2>EXPLORE <div></div></h2>
                <section>
                    <div onClick={handlePreviousButton}></div>
                    <div onClick={handleButtonClick}></div>
                </section>
            </div>
        </>
    )
}

export default Zone