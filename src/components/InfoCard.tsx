import React from "react";

export default class InfoCard extends React.Component<{title: string; paragraph1: string; paragraph2: string; imgSrc: string}> {
    render () {
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.paragraph1}</p>
            <p>{this.props.paragraph2}</p>
            <img src={this.props.imgSrc} width="200px" />
        </div>;
    }
}
