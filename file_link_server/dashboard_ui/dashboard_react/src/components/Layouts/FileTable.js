import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteFile } from "../../actions/filesAction";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  TableRow,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  Button,
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";

import PropTypes from "prop-types";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 374,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "red",
    "&:hover": {
      background: "#8b0000",
    },
  },
}));

const FileTable = (props) => {
  FileTable.propTypes = {
    files: PropTypes.array.isRequired,
    deleteFile: PropTypes.func.isRequired,
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">View link</StyledTableCell>
            <StyledTableCell align="right">Icon link</StyledTableCell>
            <StyledTableCell align="right">Created at</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.files.map((file) => (
            <StyledTableRow key={file.id}>
              <StyledTableCell align="right">{file.file_type}</StyledTableCell>
              <StyledTableCell align="right">{file.file_name}</StyledTableCell>
              <StyledTableCell align="right">
                <Typography className={classes.root}>
                  <a href={file.file_view_link}>View Link</a>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography className={classes.root}>
                  <a href={file.file_icon_link}>Icon Link</a>
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                {file.file_created_at}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => props.deleteFile(file.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  files: state.files.files,
});

export default connect(mapStateToProps, { deleteFile })(FileTable);
