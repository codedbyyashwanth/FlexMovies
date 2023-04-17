import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {GraphCMS} from "../utils/GraphQL";
import { gql } from "graphql-request";


const Settings = () => {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [url, setUrl] = useState("");
        const navigate = useNavigate();

        useEffect(() => {
                setUsername(sessionStorage.getItem("username"));
                setEmail(sessionStorage.getItem("email"));
                setUrl(sessionStorage.getItem("profile"));
        }, [])

        const changeUser = async (username, email, url) => {
                const QUERY = gql`
                        mutation {
                                updateAccount(
                                        where: { id: "${sessionStorage.getItem("userid")}" }
                                        data: {
                                                username: "${username}",
                                                email: "${email}",
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
        
        const UpdateUser = async () => {
                const response = await changeUser(username, email, url);
                if (response) {
                        sessionStorage.setItem("username", username)
                        sessionStorage.setItem("email", email)
                        sessionStorage.setItem("profile", url)
                        navigate("/");
                } else {
                        navigate("/login");
                }
        }

        return (
                <section className="login-in">
                        <div className="container flex justify-center items-center h-screen">
                                <form action="#" className="w-full max-w-md py-10 px-8 bg-white rounded-lg space-y-4 text-main-primary mx-4">
                                        <h1 className="text-3xl text-main-primary font-bold text-center mb-2">Account Setting</h1>
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Username</label>
                                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="email" placeholder="Enter username" />
                                        </div>
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Email address</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="url">Profile Pic URL</label>
                                                <input value={url} onChange={(e) => setUrl(e.target.value)}  className=" rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="url" placeholder="Paste the url" />
                                        </div>
                                        <div className="input-group text-center ">
                                                <a onClick={UpdateUser} className="mt-8 bg-main-accent w-full h-12 rounded-lg text-white flex justify-center items-center font-semibold ease-in-out duration-300 cursor-pointer hover:bg-main-accent/[0.7] " >Update Account</a>
                                        </div>
                                </form>
                        </div>
                </section>
        )
}

export default Settings