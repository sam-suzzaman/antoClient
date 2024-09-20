import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ data }) => {
    return (
        <section className="animal-list">
            {data?.map((animal) => (
                <AnimalCard key={animal._id} animal={animal} />
            ))}
        </section>
    );
};

export default AnimalList;
