import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';

import './Editor.css';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/monokai.css');

class Editor extends Component {
    inputChanged(event) {
        this.props.onChange(event);
    }

    render() {
        var options = {
            mode: 'markdown',
            theme: 'monokai',
            autoFocus: true,
            lineNumbers: true,
            lineWrapping: true
        };

        return (
            <CodeMirror
                options={options}
                value={this.props.value} 
                onChange={this.inputChanged.bind(this)} />
        );
    }
}

export default Editor;