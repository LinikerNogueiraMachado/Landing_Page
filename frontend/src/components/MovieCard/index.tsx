import MovieScore from "components/MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: " https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return(
        <div className="form__container">
            <img className="card__image--movie" src={movie.image} alt={movie.title} />
            <div className="card__container--bottom">
                <h3>{movie.title}</h3>
                <MovieScore/>
                <div className="btn btn--primary LandingPage--btn"> Qual sua Avaliação para este filme?</div>
            </div>
        </div>
    )
}

export default MovieCard;