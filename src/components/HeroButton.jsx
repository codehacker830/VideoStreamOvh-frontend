import React from "react";

class HeroButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
            </React.Fragment>
        );
    }
}

export default HeroButton;

