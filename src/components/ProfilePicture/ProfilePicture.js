import React from 'react';
import './ProfilePicture.style.css';

const ProfilePicture = ({source, alt}) => {
    return (
        <div className='pictureContainer'>
            <img src={source} alt={alt} className='picture' />
        </div>
    );
};
export default ProfilePicture;
