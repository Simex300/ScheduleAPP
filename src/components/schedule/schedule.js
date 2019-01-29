import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from "../gradient";
import ScheduleCourse from './scheduleCourse';
import Tracker from './tracker';

class Schedule extends Component {

    renderCourses(){
        const data = this.props.courses;

        return data.map((course, index) => {
            if(course.enrolled && this.amountEnrolled != 5){
                this.amountEnrolled++;
                return <ScheduleCourse key={index} {...course}/>
            }
        })
    }

    render() {
        this.amountEnrolled = 0;
        return (
            <div className="schedule">
                <h1 className="schedule__title">Schedule</h1>
                { this.renderCourses() }
                <Tracker amountPossible={5} amountEnrolled={this.amountEnrolled} />
                <Gradient />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Schedule);