import React from "react";

class Navigation extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav>
                    <ul>
                        <li>Browse</li>
                        <li>My list</li>
                        <li>Top picks</li>
                        <li>Recent</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
