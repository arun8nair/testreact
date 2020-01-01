import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className="bg-light-blue pa3 ba" 
            placeholder="Search robots" 
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;