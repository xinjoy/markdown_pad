import React from 'react';

import './Toolbar.css';
import AppLogo from '../../assets/images/logo.png';

const toolbar = (props) => (
    <div className="navbar">
        <a className="logo">
            <img src={AppLogo} alt="Markdown Pad" />
        </a>
        <a>Markdown Pad</a>
    </div>
);

export default toolbar;