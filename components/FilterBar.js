import React from "react";

const FilterBar = () => {
    return (
        <ul className="menu">
            <li className="item">
                <a href="#" className="link active">
                    cat
                </a>
            </li>
            <li className="item">
                <a href="#" className="link">
                    bird
                </a>
            </li>
            <li className="item">
                <a href="#" className="link">
                    fish
                </a>
            </li>
        </ul>
    );
};

export default FilterBar;
