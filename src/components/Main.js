import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import SearchAutocomplete from "./SearchAutocomplete";

const Main = () => {
    const [searchValue, setSearchValue] = useState("");
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=6e076e742686ddf085ce65c9f616d990&query=${searchValue}`;

    const reducedOptions = [];
    const getMovies = async () => {
        if (searchValue !== '' && searchValue.length>=3) {
            try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            //console.log(data.results);
            const movies = data.results;
            movies.forEach(movie => {
                if (reducedOptions.length < 8) {
                    reducedOptions.push(movie)
                }
            });
            setOptions(reducedOptions);} catch (error) {
                console.log("Something went wrong!");
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getMovies();
    }, [searchValue]);

    const setSearchInput = movie => {
        setSearchValue(movie);
        setDisplay(false);
        //console.log(searchValue)
    }

    return (
        <div className="mainDiv">
            <SearchBar setDisplay={setDisplay} searchValue={searchValue} setSearchValue={setSearchValue} />
            <SearchAutocomplete options={options} display={display} setSearchInput={setSearchInput} searchValue={searchValue}/>
        </div>
    );
};

export default Main;