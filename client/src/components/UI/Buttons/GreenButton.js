import React from 'react';

const GreenButton = ({click,text}) => {
    return (
        <div onClick={(event) => click(event)}
             className={'button Buy_Button'}>
            {text}
        </div>
    );
};


export default GreenButton;