import React from "react";
import "./NavBar.scss";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
    return <div className="navBar">
        <ul>
            <NavBarLink to="/" text="Home" />
            <NavBarLink to="/nasa" text="NASA" />
            <NavBarLink to="/counters" text="Counters" />
            <NavBarLink to="/roverimages" text="Rover Image Search" />
        </ul>
    </div>;
}
