import React from 'react';
import dayjs from "dayjs";

const FilmCard = (props) => {

    const {caption, poster, description, rating, duration, comments, releaseDate, genres} = props.filmadata;
    console.log(comments);
    const commentsCount = comments.length;
    const allGenres = genres.join(`,`);
    const creteYear =  dayjs(releaseDate).format(`YYYY`);
    const formatedDuration = `${duration.h}h ${duration.m}m`;



    console.log(poster);
    return (
        <article className="film-card">
            <h3 className="film-card__title">{caption}</h3>
            <p className="film-card__rating">{rating}</p>
            <p className="film-card__info">
                <span className="film-card__year">{creteYear}</span>
                <span className="film-card__duration">{formatedDuration}</span>
                <span className="film-card__genre">{allGenres}</span>
            </p>
            <img src={poster} alt={caption} className="film-card__poster">
            </img>

            <p className="film-card__description">{description}</p>
            <a className="film-card__comments">{commentsCount} comments</a>
            <div className="film-card__controls">
                <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist"
                        type="button">Add to watchlist
                </button>
                <button className="film-card__controls-item button film-card__controls-item--mark-as-watched"
                        type="button">Mark as watched
                </button>
                <button className="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as
                    favorite
                </button>
            </div>
        </article>)
};

export default FilmCard;
