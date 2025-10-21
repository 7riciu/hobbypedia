
'use client';

function Hobbies({hobby}) {

    function onFavoriteClick() {
        alert("Clicked!")
    }
    return (
        <div className="hobby-card">
            <div className="hobby-image">
                <img src={hobby.url} alt={hobby.title}></img>
                <button className="favorite-button" onClick={onFavoriteClick}>
                    Yay
                </button>
            </div>
            <div className="hobby-info">
                <h3>{hobby.title}</h3>
                <p>{hobby.time}</p>
            </div>
        </div>
    )
}

export default Hobbies