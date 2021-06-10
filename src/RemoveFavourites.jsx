import React from 'react';
import {BeakerIcon, ZapIcon,HeartIcon,TrashIcon} from '@primer/octicons-react'
const RemoveFavourites = () => {
	return (
		<>
			<span className='mr-2'>Remove from favourites</span>
			<TrashIcon size={24}className='iconadd'/>
		</>
	);
};

export default RemoveFavourites;