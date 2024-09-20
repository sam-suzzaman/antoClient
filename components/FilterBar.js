import React from "react";

const FilterBar = ({ categories }) => {
    return (
        <ul className="menu">
            {categories?.map((category) => (
                <li className="item" key={category._id}>
                    <button className="link active">{category?.name}</button>
                </li>
            ))}
            {/* <li className="item">
                <button className="link active">cat</button>
            </li>
            <li className="item">
                <button className="link">bird</button>
            </li> */}
        </ul>
    );
};

export default FilterBar;
