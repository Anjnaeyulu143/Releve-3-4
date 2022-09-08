import React from "react";
import "./Card.css";

const Card = ({ title, desc, cardId }) => {
    return (
        <div key={cardId}>
            <div className="card_body card p-2 m-2">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
