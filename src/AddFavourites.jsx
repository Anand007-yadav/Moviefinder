import React from 'react';
import {BeakerIcon, ZapIcon,HeartIcon,TrashIcon,SearchIcon} from '@primer/octicons-react'
const AddFavourite = () => {
	return (
		<>
			<span className='mr-auto'>Add to Favourites</span>
			<HeartIcon size={24} className='iconadd' />
		</>
	);
};

export default AddFavourite;