import { createContext } from "react";

export const MoviesContext = createContext({});

export const getMedia = async (filter, media) => {
        const endpoint = `https://api.themoviedb.org/3/${media}/${filter}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}


export const getNextPage = async (filter, media, page) => {
        const endpoint = `https://api.themoviedb.org/3/${media}/${filter}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US&page=${page}`;
        const response = await fetch(endpoint);
        return response.json();
}

export const getActors = async (filter, page) => {
        const endpoint = `https://api.themoviedb.org/3/person/${filter}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US&page=${page}`;
        const response = await fetch(endpoint);
        return response.json();
}

export const getDetails = async (media,id) => {
        const endpoint = `https://api.themoviedb.org/3/${media}/${id}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}

export const getRelated = async (media, id) => {
        const endpoint = `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}

export const getInfo = async (media, id) => {
        const castEndpoint = `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const castData = await fetch(castEndpoint);
        return castData.json();
}

export const getVideo = async (media, id) => {
        const videoEndpoint = `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const videourl = await fetch(videoEndpoint);
        return videourl.json();
}

export const getActorDetails = async (id) => {
        const endpoint = `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}

export const getActorMovies = async (id) => {
        const endpoint = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_APP_API_TOKEN}&language=en-US`;
        const response = await fetch(endpoint);
        return response.json();
}