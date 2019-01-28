import React, { Component } from 'react';

class Tracker extends Component {
    render() {
        return(
            <div className='tracker'>
                <label className='tracker__label'>Progress Tracker</label>
                <div className='tracker__percentage'>
                    0%
                </div>
            </div>
        )
    }
}

export default Tracker;