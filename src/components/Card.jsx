import {HiStar} from "react-icons/hi"

export const Card = ({data}) => {
        return (
                <div className="card">
                        <div className="img-container rounded-xl overflow-hidden cursor-pointer">
                                <img className="hover:scale-105 ease-in-out duration-500" src={data.imageUrl} alt="" />
                        </div>
                        <h3 className="my-2 text-sm font-semibold cursor-pointer">{data.title}</h3>
                        <div className="rating text-yellow-500 flex">
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                                <HiStar />
                        </div>
                </div>
        );
}