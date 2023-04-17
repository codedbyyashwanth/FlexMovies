import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {GraphCMS} from "../utils/GraphQL";
import { gql } from "graphql-request";


const Register = () => {
        // const [profile, setProfile] = useState(null);
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [url, setUrl] = useState("");
        const navigate = useNavigate();

        const createUser = async (username, email, password, url) => {
                const QUERY = gql`
                        mutation {
                                createAccount(data: {
                                        username: "${username}",
                                        email: "${email}",
                                        password: "${password}",
                                        profile: "${url}"
                                }) {
                                        id
                                }
                        }
                `;

                try {
                        const data = await GraphCMS.request(QUERY);
                        return data;
                } catch (error) {
                        return false
                }
        }
        
        const RegisterUser = async () => {
                const response = await createUser(username, email, password, url);
                if (response) {
                        sessionStorage.setItem("userid", response.createAccount.id)
                        sessionStorage.setItem("username", username)
                        sessionStorage.setItem("email", email)
                        sessionStorage.setItem("profile", url)
                        navigate("/");
                        console.log(response.createAccount.id)
                } else {
                        navigate("/login");
                }
        }

        return (
                <section className="login-in">
                        <div className="container flex justify-center items-center h-screen">
                                <form action="#" className="w-full max-w-md py-10 px-8 bg-white rounded-lg space-y-4 text-main-primary mx-4">
                                        <h1 className="text-3xl text-main-primary font-bold text-center mb-2">Register</h1>
                                        {/* <div className=" w-24 h-24 rounded-full overflow-hidden mx-auto">
                                                <label htmlFor="profile"><img className="w-full h-full object-cover object-center" src={ profile != null ? URL.createObjectURL(profile) : Pick} alt="ss" /></label>
                                                <img className="w-full h-full object-cover object-center" src={ profile != null ? URL.createObjectURL(profile) : Pick} alt="ss" />
                                        </div>
                                        <div className=" text-center">
                                        <div className=" inline relative w-10 my-2">
                                                <input type="file" className=" absolute opacity-0 top-0 w-full h-full inline" id="profile" onChange={(e) => setProfile(e.target.files[0])}  />
                                                <label htmlFor="profile" className="w-full bg-main-accent rounded-md py-2 px-6 text-white">Choose Pic</label>
                                        </div>
                                        </div> */}
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Username</label>
                                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="email" placeholder="Enter username" />
                                        </div>
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Email address</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="password">Password</label>
                                                <input value={password} onChange={(e) => setPassword(e.target.value)}  className=" rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="password" id="password" placeholder="Enter your password" />
                                        </div>
                                        <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="url">Profile Pic URL</label>
                                                <input value={url} onChange={(e) => setUrl(e.target.value)}  className=" rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="url" placeholder="Paste the url" />
                                        </div>
                                        {/* <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="password">Confirm Password</label>
                                                <input  className=" rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="password" id="password" placeholder="Enter your password" />
                                        </div> */}
                                        <div className="input-group text-center ">
                                                <a onClick={RegisterUser} className="mt-8 bg-main-accent w-full h-12 rounded-lg text-white flex justify-center items-center font-semibold ease-in-out duration-300 cursor-pointer hover:bg-main-accent/[0.7] " >Register</a>
                                        </div>
                                        <div className="text-center">
                                                <span className="text-sm text-gray-500 font-secondary">Already have an account? <Link className="text-main-primary text-sm font-semibold" to="/login">Login here</Link></span>
                                        </div>
                                </form>
                        </div>
                </section>
        )
}

export default Register