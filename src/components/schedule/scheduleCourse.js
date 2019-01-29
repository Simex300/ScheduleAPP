import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Action from '../action';

class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label>{this.props.title}</label>
                <Action onClick={() => this.props.toggleEnrolled(this.props.id)} enrolled={this.props.enrolled} className="library-course__action" />
            </div>
        )
    }
}

export default connect(null, actions)(ScheduleCourse);