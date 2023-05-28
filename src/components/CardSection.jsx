import { Card } from "./Card";
// import { data } from "../utils/data";
import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const CardSection = ({sectionTitle, data, media, url}) => {
        const navigate = useNavigate();
        const handle = (e) => {
                e.preventDefault();
                navigate(`/${media}`)
        }

        return (
                <section className="movie-card-section window-size mb-10">
                        <div className="heading-container flex justify-between items-center">
                                <h3 className=" text-lg font-semibold">{sectionTitle}</h3>
                                <a className="btn-small flex justify-center items-center cursor-pointer" onClick={(e) => handle(e)}>View More <HiChevronRight className="text-lg flex justify-center items-center" /></a>
                        </div>
                        <div className="container grid grid-cols-6 gap-4 my-6 md:grid-cols-3 sm:grid-cols-2">
                                {
                                        data.results.slice(0, 6).map((items, index) => (
                                                <Card data={items} key={index} media={url ? url : "movie"}></Card>
                                        ))
                                }
                        </div>
                </section>
        );
}