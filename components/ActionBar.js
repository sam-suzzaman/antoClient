import Link from "next/link";
import React from "react";

const ActionBar = () => {
    return (
        <ul className="menu justify-end">
            <li className="item">
                <Link href="/add-animal" className="link">
                    add animal
                </Link>
            </li>
            <li className="item">
                <Link href="/add-category" className="link">
                    add category
                </Link>
            </li>
        </ul>
    );
};

export default ActionBar;
