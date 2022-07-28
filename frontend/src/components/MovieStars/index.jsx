import './style.css';

import { ReactComponent as StarFull } from 'assets/img/icons/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/icons/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/icons/star-empty.svg';


function MovieStar() {

    return(
        <div className="container__stars">
            <StarFull/>
            <StarFull/>
            <StarFull/>
            <StarHalf/>
            <StarEmpty/>
        </div>
    )
}

export default MovieStar;