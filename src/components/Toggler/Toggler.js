import React from 'react';
import './Toggler.style.css';

const Toggler = ({visible, onToggle}) => {
    return (
        <button className={
			`testGradesTogglerButton
			${visible
				? 'minusBackground'
				: 'plusBackground'}` 
			}
			onClick={onToggle}
		/>
    );
};

export default Toggler;
