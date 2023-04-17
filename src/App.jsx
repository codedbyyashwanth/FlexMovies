import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Actors from "./pages/Actors";
import { MovieDetails } from "./pages/MovieDetails";
import Actor from "./pages/Actor";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./pages/Settings";
import Favourite from "./pages/Favourite";

const App = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/tv-shows" element={<TVShows />} />
                  <Route path="/actors" element={<Actors />} />
                  <Route path="/actor" element={<Actor />} />
                  <Route path="/movie" element={<MovieDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/favourite" element={<Favourite />} />
            </Routes>
      );
}

export default App