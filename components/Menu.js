import React from "react";
import FilterBar from "./FilterBar";
import ActionBar from "./ActionBar";

const Menu = () => {
    return (
        <nav className="main-menu-container">
            <div className="filter-bar">
                <FilterBar />
            </div>
            <div className="action-bar">
                <ActionBar />
            </div>
        </nav>
    );
};

export default Menu;
