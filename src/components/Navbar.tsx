import React from "react"
import '../App.css'
function Navbar(){

const navlinks = [
"ABOUT US |",
"STORIES |",
"TECHNOLOGY",
]
const headerlinks = navlinks.map((text) => (
<li>
    <span>
        {text}
    </span>
</li>
))
    return(
        <nav className="font-sans flex flex-row justify-around fixed top-0 backdrop-blur-sm">
            <h2>
                AnimateZone
            </h2>
            <ul>
                {headerlinks}
            </ul>
            <button>
                START READING
            </button>
        </nav>
    )
}


export default Navbar