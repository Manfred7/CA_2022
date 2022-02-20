import React from 'react';

const AppHeader = ({userInfo}) => {
    const {watchlistCount, historyCount, favoritesCount} = userInfo;

    return (
        <nav className="main-navigation">
            <div className="main-navigation__items">
                <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
                <a href="#watchlist" className="main-navigation__item">Watchlist <span
                    className="main-navigation__item-count">{watchlistCount}</span></a>
                <a href="#history" className="main-navigation__item">History <span
                    className="main-navigation__item-count">{historyCount}</span></a>
                <a href="#favorites" className="main-navigation__item">Favorites <span
                    className="main-navigation__item-count">{favoritesCount}</span></a>
            </div>
            <a href="#stats" className="main-navigation__additional">Stats</a>
        </nav>
    );
};

export default AppHeader;
