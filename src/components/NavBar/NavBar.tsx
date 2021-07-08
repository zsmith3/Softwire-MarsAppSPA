import React from "react";
import "./NavBar.scss";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
    return <div className="navBar">
        <ul>
            <NavBarLink to="/" text="Home" />
            <NavBarLink to="/nasa" text="NASA" />
            <NavBarLink to="/counter" text="Counter" />
            <NavBarLink to="/counter2" text="Counter v2" />
            <NavBarLink to="/mars" text="Mars Photos" />
        </ul>
    </div>;
}
