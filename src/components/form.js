import React from "react"
import {
  Typography,
  Paper,
  Box,
  ListItemIcon,
  Grid,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core"
import {AccountCircle, Person, Lock} from "@material-ui/icons"
import {makeStyles} from "@material-ui/styles"
import avatar from "./bg1.jpg"
const useStyles = makeStyles({})
const Login = (props) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} lg={5}>
        <Paper elevation={3}>1</Paper>
      </Grid>
      <Grid item xs={0} lg={3}>
        <Paper elevation={3}>2</Paper>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Paper elevation={3}>3</Paper>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Paper elevation={3}>3</Paper>
      </Grid>
    </Grid>
  )
}

export default Login
