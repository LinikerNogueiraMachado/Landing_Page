import './style.css';

import { ReactComponent as Arrow } from 'assets/img/icons/Arrow.svg';

function Pagination() {
    return (
        <div className="container__pagination">
            <div className="box__pagination">
                <button className="btn__pagination" disabled={true}>
                    <Arrow className='flip--horizontal'/>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="btn__pagination" disabled={false}>
                    <Arrow />
                </button>
            </div>
        </div>
    );
}

export default Pagination;