import React, { Component } from 'react';
import Icon from './icon';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add( faPlusCircle, faTimesCircle );

class Action extends Component {
    render(){
        return (
            <div className={`${this.props.className} action`}>
                { Icon("fas fa-plus-circle") }
            </div>
        )
    }
}

export default Action;