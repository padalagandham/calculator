import React from 'react';

const Button = (props) =>  {
    const {classname="", val="", content="", action} = props;
    return (
        <button type="button" aria-label={content} onClick={action} className={classname} value={val}>{content}</button> 
    );
}

export default Button;