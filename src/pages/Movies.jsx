import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import { HeroSection } from "../components/movies/HeroSection";
import {Card} from "../components/Card";
import { data as movieData } from "../utils/movie";
import {Footer} from "../components/Footer";
import { HiFilter } from "react-icons/hi";
import { useEffect, useState } from "react";
import { MoviesContext, getMedia } from "../utils/data";
import { useQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Pagination from "../components/Paginaion";
import { getNextPage } from "../utils/data";

const url = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80";

const Movies = () => {
        const [filterMenu, setFilterMenu] = useState(false);
        const [filterMsg, setFilterMsg] = useState("All (A-Z)");
        const [filter, setFilter] = useState("original_title.asc");
        const [page, setPage] = useState(1);

        const fetchMovies = async () => {
                const movieData = await getNextPage("popular", "movie",page, filter);
                return movieData;
        }

        const {data, status} = useQuery(`all-movies${page}`, fetchMovies);

        if (status == "loading")
                return <h1>Loading....</h1>

        if (status == "error")
                return <h1>Error...</h1>


        const filterSelect = (e, value) => {
                setFilter(value);
                setFilterMsg(e.target.textContent);
        }
        
        return (
                <>
                        <header className={`relative h-[60vh] sm:h-[50vh] bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')]`}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection title="Movies" />
                        </header>
                        <main className="py-6">
                                {/* <div className="filter-section window-size">
                                        <div className="filter-option flex justify-end">
                                                <div onClick={() => setFilterMenu(!filterMenu)} className="relative py-2 px-6 rounded-lg border-2 border-main-secondary flex items-center space-x-2 max-w-fit cursor-pointer">
                                                        <HiFilter  className="text-sm text-gray-400" />
                                                        <span className="text-sm text-gray-400">Filter result by: </span> <span className="text-sm text-gray-400 font-semibold">{filterMsg}</span>
                                                        {
                                                                filterMenu && <ul className="absolute w-full top-full left-[-7px] right-0 mt-2 rounded-lg bg-main-primary px-4 py-4 space-y-3 border-main-secondary border-2 cursor-default">
                                                                                                        <li onClick={(e) => filterSelect(e, "original_title.asc")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Original Title</li>
                                                                                                        <li onClick={(e) => filterSelect(e, "popularity.asc")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Popularity Ascending</li>
                                                                                                        <li onClick={(e) => filterSelect(e, "popularity.desc")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Popularity Descending</li>
                                                                                                        <li onClick={(e) => filterSelect(e, "vote_average.asc")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Rating Ascending</li>
                                                                                                        <li onClick={(e) => filterSelect(e, "vote_average.desc")} className="text-sm border-b-2 border-main-secondary pb-2 cursor-pointer text-gray-300 font-semibold">Rating Descending</li>
                                                                                                </ul>
                                                        }
                                                </div>
                                        </div>
                                </div> */}
                                <div className="container window-size grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                        {
                                                data.results.map((items, index) => (
                                                        <Card data={items} key={index}></Card>
                                                ))
                                        }
                                </div>
                                <div className="load-more-btn text-center my-6">
                                        {/* <button className="btn-primary">Load More</button> */}
                                        <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default Movies