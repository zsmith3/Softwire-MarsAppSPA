import React from "react";

export default function InfoCard(props: {title: string; paragraph1: string; paragraph2: string; imgSrc: string, imgAlt?: string}) {
    return <div>
        <h2>{props.title}</h2>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph2}</p>
        <img src={props.imgSrc} alt={props.imgAlt || props.title} width="200px" />
    </div>;
}
