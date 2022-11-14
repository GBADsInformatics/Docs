import React from 'react';
import axios from "axios";

class CustomDropdown extends React.Component {
    state = {
        folders: []
    }
    constructor() {
        super();
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/folderInfo`)
          .then(res => {
            const folders = res.data;
            this.setState({ folders });
          })
      }

    render () {
        let paths = this.state.folders;
        let optionItems = paths.map((path) =>
                <option key={path.key}>{path.value}</option>
            );

        return (
         <div>
             <select onChange={this.change}>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default CustomDropdown;