import { useEffect, useState } from "react";
import {data} from "../../utils/shows/data";
import { HiFilm, HiHeart } from "react-icons/hi";

export const HeroSection = ({posterUrl, genres, title}) => {

        return (
                <section className="hero-section h-[80vh] md:h-max md:py-20 md:px-6 md:pb-24 window-size" >
                        <div className="container flex items-center md:flex-col h-full space-x-10 md:space-x-0">
                                <div className="movie-img w-64 rounded-xl overflow-hidden">
                                        <img className="w-full" src={posterUrl !== null ? `https://image.tmdb.org/t/p/w500${posterUrl}` : "https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922_1280.jpg"} alt="" />
                                </div>
                                <div className="text-container w-4/6 space-y-8 md:w-full md:py-6">
                                        <h1 className="text-6xl font-bold md:text-4xl ease-in-out transition-all  duration-500">{title}</h1>
                                        <div className="space-x-2 flex items-center sm:flex-wrap sm:space-y-0 sm:space-x-0">
                                                {
                                                        genres.map((item, count) => (
                                                                <p key={count} style={{marginBottom: "10px", marginRight: "6px"}} className="text-xs  rounded-2xl py-1 px-3 font-semibold border-2 text-main-primary bg-white">{item.name}</p>
                                                        ))
                                                }
                                        </div>
                                        <p className="font-semibold">{data[0].description}</p>
                                        <div className="space-x-5 relative py-4 sm:flex sm:flex-col sm:space-x-0 sm:space-y-5 sm:text-center" style={{zIndex : 30}}>
                                                <a className="btn-primary inline-flex items-center" href="#"><HiHeart className="mr-2 text-lg" /> Add to Favourite</a>
                                                <a className="btn-secondary inline-flex items-center" href="#"><HiFilm className="mr-2 text-lg" /> Watch Trailer</a>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
