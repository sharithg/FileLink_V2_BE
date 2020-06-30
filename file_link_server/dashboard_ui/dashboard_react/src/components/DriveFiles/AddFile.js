import React, { Component, Fragment } from "react";
// React redux imports
import { connect } from "react-redux";
// Action imports
import { addFile } from "../../actions/filesAction";
// To use props
import PropTypes from "prop-types";

class AddFile extends Component {
  state = { file_type: "", file_name: "" };

  static propTypes = {
    addFile: PropTypes.func.isRequired,
  };

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddFile = (event) => {
    event.preventDefault();
    const { file_type, file_name } = this.state;
    const file = {
      file_type: file_type,
      file_name: file_name,
      college_class: this.props.current_class,
    };
    this.props.addFile(file);
    this.setState({
      file_type: "",
      file_name: "",
    });
  };

  render() {
    const { file_type, file_name } = this.state;
    return (
      <Fragment>
        <div>
          <form onSubmit={this.handleAddFile}>
            <h2>Add File</h2>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">File type</label>
              <input
                type="text"
                className="form-control"
                id="emailinput"
                aria-describedby="emailHelp"
                placeholder="Enter type"
                onChange={this.handleFormChange}
                name="file_type"
                value={file_type}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">File name</label>
              <input
                type="text"
                className="form-control"
                id="emailinput"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                onChange={this.handleFormChange}
                name="file_name"
                value={file_name}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <br />
          <br />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  current_class: state.classes.current_class,
});

export default connect(mapStateToProps, { addFile })(AddFile);
