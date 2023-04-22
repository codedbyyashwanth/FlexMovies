

export const HeroSection = ({title}) => {

        return (
                <section className="movie-hero-section h-[50%]">
                        <div className="container flex justify-center items-center h-full">
                                <h1 className="text-6xl font-semibold sm:text-5xl">{title}</h1>
                        </div>
                </section>
        )
}