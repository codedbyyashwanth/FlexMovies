import Navbar from "../components/Navbar";
import Overlay from "../components/Bgoverlay";
import {HeroSection} from "../components/home/HeroSection";
import { useState } from "react";
import { CardSection } from "../components/CardSection";
import { Footer } from "../components/Footer";


const url = `https://images.unsplash.com/photo-1680950781367-fe720fae1e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
const bg = `bg-[url("https://images.unsplash.com/photo-1680950781367-fe720fae1e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")]`;

export const Home = () => {
        const [bgUrl, setBgUrl] = useState("");
        
        return (
                <>
                        <header className="relative min-h-screen" style={{ backgroundImage : `url(${bgUrl})` }}>
                                <Overlay name="top-overlay" top="top-0" />
                                <Navbar />
                                <Overlay name="bottom-overlay" top="top-3/4" />
                                <HeroSection setBgUrl={setBgUrl} />
                        </header>
                        <main className="py-6">
                                <CardSection sectionTitle="Popular Movies" />
                                <CardSection sectionTitle="Upcoming Movies" />
                                <CardSection sectionTitle="TV Shows" />
                                <CardSection sectionTitle="Top-Rated Movies" />
                        </main>
                        <Footer />
                </>
        );
}