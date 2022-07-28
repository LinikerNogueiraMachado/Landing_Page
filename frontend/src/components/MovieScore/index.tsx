import './style.css';

import MovieStar from "components/MovieStars";

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="container__score">
            <p className="value__score">{score > 0 ? score.toFixed(1) : '-'} </p>
            <MovieStar />
            <p className="count__score">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;