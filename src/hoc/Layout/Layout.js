import React, {Component} from 'react';
import FileDownload from 'react-file-download';
import VerticalPane from '../../containers/VerticalPane/VerticalPane';
import Toolbar from '../../components/Toolbar/Toolbar';

import axios from 'axios';

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