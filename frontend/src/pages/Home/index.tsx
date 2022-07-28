import FilmeGraph from 'assets/img/FilmeGraph.png';

import './style.css';

function Home() {

    return (
        <>
            <h1>Home Page</h1>
            <div className="container--home">
            <a href="Listing/1"><h2>Lista completa de filmes</h2></a>
            <a href="Listing/1"><h2>Séries</h2></a>
            </div>
            <div className='img__capa'>
                <img className="img__home" src={FilmeGraph} />
            </div>           
        </>
    );
}

export default Home;