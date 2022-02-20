import React from 'react';

const UsersTitle = ({Userdata}) => {
    const {profileAvatar, profileRating} = Userdata;

    return (
        <section className="header__profile profile">
            <p className="profile__rating">{profileRating}</p>
            <img className="profile__avatar" src={profileAvatar} alt="Avatar" width="35" height="35">
        </section>
        )
);


export default UsersTitle;
