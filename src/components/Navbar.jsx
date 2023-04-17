import { useEffect, useState } from "react"
import Logo from "../assets/logo-white.png"
import {HiSearch, HiMenuAlt1, HiUserCircle, HiOutlineX, HiX} from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
const navigations = [
      {
           title: "Home",
           url: "/",
      }, 
      {
            title: "Movies",
            url: "/movies",
      }, 
      {
           title: "TV Shows",
            url: "/tv-shows",
      }, 
      {
            title: "Actors",
            url: "/actors",
      }
]

const SearchContainer = ({setSearchMenu}) => {
      const [search, setSearch] = useState("");

      return (
            <div  onClick={() => setSearchMenu(false)} className="search-container absolute top-0 left-0 right-0 w-full h-screen bg-gray-800/[0.9] z-50">
                  <div onClick={(e) => e.stopPropagation()} className="container flex justify-center">
                        <div className="search-box text-center flex items-center bg-white mt-10 px-4  py-4 rounded-lg border-2 relative mx-2"  style={{width : "100%", maxWidth : "30rem"}}>
                              <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-3 outline-none border-none text-gray-900 h-full font-semibold text-lg" />
                              {
                                    search.length == 0 ? <HiSearch className="text-gray-900 text-xl" /> : <HiX className="text-gray-900 text-xl cursor-pointer" onClick={() => setSearch("")} />
                              }

                              <div className="absolute top-[120%] left-0 right-0 w-full bg-white rounded-lg py-6 px-6">
                                    <ul className=" space-y-4">
                                          <li className="text-main-primary text-left cursor-pointer border-b-2 pb-2 border-main-secondary/[0.4]">
                                                <span className="block font-bold">John Wick: Chapter 3 (2023)</span>
                                                <span className="block font-semibold text-xs text-main-primary/[0.8] ">Directed by: Ross Gellar</span>
                                          </li>
                                          <li className="text-main-primary text-left cursor-pointer border-b-2 pb-2 border-main-secondary/[0.4]">
                                                <span className="block font-bold">John Wick: Chapter 3 (2023)</span>
                                                <span className="block font-semibold text-xs text-main-primary/[0.8] ">Directed by: Ross Gellar</span>
                                          </li>
                                          <li className="text-main-primary text-left cursor-pointer border-b-2 pb-2 border-main-secondary/[0.4]">
                                                <span className="block font-bold">John Wick: Chapter 3 (2023)</span>
                                                <span className="block font-semibold text-xs text-main-primary/[0.8] ">Directed by: Ross Gellar</span>
                                          </li>
                                          <li className="text-main-primary text-left cursor-pointer border-b-2 pb-2 border-main-secondary/[0.4]">
                                                <span className="block font-bold">John Wick: Chapter 3 (2023)</span>
                                                <span className="block font-semibold text-xs text-main-primary/[0.8] ">Directed by: Ross Gellar</span>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

const Navbar = () => {
      const [navOpen, setNavOpen] = useState(false);
      const [accMenu, setAccMenu] = useState(false);
      const [loggedIn, setLoggedIn] = useState(false);
      const [searchMenu, setSearchMenu] = useState(false);
      const navigate = useNavigate();

      {
            searchMenu ? 
            document.getElementsByTagName("body")[0].style.overflow = "hidden" : 
            document.getElementsByTagName("body")[0].style.overflow = "auto"
      }

      useEffect(() => {
            if (sessionStorage.getItem("username") != null) {
                  setLoggedIn(true);

            }
      }, [])

      const logout = () => {
            sessionStorage.clear();
            navigate("/login");
      }

      return (
            <nav className="z-10">
                  {
                        searchMenu && <SearchContainer setSearchMenu={setSearchMenu} />
                  }
                  <div className="container window-size flex justify-between items-center py-1 sm:px-3 relative">
                        <div className="logo-container w-36 sm:w-32">
                              <img className="w-full" src={Logo} alt="Logo" />
                        </div>
                        <div className="nav-items sm:hidden">
                              <div className="container flex justify-center space-x-8">
                                    {
                                          navigations.map((pages, index) => (
                                                <div className="nav-item" key={index}>
                                                      <div className="nav-link">
                                                            <Link to={pages.url}  className=" transition-all ease-in-out duration-400 tracking-wide font-semibold text-md hover:text-main-accent">{pages.title}</Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                        <div className="profile-items">
                              <div className="container flex items-center space-x-3">
                                    <HiSearch onClick={() => setSearchMenu(!searchMenu)} className=" text-2xl cursor-pointer"/>
                                    <div className="profile-icon relative">
                                          <div className=" w-10 h-10 rounded-full overflow-hidden cursor-pointer border-4 border-main-secondary" onClick={() => setAccMenu(!accMenu)}>
                                                <img className="w-full h-full object-cover object-center" src={sessionStorage.getItem("profile") ? sessionStorage.getItem("profile") : "https://st.depositphotos.com/1898481/5087/i/450/depositphotos_50878063-stock-photo-people.jpg"} alt="" />
                                          </div>
                                          {
                                                accMenu && <ul className=" w-44 space-y-3 rounded-lg absolute top-full right-0 bg-main-primary border-2 border-main-secondary py-4 px-5 mt-2">
                                                {
                                                      loggedIn ? <>
                                                            <h2 className="text-md border-b-2 border-main-secondary pb-2  font-semibold">{sessionStorage.getItem("username")}</h2>
                                                            <li className="text-sm border-main-secondary pb-2 cursor-pointer text-gray-400 font-semibold hover:text-main-accent ease-in-out duration-300"><Link to="/settings">Account Settings</Link></li>
                                                            <li className="text-sm border-main-secondary pb-2 cursor-pointer text-gray-400 font-semibold hover:text-main-accent ease-in-out duration-300"><Link to="/favourite">Favourite</Link></li>
                                                            <li onClick={logout} className="text-sm border-main-secondary pb-2 cursor-pointer text-gray-400 font-semibold hover:text-main-accent ease-in-out duration-300">Logout</li>
                                                      </> : <>
                                                      <li className="text-md border-b-2 border-main-secondary pb-2  font-semibold">Account</li>
                                                      <li className="text-sm border-main-secondary pb-2 cursor-pointer text-gray-400 font-semibold hover:text-main-accent ease-in-out duration-300"><Link to="/login">Login</Link></li>
                                                      <li className="text-sm border-main-secondary pb-2 cursor-pointer text-gray-400 font-semibold hover:text-main-accent ease-in-out duration-300"><Link to="/register">Register</Link></li></>
                                                }
                                          </ul>
                                          }
                                    </div>
                                    <HiMenuAlt1  className=" text-4xl rotate-180 hidden sm:block sm:text-3xl"  onClick={ () => setNavOpen(true) }/>
                              </div>
                        </div>

                        <div style={{zIndex : 1000}} className={`mobile-nav absolute top-0 right-0 w-3/4 h-screen shadow-lg bg-main-primary ${ navOpen ? "block" : "hidden" }`}>
                              <div className="w-full py-5 px-3 text-right">
                                    <HiOutlineX className=" inline text-3xl" onClick={ () => setNavOpen(false) }  />
                              </div>
                              <div className="mobile-nav-items text-left px-10 space-y-6">
                                    {
                                          navigations.map((pages, index) => (
                                                <div className="nav-item" key={index}>
                                                      <div className="nav-link">
                                                            <Link to={pages.url}   className=" transition-all tracking-wide font-medium hover:text-main-accent">{pages.title}</Link>
                                                      </div>
                                                      <hr className=" bg-gray-500 border-none h-0 my-1 rounded-lg"/>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar