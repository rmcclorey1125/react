import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
    const buttonText = {text: "Click Me"}

    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            {/* <button style="background-color: blue; color:white;"></button> */}
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);