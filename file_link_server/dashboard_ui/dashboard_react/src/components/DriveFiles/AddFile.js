import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteFile, addFile } from "../../actions/filesAction";
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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { setCurrentAddFile } from "../../actions/reactActions";
import { red } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

const AddFile = (props) => {
  AddFile.propTypes = {
    // Parent Component
    files: PropTypes.array.isRequired,
    list_header: PropTypes.string.isRequired,
    current_class: PropTypes.string.isRequired,
    add_file: PropTypes.bool.isRequired,
    file_icon_url: PropTypes.string.isRequired,
    file_type: PropTypes.string.isRequired,
    // Redux
    addFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired,
  };

  const classes = useStyles();
  const [file_name, setFileName] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [open, setOpen] = useState(false);
  const [delete_file, setDeleteFile] = useState("");

  useEffect(() => {
    if (props.file_type === "docs")
      setMimeType("application/vnd.google-apps.document");
    if (props.file_type === "sheets")
      setMimeType("application/vnd.google-apps.spreadsheet");
    if (props.file_type === "slides")
      setMimeType("application/vnd.google-apps.presentation");
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddFile = (event) => {
    props.setCurrentAddFile(props.file_type);
  };

  const handleSave = (event) => {
    // event.preventDefault();
    if (isNaN(file_name)) {
      const file = {
        file_type: props.file_type,
        file_name: file_name,
        college_class: props.current_class,
      };
      props.addFile(file);
    }
    setFileName("");
    props.setCurrentAddFile(null);
  };

  const handleDeleteFile = (name) => {
    setDeleteFile(name);
    console.log(name);
    setOpen(true);
  };

  const handleDeleteFileConfirm = (event) => {
    console.log("File deleted");
    setOpen(false);
  };

  return (
    <Fragment>
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
              {props.list_header}
            </ListSubheader>
            <IconButton
              aria-label="add"
              name="docs"
              button
              onClick={handleAddFile}
            >
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
          .filter((file) => file.file_type === mimeType)
          .map((file, index) => (
            <Fragment>
              <ListItem>
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
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteFile(file.file_name)}
                >
                  <DeleteIcon style={{ color: red[500] }} />
                </IconButton>
              </ListItem>
            </Fragment>
          ))}
      </List>
      {props.current_add_file === props.file_type ? (
        <ListItem>
          <ListItemIcon>
            <img src={props.file_icon_url} />
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
            Add
          </SaveButton>
          <CancelButton
            variant="contained"
            color="red"
            size="small"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => {
              props.setCurrentAddFile(null);
              setFileName("");
            }}
          >
            Cancel
          </CancelButton>
        </ListItem>
      ) : (
        <Fragment />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete <b>{delete_file}</b>? all changes
            will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleDeleteFileConfirm}>Delete</CancelButton>
          <SaveButton onClick={handleClose} autoFocus>
            Cancel
          </SaveButton>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  current_add_file: state.react.current_add_file,
});

export default connect(mapStateToProps, {
  addFile,
  deleteFile,
  setCurrentAddFile,
})(AddFile);
