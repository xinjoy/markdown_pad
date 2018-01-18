import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import ViewerHighlighter from '../ViewerHighlighter/ViewerHighlighter';


class Viewer extends Component {
    render () {
        return (
            <ReactMarkdown source={this.props.source} renderers={{code: ViewerHighlighter}} />
        );
    }
}

export default Viewer;