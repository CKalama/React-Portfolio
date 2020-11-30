import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1
  },
  menuButton: {
      textAlign: "center"
  },
  title: {
      flexGrow: 1
  }
  }));

export default function NavBar() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <AppBar style={{ backgroundColor: "green", padding:"20px" }} position="static">
          <Toolbar>
            
          <Typography style={{textAlign:"left"}}variant="h6" className={classes.title}>
              My React Portfolio
          </Typography>

          <Link to="/">
              <Button color="inherit" style={{textAlign:"right"}}>
                  Home
              </Button>
          </Link>
            
            <Link to="/About">
          <Button color="inherit" style={{textAlign:"right"}}>
              About
          </Button>
            </Link>

            <Link to="/About">
          <Button color="inherit" style={{textAlign:"right"}}>Experience</Button>
            </Link>

            <Link to="/About">
          <Button color="inherit" style={{textAlign:"right"}}>Contact</Button>
            </Link>
          </Toolbar>
      </AppBar>
      </div>
  );
}