import React from 'react';
import './Tag.style.css';

const Tag = ({text}) => {
	return (
        <div className='tag'>
            {text}
        </div>
	);
};

export default Tag;
