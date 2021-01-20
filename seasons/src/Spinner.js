import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui actice dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner