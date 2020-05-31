import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is the International Fishing Association Website</h2>
                <p><strong>Information:</strong> to see the entire database of fishermen and their ids along with the
                    contact information.</p>
                <p><strong>Association:</strong> to see the entire database of fishermen and their catches along with their timestamps and locations.</p>
                <p><strong>Government:</strong> to see the collection of number of catches per location & number of catches by every fisherman. </p>
            </div>
        );
    }
}

export default Home;

