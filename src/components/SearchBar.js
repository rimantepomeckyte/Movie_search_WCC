import React, {useEffect, useRef} from 'react';
import movie from '../icons/movie.svg';
import search from '../icons/search.svg';

const SearchBar = ({searchValue, setSearchValue, setDisplay}) => {
const autoCompleteRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutOfList);
        return () => {
            window.removeEventListener("mousedown", handleClickOutOfList)
        };
    }, []);
    const handleClickOutOfList = e => {
        const {current: autoComplete} = autoCompleteRef;
        if (autoComplete && !autoComplete.contains(e.target)) {
            setDisplay(false);
        }
    }

    const alertOnClick = () => {
        alert("Good choice!");
    }

    return (
        <header className="container-fluid py-4">
            <div ref={autoCompleteRef}>
                <img src={movie} alt='movie' className="movie-icon"/>
                <input type="text"
                       className="w-100 border-0 py-3"
                       placeholder="Enter movie name"
                       value={searchValue}
                       onClick={() => setDisplay(true)}
                       onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <button type="submit" className="border-0" onClick={alertOnClick}>
                <img src={search} alt='search-icon' className="search-icon "/>
            </button>
        </header>
    );
};

export default SearchBar;
