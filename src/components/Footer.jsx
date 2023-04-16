import {BsFacebook, BsGoogle, BsLinkedin, BsTwitter} from "react-icons/bs"
import Logo from "../assets/logo-white.png"
import Overlay from "./Bgoverlay";

export const Footer = () => {
        return (
                <footer className="w-full py-20 relative md:pt-60">
                        <Overlay name="top-overlay" top="top-0" />
                        <div className="container window-size flex justify-between items-center flex-wrap">
                                <div className="company-container space-y-5 m-2">
                                        <div className="logo-container w-36 sm:w-32">
                                                <img className="w-full" src={Logo} alt="Logo" />
                                        </div>
                                        <p className="w-full max-w-md text-sm font-semibold">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsa delectus earum, deserunt dolorum eveniet. 
                                        </p>
                                        <div className="social-link flex items-center space-x-5">
                                                <BsFacebook  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                <BsLinkedin className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300" />
                                                <BsGoogle  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                                <BsTwitter  className="w-9 h-9 rounded-full p-2 bg-white text-main-primary cursor-pointer hover:text-main-accent ease-in-out duration-300"/>
                                        </div>
                                </div>
                                <div className="navigation-container space-y-3 m-2">
                                        <h3 className="text-md font-semibold text-main-accent">Menu Links</h3>
                                        <ul className=" space-y-3">
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Home</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Movies</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">TV Shows</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Actors</li>
                                        </ul>    
                                </div>
                                <div className="legal-contaainer space-y-3 m-2">
                                        <h3 className="text-md font-semibold text-main-accent">Other Links</h3>
                                        <ul className=" space-y-3">
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">FAQ</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">About</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Privacy Policy</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Terms & Condition</li>
                                        </ul>
                                </div>
                                <div className="legal-contaainer space-y-3 m-2">
                                        <h3 className="text-md font-semibold text-main-accent">Other Links</h3>
                                        <ul className=" space-y-3">
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">FAQ</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">About</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Privacy Policy</li>
                                                <li className=" hover:text-main-accent ease-in-out duration-300 cursor-pointer text-sm font-semibold">Terms & Condition</li>
                                        </ul>
                                </div>
                        </div>
                </footer>
        );
}