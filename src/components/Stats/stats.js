import React from 'react';

const Stats = ({userData}) => {

    const {profileAvatar, profileRating, historyCount, history, favoriteGenre} = userData;
    let totalDuartion = 0;

    history.forEach((current) => {
        totalDuartion = totalDuartion + current.duration.h * 60 + current.duration.m;
    });

    // console.log(`duration :${totalDuartion}`);
    const totalHour = Math.floor(totalDuartion / 60);
    const totalMin = totalDuartion - totalHour * 60;


    return (
        <section className="statistic">
            <p className="statistic__rank">
                Your rank
                <img className="statistic__img" src={profileAvatar} alt="Avatar" width="35" height="35">
                </img>
                <span className="statistic__rank-label">${profileRating}</span>
            </p>

            <form action="https://echo.htmlacademy.ru/" method="get" className="statistic__filters">
                <p className="statistic__filters-description">Show stats:</p>

                <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter"
                       id="statistic-all-time" value="all-time" checked>
                </input>
                <label htmlFor="statistic-all-time" className="statistic__filters-label">All time</label>

                <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter"
                       id="statistic-today" value="today">
                </input>

                <label htmlFor="statistic-today" className="statistic__filters-label">Today</label>

                <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter"
                       id="statistic-week" value="week">
                </input>
                <label htmlFor="statistic-week" className="statistic__filters-label">Week</label>

                <input type="radio" className="statistic__filters-input visually-hidden"
                       name="statistic-filter" id="statistic-month" value="month">
                </input>
                <label htmlFor="statistic-month" className="statistic__filters-label">Month</label>

                <input type="radio" className="statistic__filters-input visually-hidden"
                       name="statistic-filter" id="statistic-year" value="year">
                </input>
                <label htmlFor="statistic-year" className="statistic__filters-label">Year</label>
            </form>

            <ul className="statistic__text-list">
                <li className="statistic__text-item">
                    <h4 className="statistic__item-title">You watched</h4>
                    <p className="statistic__item-text">{historyCount} <span
                        className="statistic__item-description">movies</span></p>
                </li>
                <li className="statistic__text-item">
                    <h4 className="statistic__item-title">Total duration</h4>
                    <p className="statistic__item-text">{totalHour}<span
                        className="statistic__item-description">h</span> {totalMin} <span
                        className="statistic__item-description">m</span></p>
                </li>
                <li className="statistic__text-item">
                    <h4 className="statistic__item-title">Top genre</h4>
                    <p className="statistic__item-text">{favoriteGenre}</p>
                </li>
            </ul>

            <div className="statistic__chart-wrap">
                <canvas className="statistic__chart" width="1000"></canvas>
            </div>

        </section>
    );
};

export default Stats;
