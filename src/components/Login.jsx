import { Link, useNavigate } from "react-router-dom"
import { GraphCMS } from "../utils/GraphQL"
import { gql } from "graphql-request"
import { useState } from "react"

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();

        const checkUser = async () => {
                const QUERY  = gql`
                        {
                                accounts(
                                        where: {email: "${email}", password: "${password}"}
                                        stage: DRAFT
                                        ) {
                                        email
                                        id
                                        profile
                                        username
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

        const LoginUser = async () => {
                const response = await checkUser();
                if (response) {
                        sessionStorage.setItem("userid", response.accounts[0].id)
                        sessionStorage.setItem("username", response.accounts[0].username)
                        sessionStorage.setItem("email", email)
                        sessionStorage.setItem("profile", response.accounts[0].profile)
                        navigate("/");
                        console.log(response.accounts[0])
                } else {
                        navigate("/register");
                }
        }

        return (
                <section className="login-in">
                        <div className="container flex justify-center items-center h-screen">
                                <form action="#" className="w-full max-w-md py-10 px-8 bg-white rounded-lg space-y-4 text-main-primary  mx-4">
                                        <h1 className="text-3xl text-main-primary font-bold text-center mb-10">Login</h1>
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Email address</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="text" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="password">Password</label>
                                                <input value={password} onChange={(e) => setPassword(e.target.value)}   className=" rounded-lg outline-none border-2 border-main-primary/[0.2] w-full h-12 px-4" type="password" id="password" placeholder="Enter your password" />
                                        </div>
                                        <a className=" inline-block my-4 text-main-secondary text-sm font-semibold" href="#">Forgot password?</a>
                                        <div className="input-group text-center">
                                                <a onClick={LoginUser} className=" bg-main-accent w-full h-12 rounded-lg text-white flex justify-center items-center font-semibold ease-in-out duration-300 cursor-pointer hover:bg-main-accent/[0.7] " >Login</a>
                                        </div>
                                        <div className="text-center">
                                                <span className="text-sm text-gray-500 font-secondary">Don't have an account? <Link className="text-main-primary text-sm font-semibold" to="/register">Register here</Link></span>
                                        </div>
                                </form>
                        </div>
                </section>
        )
}

export default Login