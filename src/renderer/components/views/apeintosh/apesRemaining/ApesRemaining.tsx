import React from 'react';
import "./index.scss";
import Countdown from 'react-countdown';

const Completionist = () => <span>Boooom!</span>;

function App() {

    return (

        <div className="apes-r">
            <h3>Going live in:</h3>
            <Countdown date={Date.now() + 1000 * 60 * 60 * 24 * 2}>
                <Completionist />
            </Countdown>
        </div>

    )

}
export default App;
