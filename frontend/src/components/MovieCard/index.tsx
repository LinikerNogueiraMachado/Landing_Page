import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: " https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="form__container">
            <img className="card__image--movie" src={movie.image} alt={movie.title} />
            <div className="card__container--bottom">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                   <div className="btn btn--primary LandingPage--btn"><h3>Avaliar filme</h3> </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;