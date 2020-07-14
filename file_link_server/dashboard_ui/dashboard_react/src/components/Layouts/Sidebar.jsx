import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LinkIcon from "@material-ui/icons/Link";
import ClassIcon from "@material-ui/icons/Class";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { connect } from "react-redux";
import { addClass } from "../../actions/classAction";
import { setCurrClass } from "../../actions/classAction";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { CancelButton, SaveButton, TheTextField } from "../../CustomMUI";
import { green } from "@material-ui/core/colors";
import { colors } from "@material-ui/core";

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

const Sidebar = (props) => {
  const classes = useStyles();

  const dashboard = [
    {
      text: "Schedule",
      link: "/dashboard/schedule",
      sel: "schedule",
    },
    {
      text: "Quick Links",
      link: "/dashboard/quicklinks",
      sel: "quicklinks",
    },
  ];
  const [add_class, setAddClass] = useState(false);
  const [class_name, setClassName] = useState("");
  const [selected, setSelectItem] = useState("sc");

  const getColor = (index) => {
    const colors = [
      "#FF0000",
      "#800000",
      "#FFFF00",
      "#808000",
      "#00FF00",
      "#008000",
      "#00FFFF",
      "#008080",
      "#0000FF",
      "#000080",
      "#FF00FF",
      "#800080",
    ];
    return colors[index];
  };

  const handleAddClass = (event) => {
    event.preventDefault();
    setAddClass(true);
  };

  const handleSave = (event) => {
    console.log(isNaN(class_name));
    if (isNaN(class_name)) {
      props.addClass({ name: class_name });
    }
    setClassName("");
    setAddClass(false);
  };

  return (
    <div>
      <div />
      <span>
        <img
          src={"https://payment-app.s3.us-east-2.amazonaws.com/svg.png"}
          style={{
            height: "40px",
            width: "199px",
            margin: "0.84em 0.5em 0.85em 0.5em",
          }}
        />
      </span>
      <Divider />
      <MenuList
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Dashboard
          </ListSubheader>
        }
        disableListWrap
      >
        {dashboard.map((dash) => (
          <MenuItem
            button
            onClick={() => props.setCurrClass(dash.sel)}
            selected={dash.sel === props.current_class}
            key={dash.sel}
            component={Link}
            to={dash.link}
          >
            <ListItemIcon>
              {dash.text === "Schedule" ? <ScheduleIcon /> : <LinkIcon />}
            </ListItemIcon>
            <ListItemText primary={dash.text} />
          </MenuItem>
        ))}
      </MenuList>

      <Divider />
      <MenuList
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            My Classes
          </ListSubheader>
        }
      >
        {props.classes.map((col_class, index) => (
          <MenuItem
            button
            onClick={() => props.setCurrClass(col_class.id)}
            selected={col_class.name.toLowerCase() == props.current_class}
            key={col_class.id}
            component={Link}
            to={`/dashboard/class/${col_class.name.toLowerCase()}`}
          >
            <ListItemIcon>
              <ClassIcon style={{ color: getColor(index) }} />
            </ListItemIcon>
            <ListItemText primary={col_class.name} />
          </MenuItem>
        ))}
      </MenuList>
      {add_class ? (
        <Fragment>
          <MenuItem>
            <TheTextField
              name="input_class"
              value={class_name}
              onChange={(event) => setClassName(event.target.value)}
              inputProps={{ autoFocus: true }}
              label="Enter class name"
            />
          </MenuItem>
          <MenuItem>
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
                setClassName("");
                setAddClass(false);
              }}
            >
              Cancel
            </CancelButton>
          </MenuItem>
        </Fragment>
      ) : (
        <MenuItem button onClick={handleAddClass}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Class"} />
        </MenuItem>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  current_class: state.classes.current_class,
  classes_loaded: state.classes.classes_loaded,
});

export default connect(mapStateToProps, { addClass, setCurrClass })(Sidebar);
