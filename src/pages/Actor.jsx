import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import { HeroSection } from "../components/movies/HeroSection";
import {Card} from "../components/Card";
import { data } from "../utils/movie";
import {Footer} from "../components/Footer";
import { useState } from "react";
import ActorHeader from "../components/ActorHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails, getActorMovies } from "../utils/data";
import Loading from "../components/Loading";

const url = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80";

const Actor = () => {
        const {id} = useParams();

        const fetchActors = async () => {
                const movieData = await getActorDetails(id);
                const actorsMovie = await getActorMovies(id);
                return {"movieData": movieData, "movies" : actorsMovie};
        }

        const {data, status} = useQuery(`actor${id}`, fetchActors);

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error...</h1>

        return (
                <>
                        <header className={`relative h-[60vh] sm:h-[50vh] bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')]`}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                        </header>
                        <main className="">
                                <ActorHeader data={data.movieData} />
                                <section className="window-size my-10">
                                        <div className="heading-container flex justify-between items-center">
                                                <h3 className=" text-lg font-semibold">Movies</h3>
                                        </div>
                                        <div className="container grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                                {
                                                        data.movies.cast.map((items, index) => (
                                                                <Card data={items} key={index} ></Card>
                                                        ))
                                                }
                                        </div>
                                </section>
                        </main>
                        <Footer />
                </>
        );
}

export default Actor