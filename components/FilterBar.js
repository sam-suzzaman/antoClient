import React from "react";

const FilterBar = ({ categories, selectedCategory, setSelectedCateogry }) => {
    return (
        <ul className="menu">
            {categories?.map((category) => (
                <li className="item" key={category._id}>
                    <button
                        className={`link ${
                            selectedCategory?._id == category._id && "active"
                        }`}
                        onClick={() => setSelectedCateogry(category)}
                    >
                        {category?.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FilterBar;
