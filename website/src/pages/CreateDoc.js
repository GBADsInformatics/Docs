import React, { Component } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import axios from "axios";
import "./styles/CreateDoc.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

class CreateDoc extends Component {


    _isMounted = false;

    state = {
        filename: "NewMarkdownFile.md",
        cont: "**Hello world!!!**"
        }
    constructor() {
        super();
    }

    

    componentDidMount() {
       this. _isMounted = true;
      }



      componentWillUnmount () {
        this._isMounted = false;
        
      }

createMarkdown = (event) =>{
    event.preventDefault();
    const text = this.state.cont;
    const filename = "gbadMarkdown.md";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);   
}

filenameHandler = (event) => {
    this.setState(state => {
        state.filename = event.target.value;
        return state;
    });
    // this.state.filename = 
}

alterFilename = (event) =>{
    this.state.selectedFolderName = event.target.value;
}

setCont = (val) =>{
    this.setState({ cont: val })
    // event.preventDefault();
    // this.setState({ cont: event.target.value })
}


render (){
        return(
            <Layout description="Homepage">
                <div className="container-create-doc">
                    <h1><Translate>Create a doc!</Translate></h1>
                    <form>
                        <div>
                            <MDEditor
                            value={this.state.cont}
                            onChange={(val) => this.setCont(val)}
                            previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                            }}
                            />
                        </div>
                        <div>
                            <button type="submit" onClick={this.createMarkdown}>Submit</button>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    };
}

export default CreateDoc;


// import React from 'react';
// import axios from "axios";

// class CustomDropdown extends React.Component {
//     state = {
//         folders: []
//     }
//     constructor() {
//         super();
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:3001/folderInfo`)
//           .then(res => {
//             const folders = res.data;
//             this.setState({ folders });
//           })
//       }

//     render () {
//         let paths = this.state.folders;
//         let optionItems = paths.map((path) =>
//                 <option key={path.key}>{path.value}</option>
//             );

//         return (
//          <div>
//              <select onChange={this.change}>
//                 {optionItems}
//              </select>
//          </div>
//         )
//     }
// }

// export default NewCreateDoc;