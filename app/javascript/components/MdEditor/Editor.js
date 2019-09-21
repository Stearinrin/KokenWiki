import React from 'react';
import { connect } from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from "./connector"
export class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <textarea
                className="form-control"
                value={this.props.markdown}
                onChange={this.props.handleChangeText}
                name="page[content]">

            </textarea>
        </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Editor);