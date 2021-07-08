import React from "react";
import {Link, Route} from "react-router-dom";
import "./NavBar.scss";

export default function NavBarLink(props: {to: string, text: string}) {
    return <Route exact path={props.to} children={({match}) => (
        <Link to={props.to}>
            <li className={match ? "navBar-link-current" : ""}>
                {props.text}
            </li>
        </Link>
    )} />;
}
