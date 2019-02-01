import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Action from '../action';

class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <div className="schedule-course__title">{this.props.title}</div>
                <Action id={this.props.id} onClick={() => this.props.toggleEnrolled(this.props.id)} enrolled={this.props.enrolled} className="schedule-course__action action-remove" />
            </div>
        )
    }
}

export default connect(null, actions)(ScheduleCourse);