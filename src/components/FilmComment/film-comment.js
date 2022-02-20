import React from 'react';
import dayjs from "dayjs";

export const FilmComment = ({commentData}) => {

    const {emoji, author, day, text} = commentData;
    const dayFormated = dayjs(day).format(`YYYY/MM/DD hh:mm`);

    return (
        <li className="film-details__comment">
            <span className="film-details__comment-emoji">
              <img src={emoji} width="55" height="55" alt="emoji-puke">
              </img>
            </span>
            <div>
                <p className="film-details__comment-text">{text}</p>
                <p className="film-details__comment-info">
                    <span className="film-details__comment-author">{author}</span>
                    <span className="film-details__comment-day">{dayFormated}</span>
                    <button className="film-details__comment-delete">Delete</button>
                </p>
            </div>
        </li>
    );
};

export default FilmComment;
