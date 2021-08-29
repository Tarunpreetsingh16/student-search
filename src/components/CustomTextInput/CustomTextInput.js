import React from 'react';
import './CustomTextInput.style.css';

const CustomTextInput = ({onInputChange, onEnterPress, placeholder}) => {

	const handleOnPress = (event) => {
		if (event.key === 'Enter') {
			onEnterPress(event.target.value)
			event.target.value = '';
		};
	};

	return (
        <input
			type='text'
			placeholder={placeholder}
			className='inputField'
			onChange={(event) => onInputChange ? onInputChange(event.target.value) : null}
			onKeyPress={(event) => handleOnPress(event)}
		/>
	);
};

export default CustomTextInput;
