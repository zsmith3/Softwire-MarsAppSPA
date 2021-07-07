import React, {useState} from "react";
import Component2 from "./component2";
import Component3 from "./Component3";


export default function Component1 (props: {}, state: {}) {


    return <div>
        <Component2/>
        <Component3/>
    </div>;
}