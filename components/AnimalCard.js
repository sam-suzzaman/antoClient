import React from "react";
import Image from "next/image";

const AnimalCard = ({ animal }) => {
    const { _id, name, photo } = animal;
    return (
        <div className="animal-card">
            <div className="img-container">
                <Image src={photo} width={126} height={98} alt="thumb" />
            </div>
            <h3 className="card-title">{name}</h3>
        </div>
    );
};

export default AnimalCard;
