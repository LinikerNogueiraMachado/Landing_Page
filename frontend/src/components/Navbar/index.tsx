import ReactFilmesIcon from 'assets/img/icons/ReactFilmesIcon.png';
import FilmesGraph from 'assets/img/FilmeGraph.png';

function Navbar() {
    return (
        <header>
            <nav>
                <div><img src={FilmesGraph} />
                </div>
                <h1>React Filmes</h1>
                <div>
                    <img src={ReactFilmesIcon} />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;