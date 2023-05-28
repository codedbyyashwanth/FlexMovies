import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import { HeroSection } from "../components/movies/HeroSection";
import {Card} from "../components/Card";
import { useQuery } from "react-query";
import { data } from "../utils/movie";
import Pagination from "../components/Paginaion";
import {Footer} from "../components/Footer";
import { HiFilter } from "react-icons/hi";
import { useState } from "react";
import { getNextPage } from "../utils/data";
import Loading from "../components/Loading";

const url = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80";

const TVShows = () => {
        const [filterMenu, setFilterMenu] = useState(false);
        const [filterMsg, setFilterMsg] = useState("All (A-Z)");
        const [page, setPage] = useState(1);

        const fetchMovies = async () => {
                const movieData = await getNextPage("popular", "tv",page);
                return movieData;
        }

        const {data, status} = useQuery(`all-tv-series${page}`, fetchMovies);

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error...</h1>

        return (
                <>
                        <header className={`relative h-[60vh] sm:h-[50vh] bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')]`}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection title="TV Shows" />
                        </header>
                        <main className="py-6">
                                {/* <div className="filter-section window-size">
                                        <div className="filter-option flex justify-end">
                                                <div onClick={() => setFilterMenu(!filterMenu)} className="relative py-2 px-6 rounded-lg border-2 border-main-secondary flex items-center space-x-2 max-w-fit cursor-pointer">
                                                        <HiFilter  className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400">Filter result by: </span> <span className="text-sm text-gray-400 font-semibold">{filterMsg}</span>
                                                        {
                                                                filterMenu && <ul className="absolute w-full top-full left-[-7px] right-0 mt-2 rounded-lg bg-main-primary px-4 py-4 space-y-3 border-main-secondary border-2 cursor-default">
                                                                                                        <li onClick={() => setFilterMsg("All (A-Z)")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">All (A-Z)</li>
                                                                                                        <li onClick={() => setFilterMsg("Low Rating")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Low Rating</li>
                                                                                                        <li onClick={() => setFilterMsg("High Rating")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">High Rating</li>
                                                                                                </ul>
                                                        }
                                                </div>
                                        </div>
                                </div> */}
                                <div className="container window-size grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                        {
                                                data.results.map((items, index) => (
                                                        <Card data={items} key={index} media="tv-show"></Card>
                                                ))
                                        }
                                </div>
                                <div className="load-more-btn text-center my-6">
                                        <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default TVShows