import React, { Component } from 'react';

import libraryCourse from './libraryCoruse';
import LibraryCourse from './libraryCoruse';

class Library extends Component {
    render() {
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse />
                <LibraryCourse />
                <LibraryCourse />
            </div>
        );
    }
}

export default Library;