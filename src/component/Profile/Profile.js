import React from 'react';

export const Profile = ({ userData, updateUserData, showProfile, updateShowProfile }) => {
    return(
        <div>
            <p>{userData.firstName}</p>
            <p>{userData.lastName}</p>
            <p>{userData.email}</p>
            <p>{userData.password}</p>
            <p>{userData.confirmPassword}</p>
        </div>
    );
}