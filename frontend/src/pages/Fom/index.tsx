import './style.css';

// ======== ======== declarando objeto ======= ======= //
const movie = {
    id: 1,
    image: " https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

function Form() {

    return (

        <div className="form__container">
            <img className="card__image--movie" src={movie.image} alt={movie.title} />
            <div className="card__container--bottom">
                <h3>{movie.title}</h3>
                <form className="form--LandingPage">
                    <div className="form__group form__group--LandingPage">
                        <label htmlFor="email">Informe seu e-mail: </label>
                        <input type="email" className="form__control" id="email" />
                    </div>
                    <div className="form__group form__group--LandingPage">
                        <label htmlFor="score"><h2>Qual a sua avaliação?</h2></label>
                        <select className="form__control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form__container--btn">
                        <button type="submit" className="btn btn--primary LandingPage--btn">Salvar</button>
                        <button className="btn btn--primary LandingPage--btn mt-3">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;