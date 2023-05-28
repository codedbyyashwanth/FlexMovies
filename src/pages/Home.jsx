import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import {HeroSection} from "../components/home/HeroSection";
import { useState } from "react";
import { CardSection } from "../components/CardSection";
import { Footer } from "../components/Footer";
import { useQuery } from "react-query";
import {MoviesContext, getMedia} from "../utils/data";
import Loading from "../components/Loading";


const url = `https://images.unsplash.com/photo-1680950781367-fe720fae1e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
const bg = `bg-[url("https://images.unsplash.com/photo-1680950781367-fe720fae1e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")]`;

export const Home = () => {
        const [bgUrl, setBgUrl] = useState("");

        const loadData = async () => {
                const latestMovies = await getMedia("now_playing", "movie");
                const popularMovies = await getMedia("popular", "movie");
                const ratedMovies = await getMedia("top_rated", "movie");
                const upcomingMovies = await getMedia("upcoming", "movie");
                const popularTVSeries = await getMedia("popular", "tv");

                return {"latest": latestMovies, "popular": popularMovies, "rated": ratedMovies, "upcoming": upcomingMovies, "popularTV": popularTVSeries};
        }

        const {data, status} = useQuery("movies", loadData);

        if (status == "loading") {
                return <Loading />
        }
        
        return (
                <>
                        <header className="relative min-h-screen" style={{ backgroundImage : `url(${bgUrl})` }}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection setBgUrl={setBgUrl} data={data.latest.results.slice(6,13)} />
                        </header>
                        <main className="py-6">
                                <CardSection data={data.popular} sectionTitle="Popular Movies" media="movies" />
                                <CardSection data={data.upcoming} sectionTitle="Upcoming Movies" media="movies" />
                                <CardSection data={data.popularTV} sectionTitle="TV Shows" media="tv-shows" url="tv-show" />
                                <CardSection data={data.rated} sectionTitle="Top-Rated Movies" media="movies" />
                        </main>
                        <Footer />
                </>
        );
}