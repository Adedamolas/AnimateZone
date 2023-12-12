import { SiOpenproject } from "react-icons/si";

function Services(){
    return(
        <>
            <section className="mb-32 flex flex-col w-full place-items-center space-y-10">
                <div className="heading">
                    <h2>Services</h2>
                </div>
                <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 place-items-center text-left space-x-10 px-24">
                    <article className="p-10 bg-darktrans text-left py-24 rounded-lg space-y-4 min-h-66">
                        <i className="text-6xl"><SiOpenproject /></i>
                        <h3>Website Development</h3>
                        <p>View more</p>
                    </article>
                    <div className="p-10 bg-darktrans text-left py-16 rounded-lg space-y-4 max-h-62">
                        <i className="text-6xl"><SiOpenproject /></i>
                        <h3>Web Rebranding and Editing</h3>
                        <p>View more</p>
                    </div>
                    <div className="p-10 bg-darktrans text-left py-12 max-h-58 rounded-lg space-y-4 max-h-62 ">
                        <i className="text-6xl"><SiOpenproject /></i>
                        <h3 className="w-half">Website and Platform Maintainance</h3>
                        <p>View more</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Services