import { useEffect, useState } from "react";
// import {data} from "../../utils/data";
import { HiBookmark, HiFilm } from "react-icons/hi";

export const HeroSection = ({setBgUrl, data}) => {
        const [index, setIndex] = useState(0);
        var count=0;
        var timeout;

        useEffect(() => {
                setBgUrl(`https://image.tmdb.org/t/p/w1280${data[0].backdrop_path}`)
        }, [])

        timeout = setTimeout(() => {
                if (index == data.length - 1) {
                        setIndex(0)
                        setBgUrl(`https://image.tmdb.org/t/p/w1280${data[0].backdrop_path}`)
                        return
                }

                if (index < 0) {
                        setIndex(data.length - 1)
                        setBgUrl(`https://image.tmdb.org/t/p/w1280${data[data.length - 1].backdrop_path}`)
                        return
                }
                setIndex(index + 1)
                setBgUrl(`https://image.tmdb.org/t/p/w1280${data[index+1].backdrop_path}`)
                count++;

                if (count == 2)
                        clearInterval(timeout);
        }, 5000);

        timeout
        
        return (
                <section className="hero-section h-[80vh] md:h-max md:py-20 md:px-6 md:pb-24" >
                        <div className="container flex justify-evenly items-center md:flex-col-reverse   h-full">
                                <div className="text-container w-3/6 space-y-8 md:w-full md:py-6">
                                        <h1 className="text-6xl font-bold md:text-4xl ease-in-out transition-all  duration-500">{data[index].original_title}</h1>
                                        <div className="space-x-2 flex items-center sm:flex-wrap sm:space-y-0 sm:space-x-0">
                                                {/* {
                                                        data[index].genre_ids.map((value, index) => (
                                                                <p key={index} style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">{value.name}</p>
                                                        ))
                                                } */}
                                        </div>
                                        <p className="font-semibold">{data[index].overview}</p>
                                        <div className="space-x-5 relative py-4 sm:flex sm:flex-col sm:space-x-0 sm:space-y-5 sm:text-center" style={{zIndex : 30}}>
                                                <a className="btn-primary inline-flex items-center justify-center" href="#"><HiFilm className="mr-2 text-lg" />Watch Trailer</a>
                                                <a className="btn-secondary inline-flex items-center justify-center" href="#"><HiBookmark className="mr-2 text-lg" />Movie Details</a>
                                        </div>
                                </div>
                                <div className="movie-img w-64 rounded-xl overflow-hidden">
                                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data[index].poster_path}`} alt="" />
                                </div>
                        </div>
                </section>
        );
}
