import { useEffect, useState } from "react";
import {data} from "../../utils/data";
import { HiBookmark, HiFilm } from "react-icons/hi";

export const HeroSection = ({setBgUrl}) => {
        const [index, setIndex] = useState(0);
        var count=0;
        var timeout;

        useEffect(() => {
                setBgUrl(data[0].bgUrl)
        }, [])

        timeout = setTimeout(() => {
                if (index == data.length - 1) {
                        setIndex(0)
                        setBgUrl(data[0].bgUrl)
                        return
                }

                if (index < 0) {
                        setIndex(data.length - 1)
                        setBgUrl(data[data.length - 1].bgUrl)
                        return
                }
                setIndex(index + 1)
                setBgUrl(data[index + 1].bgUrl)
                count++;

                if (count == 2)
                        clearInterval(timeout);
        }, 5000);

        timeout
        
        return (
                <section className="hero-section h-[80vh] md:h-max md:py-20 md:px-6 md:pb-24" >
                        <div className="container flex justify-evenly items-center md:flex-col-reverse   h-full">
                                <div className="text-container w-3/6 space-y-8 md:w-full md:py-6">
                                        <h1 className="text-6xl font-bold md:text-4xl ease-in-out transition-all  duration-500">{data[index].title}</h1>
                                        <div className="space-x-2 flex items-center sm:flex-wrap sm:space-y-0 sm:space-x-0">
                                                <p style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">Animation</p>
                                                <p style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">Comedy</p>
                                                <p style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">Drama</p>
                                                <p style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">Crime</p>
                                        </div>
                                        <p className="font-semibold">{data[index].description}</p>
                                        <div className="space-x-5 relative py-4 sm:flex sm:flex-col sm:space-x-0 sm:space-y-5 sm:text-center" style={{zIndex : 30}}>
                                                <a className="btn-primary inline-flex items-center" href="#"><HiFilm className="mr-2 text-lg" /> Watch Trailer</a>
                                                <a className="btn-secondary inline-flex items-center" href="#"><HiBookmark className="mr-2 text-lg" /> Watch Trailer</a>
                                        </div>
                                </div>
                                <div className="movie-img w-64 rounded-xl overflow-hidden">
                                        <img className="w-full" src={data[index].imageUrl} alt="" />
                                </div>
                        </div>
                </section>
        );
}
