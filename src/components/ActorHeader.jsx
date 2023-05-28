import {data} from "../utils/actors"
import {BsFacebook, BsGoogle, BsLinkedin, BsTwitter} from "react-icons/bs"

const ActorHeader = ({data}) => {
        return (
                <section className="hero-section relative mt-[-20%]  window-size z-50" style={{zIndex: 1000}} >
                        <div className="container flex md:flex-col h-full space-x-10 md:space-x-0" style={{zIndex: 1000}}>
                                <div className="movie-img w-64 rounded-xl overflow-hidden">
                                        <img className="w-full" src={data.profile_path !== null ? `https://image.tmdb.org/t/p/w500${data.profile_path}` : "https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922_1280.jpg"} alt="" />
                                </div>
                                <div className="text-container w-4/6 space-y-4 md:w-full md:py-6">
                                        <h1 className="text-6xl font-bold md:text-4xl ease-in-out transition-all  duration-500">{data.name}</h1>
                                        <div className="flex space-x-10">
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Gender</span><span className="text-gray-300 text-sm font-semibold">{data.gender == 1 ? "Female" : "Male"}</span>
                                                </div>
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Birthday</span><span className="text-gray-300 text-sm font-semibold">{data.birthday}</span>
                                                </div>
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Place of Birth</span><span className="text-gray-300 text-sm font-semibold">{data.place_of_birth}</span>
                                                </div>
                                        </div>
                                        <div className="social-link flex items-center space-x-5">
                                                <BsFacebook  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                {/* <BsLinkedin className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300" /> */}
                                                <BsGoogle  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                <BsTwitter  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                        </div>
                                        <p className="text-2xl font-bold">Biography</p>
                                        <p className="font-semibold text-gray-300">
                                                {data.biography}
                                        </p>
                                </div>
                        </div>
                </section>
        )
}

export default ActorHeader