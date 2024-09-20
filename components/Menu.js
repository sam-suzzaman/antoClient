import React from "react";
import FilterBar from "./FilterBar";
import ActionBar from "./ActionBar";

const Menu = ({ categories, selectedCategory, setSelectedCateogry }) => {
    return (
        <nav className="main-menu-container">
            <div className="filter-bar">
                <FilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCateogry={setSelectedCateogry}
                />
            </div>
            <div className="action-bar">
                <ActionBar />
            </div>
        </nav>
    );
};

export default Menu;
