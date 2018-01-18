import React, {Component} from 'react';
import SplitPane from 'react-split-pane';
import Editor from '../../components/Editor/Editor';
import Viewer from '../../components/Viewer/Viewer';

import './VerticalPane.css';

const initialInput = `# Markdown Pad

[Markdown Pad](https://github.com/xxin666/markdown_pad) is a light, fast, React powered online Markdown editor.

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

class VerticalPane extends Component {
  state = {
    markdownInput: initialInput
  }

  inputChangeHandler(input) {
    this.setState({ markdownInput: input });
  }

  render() {
    return (
      <SplitPane className='VerticalPane' split='vertical' defaultSize='50%'>
        <div className='EditorPane'>
          <Editor value={this.state.markdownInput} onChange={this.inputChangeHandler.bind(this)} />
        </div>
        <div className='ViewerPane'>
          <Viewer source={this.state.markdownInput} />
        </div>
      </SplitPane>
    )
  }
}

export default VerticalPane;