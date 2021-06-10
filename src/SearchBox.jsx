import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col    search'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder="Search Your Favourite Movie Here..."
			></input>
			
		</div>
	);
};

export default SearchBox;