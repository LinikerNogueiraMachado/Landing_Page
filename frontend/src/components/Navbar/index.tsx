import FilmesGraph from 'assets/img/FilmeGraph.png';
import './style.css'

function Navbar() {
    return (
        <>
            <header>
                <nav className='container'>
                    <div className='page-nav-content'>
                        <h1>React Filmes</h1>
                        <ul>
                            <h2> Filmes por gênero </h2>
                            <li> <a href="/"> Ação         </a></li>
                            <li> <a href="/"> Aventura     </a></li>
                            <li> <a href="/"> Comédia      </a></li>
                            <li> <a href="/"> Documentário </a></li>
                            <li> <a href="/"> Drama        </a></li>
                            <li> <a href="/"> Ficção       </a></li>
                            <li> <a href="/"> Romance      </a></li>
                            <li> <a href="/"> Terror       </a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;