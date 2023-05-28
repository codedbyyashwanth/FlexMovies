import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import { useState } from "react";
import { CardSection } from "../components/CardSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/movie/HeroSection";
import { data as datas } from "../utils/actors";
import { ActorsCard } from "../components/ActorsCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getRelated, getDetails, getInfo, getVideo } from "../utils/data";
import Loading from "../components/Loading";


export const TVShow = () => {
        const [bgUrl, setBgUrl] = useState("https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg");
        const {id} = useParams();

        const fetchMovies = async () => {
                const movieData = await getDetails("tv",id);
                const movies = await getRelated("tv", id);
                const info = await getInfo("tv", id);
                const video = await getVideo("tv", id);
                return {"movieData": movieData, "movies":movies, "info": info, "video": video};
        }

        const {data, status} = useQuery(`tv${id}`, fetchMovies);

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error...</h1>

        return (
                <>
                        <header className="relative min-h-screen" style={{ backgroundImage : `url(https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data.movieData.backdrop_path})` }}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection posterUrl={data.movieData.poster_path} genres={data.movieData.genres} title={data.movieData.name} />
                        </header>
                        <main className="py-6">
                                <div className="heading-container flex justify-between items-center window-size">
                                        <h3 className=" text-lg font-semibold">Casting Members</h3>
                                </div>
                                <div className="container window-size grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                        {
                                                data.info.cast.length > 6 ? data.info.cast.slice(0,6).map((items, index) => (
                                                        <ActorsCard data={items} key={index} ></ActorsCard>
                                                )) : data.info.cast.map((items, index) => (
                                                        <ActorsCard data={items} key={index} ></ActorsCard>
                                                ))
                                        }
                                </div>
                                {
                                        data.video.results.length > 0 ? <section className="window-size my-10">
                                        <div className="heading-container flex justify-between items-center">
                                                <h3 className=" text-lg font-semibold">Watch Trailer</h3>
                                        </div>
                                        <div className="container my-4">
                                                <iframe className="w-full aspect-video rounded-xl" src={`https://www.youtube.com/embed/${data.video.results[0].key}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                </section> : ""
                                }
                                
                                <section>
                                        <CardSection sectionTitle="Related" data={data.movies} url="tv-show" />
                                </section>
                        </main>
                        <Footer />
                </>
        );
}