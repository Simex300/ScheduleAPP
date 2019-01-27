import React, { Component } from 'react';
import Icon from '../Icon';

import { library } from '@fortawesome/fontawesome-svg-core';

// Icons
import { faCheck } from '@fortawesome/free-solid-svg-icons';

library.add( faCheck );

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon("fas fa-check", "library-course__icon") }
                {/* Arrow Component */}
                {/* Action Btn Component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum dignissim augue bibendum pulvinar. Quisque pellentesque nisl est, a mollis risus bibendum in. Vivamus condimentum, nulla nec accumsan facilisis, est nisl iaculis erat, ac congue ex velit nec nisi. Phasellus porttitor dolor tortor, sit amet fringilla lorem lacinia sit amet. Proin ultrices lorem nec cursus lobortis. In ac volutpat lorem. Suspendisse tempus felis sed velit semper, et sagittis ante mattis. Ut non lorem sed ex accumsan luctus id ac arcu. Nunc at neque augue. In non ultricies felis.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;