import MovieCard from "components/MovieCard";
//import MovieScore from "components/MovieScore";
//import MovieStar from "components/MovieStars";
import Pagination from "components/Pagination";

function Listing() {

    return (
        <>
            <Pagination />
            <div className="row">
                <div className="col col-xl-6 mb-3">
                    <MovieCard />
                </div>
                <div className="col col-xl-6 mb-3">
                    <MovieCard /> 
                </div> 
                <div className="col col-xl-6 mb-3">
                    <MovieCard /> 
                </div> 
                <div className="col col-xl-6 mb-3">
                    <MovieCard /> 
                </div> 
                <div className="col col-xl-6 mb-3">
                    <MovieCard />
                </div>
            </div>
        </>
    );
}

export default Listing;