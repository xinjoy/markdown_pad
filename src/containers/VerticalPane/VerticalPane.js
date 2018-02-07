import React from 'react';
import SplitPane from 'react-split-pane';
import Editor from '../../components/Editor/Editor';
import Viewer from '../../components/Viewer/Viewer';

import './VerticalPane.css';

const verticalPane = (props) => (
  <SplitPane className='VerticalPane' split='vertical' defaultSize='50%'>
    <div className='EditorPane'>
      <Editor value={props.source} changed={props.inputChangeHandler} />
    </div>
    <div className='ViewerPane'>
      <Viewer source={props.source} />
    </div>
  </SplitPane>
);

export default verticalPane;