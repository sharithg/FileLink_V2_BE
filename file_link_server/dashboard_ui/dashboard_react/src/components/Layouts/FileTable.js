import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import MenuList from "@material-ui/core/MenuList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TheTextField from "../../CustomMUI/TheTextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelButton from "../../CustomMUI/CancelButton";
import SaveButton from "../../CustomMUI/SaveButton";
import AddFile from "../DriveFiles/AddFile";

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

{
  /* <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Grid
            container
            // alignItems="flex-start"
            justify="space-between"
            direction="row"
          >
            <ListSubheader component="div" id="nested-list-subheader">
              Docs
            </ListSubheader>
            <IconButton aria-label="add" button onClick={handleAddDoc}>
              <AddIcon />
            </IconButton>
          </Grid>
        }
        className={classes.root}
        alignItems="flex-start"
      >
        <Divider />
        {props.files
          .filter((file) => file.college_class == props.current_class)
          .filter(
            (file) => file.file_type === "application/vnd.google-apps.document"
          )
          .map((file, index) => (
            <Fragment>
              <ListItemLink
                href={file.file_view_link}
                target="_blank"
                disableListWrap
              >
                <ListItemIcon>
                  <img src={file.file_icon_link} />
                </ListItemIcon>
                <ListItemText primary={file.file_name} />
              </ListItemLink>
            </Fragment>
          ))}
        {add_doc ? (
          <ListItem>
            <ListItemIcon>
              <img src="https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document" />
            </ListItemIcon>
            <TheTextField
              value={file_name}
              onChange={(event) => setFileName(event.target.value)}
              inputProps={{ autoFocus: true }}
              label="Enter file name"
            />
            <SaveButton
              onClick={handleSave}
              variant="contained"
              color="primary"
              size="small"
              name="input_doc"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </SaveButton>
            <CancelButton
              variant="contained"
              color="red"
              size="small"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Cancel
            </CancelButton>
          </ListItem>
        ) : (
          <Fragment />
        )}
      </List>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Grid
            container
            // alignItems="flex-start"
            justify="space-between"
            direction="row"
          >
            <ListSubheader component="div" id="nested-list-subheader">
              Sheets
            </ListSubheader>
            <IconButton aria-label="add" button onClick={handleAddSheet}>
              <AddIcon />
            </IconButton>
          </Grid>
        }
        className={classes.root}
        alignItems="flex-start"
      >
        <Divider />
        {props.files
          .filter((file) => file.college_class == props.current_class)
          .filter(
            (file) =>
              file.file_type === "application/vnd.google-apps.spreadsheet"
          )
          .map((file, index) => (
            <Fragment>
              <ListItemLink
                href={file.file_view_link}
                target="_blank"
                disableListWrap
              >
                <ListItemIcon>
                  <img src={file.file_icon_link} />
                </ListItemIcon>
                <ListItemText primary={file.file_name} />
              </ListItemLink>
            </Fragment>
          ))}
        {add_sheet ? (
          <ListItem>
            <ListItemIcon>
              <img src="https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.spreadsheet" />
            </ListItemIcon>
            <TheTextField
              onKeyDown={handleKeyDown}
              name="input_sheet"
              value={file_name}
              onChange={(event) => setFileName(event.target.value)}
              inputProps={{ autoFocus: true }}
              label="Enter file name"
            />
            <IconButton aria-label="delete">
              <AddCircleIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <CancelIcon />
            </IconButton>
          </ListItem>
        ) : (
          <Fragment />
        )}
      </List>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Grid
            container
            // alignItems="flex-start"
            justify="space-between"
            direction="row"
          >
            <ListSubheader component="div" id="nested-list-subheader">
              Slides
            </ListSubheader>
            <IconButton aria-label="add" button onClick={handleAddSlide}>
              <AddIcon />
            </IconButton>
          </Grid>
        }
        className={classes.root}
        alignItems="flex-start"
      >
        {DividerChk(props.files, props) === 0 ? <Fragment /> : <Divider />}
        {props.files
          .filter((file) => file.college_class == props.current_class)
          .filter(
            (file) =>
              file.file_type === "application/vnd.google-apps.presentation"
          )
          .map((file, index) => (
            <Fragment>
              <ListItemLink
                href={file.file_view_link}
                target="_blank"
                disableListWrap
              >
                <ListItemIcon>
                  <img src={file.file_icon_link} />
                </ListItemIcon>
                <ListItemText primary={file.file_name} />
              </ListItemLink>
            </Fragment>
          ))}
        {add_slide ? (
          <ListItem>
            <ListItemIcon>
              <img src="https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.presentation" />
            </ListItemIcon>
            <TheTextField
              onKeyDown={handleKeyDown}
              name="input_slide"
              value={file_name}
              onChange={(event) => setFileName(event.target.value)}
              inputProps={{ autoFocus: true }}
              label="Enter file name"
            />
          </ListItem>
        ) : (
          <Fragment />
        )}
      </List> */
}
