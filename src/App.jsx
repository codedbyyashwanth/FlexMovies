import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Actors from "./pages/Actors";
import { MovieDetails } from "./pages/MovieDetails";

const App = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/tv-shows" element={<TVShows />} />
                  <Route path="/actors" element={<Actors />} />
                  <Route path="/movie" element={<MovieDetails />} />
            </Routes>
      );
}

export default App