import React from "react";

export default class ButtonCounter extends React.Component<{}, { clickCount: number }> {
    state = {
        clickCount: parseInt(window.localStorage.getItem("clickCount") || '0')
    }

    updateCount = () => {
        window.localStorage.setItem("clickCount", (this.state.clickCount + 1).toString());
        this.setState({clickCount: this.state.clickCount + 1});
    }

    render() {
        return <div>
            <h2>Button Click Counter</h2>
            <button onClick={this.updateCount}>Click me!</button>
            <p>The button has been clicked {this.state.clickCount} times.</p>
        </div>;
    }
}
