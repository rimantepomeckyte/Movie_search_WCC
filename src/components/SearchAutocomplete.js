import React from 'react';

const SearchAutocomplete = ({searchValue, setSearchInput, display, options}) => {
    return (
        <>
            {(display && searchValue.length>=3) && (
                <div className="bg-white autoContainer p-2 ">
                    <hr className="m-0 p-0"/>
                    {options.length ?
                        options.map((option, index)=>{
                                let splitedDate=[];
                                if(option.release_date){
                                    splitedDate = option.release_date.split('-');}
                                return (
                                    <div className="option py-2" key={index}
                                         onMouseDown={()=> setSearchInput(option.title)}>
                                        <div className="mb-0 pb-0 font-weight-bold"> {option.title}</div>
                                        <div className="text-secondary smallerFontSize">{option.vote_average} Rating, <span>{splitedDate[0]}</span>
                                        </div>
                                    </div>
                                )
                            }) : <div className="option py-2">No suggestions available</div>
                    }
                </div>
            )}
        </>
    );
};

export default SearchAutocomplete;