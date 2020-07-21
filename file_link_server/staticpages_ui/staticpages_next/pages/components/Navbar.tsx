import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { lime } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ position: "fixed", top: 0, left: 0, margin: 0 }}
        color={lime[100]}
      >
        <Toolbar>
          {/* Scale: 5.64557 */}

          <Grid
            justify="space-between" // Add it here :)
            container
            spacing={24}
          >
            <Grid item>
              <img
                src={
                  "https://file-link.s3.us-east-2.amazonaws.com/FileLinklogo.svg"
                }
                style={{
                  height: "35px",
                  width: "197.6px",
                }}
                className={classes.menuButton}
              />
            </Grid>

            <Grid item>
              <div>
                <Button color="inherit" className={classes.title}>
                  <Typography
                    variant="button"
                    onClick={() => {
                      location.href = "http://localhost:8000/login/";
                    }}
                  >
                    Login
                  </Typography>
                </Button>
                <Button color="inherit" className={classes.title}>
                  <Typography
                    variant="button"
                    onClick={() => {
                      location.href = "http://localhost:8000/register/";
                    }}
                  >
                    Register
                  </Typography>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
