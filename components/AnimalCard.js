import React from "react";
import Image from "next/image";
import demo from "./demo.png";

const AnimalCard = () => {
    return (
        <div className="animal-card">
            <div className="img-container">
                <Image src={demo} width={126} height={98} />
            </div>
            <h3 className="card-title">elephant</h3>
        </div>
    );
};

export default AnimalCard;
