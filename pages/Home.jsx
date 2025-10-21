'use client';

import Hobbies from "../components/Hobbies"

function Home() {

    const hobbies = [
        {id: 1, title: "art"},
        {id: 2, title: "coding"},
        {id: 3, title: "roblox"},
        {id: 4, title: "reading"}
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" />
                <button type="submit" className="search-button">
                    Search
                </button>    
            </form>

            <div>
                {hobbies.map((hobby) => (
                    <Hobbies hobby={hobby} key={hobby.id} />
                ))}
            </div>
        </div>
    );
}

export default Home