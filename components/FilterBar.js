import React from "react";

const FilterBar = () => {
    return (
        <ul className="menu">
            <li className="item">
                <button className="link active">cat</button>
            </li>
            <li className="item">
                <button className="link">bird</button>
            </li>
        </ul>
    );
};

export default FilterBar;
