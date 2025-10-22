'use client';

import Hobbies from "../components/Hobbies"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const hobbies = [
        {id: 1, title: "art"},
        {id: 2, title: "coding"},
        {id: 3, title: "roblox"},
        {id: 4, title: "reading"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("aaaaa")
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>    
            </form>

            <div className="hobby-grid">
                {hobbies.map(
                    (hobby) =>
                    hobby.title.toLowerCase().startsWith(searchQuery) && (<Hobbies hobby={hobby} key={hobby.id}/>)
                )}
            </div>
        </div>
    );
}

export default Home;