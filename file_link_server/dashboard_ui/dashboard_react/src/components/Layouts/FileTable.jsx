import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AddFile } from "../DriveFiles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function DividerChk(list, props) {
  return list
    .filter((file) => file.college_class == props.current_class)
    .filter(
      (file) => file.file_type === "application/vnd.google-apps.presentation"
    ).length;
}

const FileTable = (props) => {
  FileTable.propTypes = {
    files: PropTypes.array.isRequired,
    addFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired,
  };
  const [add_doc, setAddDoc] = useState(false);
  const [add_sheet, setAddSheet] = useState(false);
  const [add_slide, setAddSlide] = useState(false);
  const [file_name, setFileName] = useState("");
  const [add_file, setAddFile] = useState(false);
  const docs_icon_url =
    "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document";
  const sheets_icon_url =
    "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.spreadsheet";
  const slides_icon_url =
    "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.presentation";

  const classes = useStyles();

  const handleAddFile = (event) => {
    console.log(event);
  };

  return (
    <div>
      <Grid
        container
        // alignItems="flex-start"
        justify="space-between"
        direction="row"
      >
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Drive Files
          </Typography>
        </Grid>
      </Grid>
      <AddFile
        files={props.files}
        list_header="Docs"
        file_type="docs"
        current_class={props.current_class}
        file_icon_url={docs_icon_url}
      />
      <AddFile
        files={props.files}
        list_header="Sheets"
        file_type="sheets"
        current_class={props.current_class}
        file_icon_url={sheets_icon_url}
      />
      <AddFile
        files={props.files}
        list_header="Slides"
        file_type="slides"
        current_class={props.current_class}
        file_icon_url={slides_icon_url}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  files: state.files.files,
  current_class: state.classes.current_class,
});

export default connect(mapStateToProps, null)(FileTable);
