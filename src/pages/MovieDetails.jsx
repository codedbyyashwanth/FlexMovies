import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import { useState } from "react";
import { CardSection } from "../components/CardSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/movie/HeroSection";
import { data } from "../utils/actors";
import { ActorsCard } from "../components/ActorsCard";


export const MovieDetails = () => {
        const [bgUrl, setBgUrl] = useState("https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg");
        
        return (
                <>
                        <header className="relative min-h-screen" style={{ backgroundImage : `url(${bgUrl})` }}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection />
                        </header>
                        <main className="py-6">
                                <div className="heading-container flex justify-between items-center window-size">
                                        <h3 className=" text-lg font-semibold">Casting Members</h3>
                                </div>
                                <div className="container window-size grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                        {
                                                data.slice(0,6).map((items, index) => (
                                                        <ActorsCard data={items} key={index} ></ActorsCard>
                                                ))
                                        }
                                </div>
                                <section className="window-size my-10">
                                        <div className="heading-container flex justify-between items-center">
                                                <h3 className=" text-lg font-semibold">Watch Trailer</h3>
                                        </div>
                                        <div className="container my-4">
                                                <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TnGl01FkMMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                </section>
                                <section>
                                        <CardSection sectionTitle="Related" />
                                </section>
                        </main>
                        <Footer />
                </>
        );
}