import { createContext } from "react";

export const MoviesContext = createContext({});

export const getMedia = async (filter, media) => {
        const endpoint = `https://api.themoviedb.org/3/${media}/${filter}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}
