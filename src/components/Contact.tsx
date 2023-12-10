function Contact(){
    return(
        <section className="flex flex-col place-items-center gap-10 mb-24">
            <div className="heading">
                <h2>Contact me</h2>
            </div>
            <section className="flex lg:flex-row sm:flex-col gap-24">
                <section className="flex flex-col gap-10">
                    <article className="bg-darkblue p-8 rounded-lg">
                        <h4>Fancy Calling?</h4>
                        <h5>+2348122193284</h5>
                    </article>
                    <article  className="bg-darkblue p-8 rounded-lg">
                        <h4>Email</h4>
                        <h5>adedamolas198@gmail.com</h5>
                    </article>
                    <article  className="bg-darkblue p-8 rounded-lg">
                        <h4>Location</h4>
                        <h5>Lagos</h5>
                    </article>
                </section>
                <section className="flex flex-col gap-12">
                    <div className="flex lg:flex-row md:flex-col gap-10">
                        <input className="bg-darkblue p-4 rounded-lg text-white" type="text" placeholder="Name"/>
                        <input className="bg-darkblue p-4 rounded-lg text-white" type="email" placeholder="Email"/>
                    </div>
                    <input className="bg-darkblue p-8" type="text" placeholder="What type of website do you need?"/>
                    <input className="bg-darkblue p-16" type="text" placeholder="Message"/>
                </section>
            </section>
        </section>
    )
}


export default Contact