import React, {Component} from 'react';
import hljs from 'highlight.js';

import '../../../node_modules/highlight.js/styles/monokai.css';
import './ViewerHighlighter.css';

class ViewerHighlighter extends Component {    
    setRef(element) {
        this.element = element;
    }

    componentDidMount() {
        this.highlightViewer();
    }

    componentDidUpdate() {
        this.highlightViewer();
    }

    highlightViewer() {
        hljs.highlightBlock(this.element);
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef.bind(this)}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}

export default ViewerHighlighter;