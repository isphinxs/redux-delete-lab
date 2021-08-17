import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
    render() {
        // debugger;
        const bands = this.props.bands.map(band => <Band band={band} delete={this.props.delete} />);
        return (
            <div>
                <h3>Bands</h3>
                <ul>
                    {bands}
                </ul>
            </div>
        );
    }
};

export default Bands;