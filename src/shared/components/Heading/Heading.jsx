import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className="section-head text-center">
            <h2 className="text-uppercase m-b0">{title}</h2>
            <p className="font-18">{subtitle}</p>
        </div>
    );
};

export default Heading;
