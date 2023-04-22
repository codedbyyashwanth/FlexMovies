import {HiStar} from "react-icons/hi"

export const Card = ({data}) => {
        return (
                <div className="card">
                        <div className="img-container rounded-xl overflow-hidden cursor-pointer">
                                <img className="hover:scale-105 ease-in-out duration-500" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
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