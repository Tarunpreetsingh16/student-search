import React from 'react';
import './TagInputDisplay.style.css';
import Tag from './../Tag/Tag.js';
import CustomTextInput from '../CustomTextInput/CustomTextInput';

const TagInputDisplay = ({tagsToDisplay, propsForTextInput}) => {
    return (
        <div className="tagInputDisplayContainer">
            {
                tagsToDisplay && tagsToDisplay.map((tag, index) =>
                    <Tag text={tag} key={index}/> )
            }
            <div className='tagInputContainer'>
                <CustomTextInput
                    placeholder={propsForTextInput.placeholder}
                    onEnterPress={propsForTextInput.onEnterPress}
                />
            </div>
        </div>
    );
};

export default TagInputDisplay;
