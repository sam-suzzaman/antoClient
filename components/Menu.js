import React from "react";
import FilterBar from "./FilterBar";
import ActionBar from "./ActionBar";

const Menu = ({ categories }) => {
    return (
        <nav className="main-menu-container">
            <div className="filter-bar">
                <FilterBar categories={categories} />
            </div>
            <div className="action-bar">
                <ActionBar />
            </div>
        </nav>
    );
};

export default Menu;
