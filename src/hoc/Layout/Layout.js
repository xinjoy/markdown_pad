import React, {Component} from 'react';
import FileDownload from 'react-file-download';
import VerticalPane from '../../containers/VerticalPane/VerticalPane';
import Toolbar from '../../components/Toolbar/Toolbar';

import axios from 'axios';

const initialInput = `# Markdown Pad

[Markdown Pad](https://github.com/xxin666/markdown_pad) is a light, fast, React powered online Markdown editor.

## New Features
  - Create new Markdown
  - Export documents as Markdown and HTML

## Dynamic Preivew
  - Automatically rendered as you type
  - Type Markdown on the left pane
  - Find Magic in the right

## Syntax Highlighting
\`\`\`js
var appName = "Markdown Pad";

function sayHello() {
    console.log("Hello from Markdown Pad");
}
\`\`\`

## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.

> This line is part of the same quote.

## Todos

 - Import and Export files

## Development
\`\`\`bash
$ git clone https://github.com/xxin666/markdown_pad.git
$ cd markdown_pad
$ npm install
\`\`\`

## Run
\`\`\`bash
$ npm start
\`\`\`

## Build
\`\`\`bash
$ npm build
\`\`\`

## Acknowledgment
Icon made by [Revicon](https://www.flaticon.com/authors/revicon) from [www.flaticon.com](www.flaticon.com)

License
----
MIT`;

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownInput: ""
        };

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.inputClearHandler = this.inputClearHandler.bind(this);
        this.inputDownloadMDHandler = this.inputDownloadMDHandler.bind(this);
        this.inputDownloadHTMLHandler = this.inputDownloadHTMLHandler.bind(this);
    }

    componentWillMount() {
        axios.get('http://localhost:9000/initial')
            .then(response => {
                this.setState({ markdownInput: response.data.replace(/\\/g, '')});
            })
            .catch(error => {   
                this.setState({ markdownInput: initialInput});
            });
    }

    inputChangeHandler(input) {
        this.setState({ markdownInput: input });
    }

    inputClearHandler(event) {
        this.setState({ markdownInput: "" });
    }

    inputDownloadMDHandler() {
        FileDownload(this.state.markdownInput, 'markdownpad.md');
        /*
        axios.post('http://localhost:9000/download', {
            input: this.state.markdownInput
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        */
    }

    inputDownloadHTMLHandler() {
        let viewerPaneNode = document.getElementsByClassName("ViewerPane")[0];
        FileDownload(viewerPaneNode.outerHTML, 'markdownpad.md.html');
    }

    render() {
        return (
            <div>
                <Toolbar 
                    inputClearHandler={this.inputClearHandler} 
                    inputDownloadMDHandler={this.inputDownloadMDHandler} 
                    inputDownloadHTMLHandler={this.inputDownloadHTMLHandler} />
                <VerticalPane
                    source={this.state.markdownInput} 
                    inputChangeHandler={this.inputChangeHandler} />
            </div>
        )
    }
}

export default Layout;