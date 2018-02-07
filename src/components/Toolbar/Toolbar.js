import React from 'react';

import './Toolbar.css';
import AppLogo from '../../assets/images/logo.png';

const toolbar = (props) => (
    <div className="navbar">
        <span className="logo">
            <img src={AppLogo} alt="Markdown Pad" />
        </span>
        <span className="title">Markdown Pad</span>
        <span className="menu" onClick={props.inputClearHandler}>New</span>
        <span className="menu" onClick={props.inputDownloadMDHandler}>Export as Markdown</span>
        <span className="menu" onClick={props.inputDownloadHTMLHandler}>Export as HTML</span>
    </div>
);

export default toolbar;