import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { red } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { setCurrentAddFile } from "../../actions/reactActions";
import { deleteFile, addFile } from "../../actions/filesAction";
import { TheTextField, CancelButton, SaveButton } from "../../CustomMUI/";

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

function ListItemLink({ href, target }) {
  ListItemLink.propTypes = {
    // Parent Component
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  };
  return (
    <ListItem
      button
      component="a"
      href={href}
      target={target}
      disableListWrap
    />
  );
}

const AddFile = ({
  files,
  list_header,
  current_class,
  file_icon_url,
  file_type,
  current_add_file,
}) => {
  AddFile.propTypes = {
    // Parent Component
    files: PropTypes.arrayOf.isRequired,
    list_header: PropTypes.string.isRequired,
    current_class: PropTypes.string.isRequired,
    file_icon_url: PropTypes.string.isRequired,
    file_type: PropTypes.string.isRequired,
    // Redux
    current_add_file: PropTypes.string.isRequired,
  };

  const classes = useStyles();
  const [file_name, setFileName] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [open, setOpen] = useState(false);
  const [delete_file, setDeleteFile] = useState(null);
  const [delete_file_id, setDeleteFileId] = useState(null);

  useEffect(() => {
    if (file_type === "docs") {
      setMimeType("application/vnd.google-apps.document");
    }
    if (file_type === "sheets") {
      setMimeType("application/vnd.google-apps.spreadsheet");
    }
    if (file_type === "slides") {
      setMimeType("application/vnd.google-apps.presentation");
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddFile = () => {
    setCurrentAddFile(file_type);
  };

  const handleSave = () => {
    // event.preventDefault();
    if (Number.isNaN(file_name)) {
      const file = {
        file_type,
        file_name,
        college_class: current_class,
      };
      addFile(file);
    }
    setFileName("");
    setCurrentAddFile(null);
  };

  const handleDeleteFile = (name, id) => {
    setDeleteFile(name);
    setDeleteFileId(id);
    setOpen(true);
  };

  const handleDeleteFileConfirm = () => {
    deleteFile(delete_file_id);
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
              {list_header}
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
        {files
          .filter(
            (file) =>
              classes
                .find((cls) => cls.id === file.college_class)
                .name.toLowerCase() === current_class
          )
          .filter((file) => file.file_type === mimeType)
          .map((file) => (
            <Fragment>
              <ListItem>
                <ListItemLink href={file.file_view_link} target="_blank">
                  <ListItemIcon>
                    <img src={file.file_icon_link} alt="" />
                  </ListItemIcon>
                  <ListItemText primary={file.file_name} />
                </ListItemLink>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteFile(file.file_name, file.id)}
                >
                  <DeleteIcon style={{ color: red[500] }} />
                </IconButton>
              </ListItem>
            </Fragment>
          ))}
      </List>
      {current_add_file === file_type ? (
        <ListItem>
          <ListItemIcon>
            <img src={file_icon_url} alt="" />
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
              setCurrentAddFile(null);
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
            Are you sure you want to delete
            <b>{delete_file}</b>? all changes will be lost.
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
  classes: state.classes.classes,
});

export default connect(mapStateToProps, {
  addFile,
  deleteFile,
  setCurrentAddFile,
})(AddFile);
