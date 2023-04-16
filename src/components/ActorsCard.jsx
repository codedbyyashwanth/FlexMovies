import {HiLocationMarker, HiStar} from "react-icons/hi"

export const ActorsCard = ({data}) => {
        return (
                <div className="card">
                        <div className="img-container rounded-xl overflow-hidden cursor-pointer">
                                <img  className="hover:scale-105 ease-in-out duration-500" src={data.imageUrl} alt="" />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold cursor-pointer">{data.name}</h3>
                        <p className=" text-sm text-gray-400 flex items-center"><HiLocationMarker className="mr-1" /> { data.location.length < 25 ? data.location : data.location.slice(0,20) + "..."}</p>
                </div>
        );
}