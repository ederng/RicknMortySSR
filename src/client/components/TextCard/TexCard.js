import React from 'react';
import PropTypes from 'prop-types';
import './TextCard.css';

const TextCard = (props) => {
    return (
        <div key={props.id}  className="SimpleCard">
            <div>
                <h3 className="SimpleCard-title">{props.name}</h3>
            </div>
            <div>
                {
                    props.list.map((item, index) => {
                       return <p key={index}>
                            {item.key}: {item.value}
                        </p>
                    })
                } 
            </div>
        </div>
    )
};
TextCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    list: PropTypes.array
};

export default TextCard;