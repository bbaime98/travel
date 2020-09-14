import React from "react"
import {Typography, Paper, Grid, TextField, Button} from "@material-ui/core"
import {AccountCircle, Person, Lock} from "@material-ui/icons"
import {makeStyles} from "@material-ui/styles"
import bgImage from "./bg1.jpg"

const useStyles = makeStyles({
  bg: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.89",
    zIndex: -1,
  },
  headerContainer: {
    textAlign: "center",
  },
  header: {
    color: "#fff",
    fontSize: "5em",
  },
  text: {
    color: "#023047",
    textAlign: "center",
    paddingTop: "200px",
    textShadow: "3px 3px #0000",
    zIndex: 20,
    opacity: 1,
  },
  input: {
    width: "220px",
    paddingBottom: "30px",
    margin: "auto 20px",
  },
  btn: {
    marginBottom: "30px",
  },
})
const Login = (props) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.bg} />
      <Grid container spacing={2} className={classes.headerContainer}>
        <Grid item sm={0} lg={1} />
        <Grid item sm={12} lg={5}>
          <Typography variant="h2" className={classes.text} color="primary">
            Plan your Traveling effectively!
          </Typography>
        </Grid>
        <Grid item sm={0} lg={1} />
        <Grid
          item
          sm={12}
          lg={4}
          style={{paddingTop: "150px", paddingBottom: "100px"}}
        >
          <Paper
            elevation={3}
            style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}
          >
            <Typography
              variant="h4"
              color="secondary"
              style={{paddingTop: "30px"}}
            >
              LOGIN
            </Typography>
            <TextField
              label="Email"
              size="medium"
              color="secondary"
              className={classes.input}
              style={{marginTop: "10px"}}
            />
            <TextField
              label="Password"
              size="medium"
              color="secondary"
              className={classes.input}
            />
            <div>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                size="medium"
                onClick={() => props.history.push("/dashboard")}
              >
                Login
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={0} lg={1} />
      </Grid>
    </>
  )
}

export default Login
