import React from "react";

export default function InfoCard(props: {title: string; paragraph1: string; paragraph2: string; imgSrc: string}) {
    return <div>
        <h2>{props.title}</h2>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <img src={props.imgSrc} width="200px" />
    </div>;
}
