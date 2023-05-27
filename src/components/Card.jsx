import {HiStar} from "react-icons/hi"
import { useNavigate } from "react-router-dom"


export const Card = ({data}) => {
        const navigate = useNavigate();

        const gotoMovie = () => {
                navigate(`/movie/${data.id}`);
        }

        return (
                <div className="card" onClick={gotoMovie}>
                        <div className="img-container rounded-xl overflow-hidden cursor-pointer">
                                <img className="hover:scale-105 ease-in-out duration-500" src={data.poster_path !== null ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922_1280.jpg"} alt="" />
                        </div>
                        <h3 className="my-2 mb-0 text-sm font-semibold cursor-pointer">{data.title || data.name}</h3>
                        <p className="text-sm text-gray-500 font-semibold font-primary">{data.release_date || data.first_air_date}</p>
                        {/* <div className="rating text-yellow-500 flex">
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                        </div> */}
                </div>
        );
}