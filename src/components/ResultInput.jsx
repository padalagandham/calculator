import React from 'react';

const ResultInput = (props) => {
    return (
        <input type="text" aria-label={props.result} className="calculator-screen" value={props.result} disabled />
    );
}
export default ResultInput