import {HiBriefcase, HiStar} from "react-icons/hi"
import { useNavigate } from "react-router-dom"

export const ActorsCard = ({data}) => {
        const navigate = useNavigate();

        const gotoActors = () => {
                navigate(`/actor/${data.id}`);
        }

        return (
                <div className="card" onClick={gotoActors}>
                        <div className="img-container rounded-xl overflow-hidden cursor-pointer">
                                <img  className="hover:scale-105 ease-in-out duration-500" src={data.profile_path !== null ? `https://image.tmdb.org/t/p/w500${data.profile_path}` : "https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922_1280.jpg"} alt="" />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold cursor-pointer">{data.name}</h3>
                        <p className=" text-sm text-gray-400 flex items-center"><HiBriefcase className="mr-1" /> 
                                {
                                        data.character == null ? data.known_for_department : data.character
                                } 
                                {/* { data.location.length < 25 ? data.location : data.location.slice(0,20) + "..."} */}
                        </p>
                </div>
        );
}