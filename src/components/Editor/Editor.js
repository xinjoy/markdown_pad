import React, {Component} from 'react';
import CodeMirror from '@skidding/react-codemirror';

import './Editor.css';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/python/python');
require('codemirror/mode/clike/clike');
require('codemirror/mode/go/go');
require('codemirror/mode/php/php');
require('codemirror/mode/shell/shell');
require('codemirror/theme/monokai.css');

class Editor extends Component {
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
                onChange={this.props.changed} />
        );
    }
}

export default Editor;