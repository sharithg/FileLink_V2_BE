import React, { useState, useEffect } from "react";
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
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addClass } from "../../actions/classAction";
import { setCurrClass } from "../../actions/classAction";
import { Redirect } from "react-router-dom";

const Sidebar = (props) => {
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

  const handleAddClass = (event) => {
    event.preventDefault();
    setAddClass(true);
  };

  const handleKeyDown = (event) => {
    // event.preventDefault();
    if (event.key === "Enter") {
      console.log(isNaN(event.target.value));
      if (isNaN(event.target.value)) {
        props.addClass({ name: event.target.value });
      }
      setClassName("");
      setAddClass(false);
    }
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
        {props.classes.map((col_class) => (
          <MenuItem
            button
            onClick={() => props.setCurrClass(col_class.id)}
            selected={col_class.id == props.current_class}
            key={col_class.id}
            component={Link}
            to={`/dashboard/class/${col_class.id}`}
          >
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary={col_class.name} />
          </MenuItem>
        ))}
      </MenuList>
      {add_class ? (
        <MenuItem>
          <TextField
            onKeyDown={handleKeyDown}
            name="input_class"
            value={class_name}
            onChange={(event) => setClassName(event.target.value)}
            inputProps={{ autoFocus: true }}
          />
        </MenuItem>
      ) : (
        <div />
      )}
      <MenuItem button onClick={handleAddClass}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary={"Add Class"} />
      </MenuItem>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current_class: state.classes.current_class,
  classes_loaded: state.classes.classes_loaded,
});

export default connect(mapStateToProps, { addClass, setCurrClass })(Sidebar);
