import {data} from "../utils/actors"
import {BsFacebook, BsGoogle, BsLinkedin, BsTwitter} from "react-icons/bs"

const ActorHeader = () => {
        return (
                <section className="hero-section relative mt-[-20%]  window-size z-50" style={{zIndex: 1000}} >
                        <div className="container flex md:flex-col h-full space-x-10 md:space-x-0" style={{zIndex: 1000}}>
                                <div className="movie-img w-64 rounded-xl overflow-hidden">
                                        <img className="w-full" src={data[0].imageUrl} alt="" />
                                </div>
                                <div className="text-container w-4/6 space-y-4 md:w-full md:py-6">
                                        <h1 className="text-6xl font-bold md:text-4xl ease-in-out transition-all  duration-500">{data[0].name}</h1>
                                        <div className="flex space-x-10">
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Gender</span><span className="text-gray-300 text-sm font-semibold">Male</span>
                                                </div>
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Birthday</span><span className="text-gray-300 text-sm font-semibold">1965-04-04 (58 years old)</span>
                                                </div>
                                                <div className="info">
                                                        <span className="block text-lg font-bold">Place of Birth</span><span className="text-gray-300 text-sm font-semibold">New York City, New York, USA</span>
                                                </div>
                                        </div>
                                        <div className="social-link flex items-center space-x-5">
                                                <BsFacebook  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                <BsLinkedin className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300" />
                                                <BsGoogle  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                <BsTwitter  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                        </div>
                                        <p className="text-2xl font-bold">Biography</p>
                                        <p className="font-semibold text-gray-300">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eaque aspernatur, labore rem rerum dolorum velit similique. Itaque repellat dolorem fugit tenetur inventore consectetur aspernatur quia eum. Cupiditate, neque explicabo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas sint eveniet reiciendis. Inventore voluptas et exercitationem nihil voluptatem. Praesentium dolor iure natus culpa velit dolores expedita consectetur amet accusamus.
                                                <br /><br />
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam beatae pariatur deleniti iure perspiciatis impedit mollitia expedita blanditiis ad repellat repellendus laudantium a commodi atque, soluta architecto ipsa nulla.

                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laboriosam odit reiciendis ab in laborum, ea quisquam, est maiores totam labore culpa placeat perferendis eos ullam nemo sint, voluptas enim.
                                                Esse quaerat dolor nam earum dolorum maxime tempore culpa, veniam quidem dolores suscipit, debitis aliquid eos, repellendus quo. Consectetur blanditiis nostrum nam aperiam repudiandae quam delectus minus laboriosam, harum eligendi!
                                                Iste velit deleniti enim fugiat omnis, molestiae ut. Tempora dolorem rem ipsa nostrum laborum, dicta iusto neque facilis quia porro qui minima. Vel explicabo perspiciatis non, nostrum hic temporibus ea?
                                        </p>
                                </div>
                        </div>
                </section>
        )
}

export default ActorHeader