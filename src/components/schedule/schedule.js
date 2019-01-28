import React, { Component } from 'react';
import Gradient from "../gradient";
import ScheduleCourse from './scheduleCourse';
import Tracker from './tracker';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule__title">Schedule</h1>
                <ScheduleCourse title={'Title1'}/>
                <ScheduleCourse title="Title1" />
                <ScheduleCourse title="Title1" />
                <ScheduleCourse title="Title1" />
                <Tracker />
                <Gradient />
            </div>
        );
    }
}

export default Schedule;