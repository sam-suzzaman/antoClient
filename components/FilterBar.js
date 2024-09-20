import React from "react";

const FilterBar = ({ categories, selectedCategory, setSelectedCateogry }) => {
    return (
        <ul className="menu">
            <li className="item" key={934}>
                <button
                    className={`link ${selectedCategory?._id == 1 && "active"}`}
                    onClick={() =>
                        setSelectedCateogry({
                            _id: 1,
                            name: "all",
                        })
                    }
                >
                    all
                </button>
            </li>
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
