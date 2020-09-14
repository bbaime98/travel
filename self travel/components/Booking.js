import React from "react"
import {Typography, Paper, Grid, TextField, Button} from "@material-ui/core"
import {AccountCircle, Person, Lock} from "@material-ui/icons"
import {makeStyles} from "@material-ui/styles"
import Card from "./Card"

const useStyles = makeStyles({
  bg: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    // backgroundImage: `url(${bgImage})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // opacity: "0.89",
    // zIndex: -1,
    background: "#023047",
    overflow: "scroll",
  },
  headerContainer: {
    textAlign: "center",
    paddingTop: "100px",
  },
  header: {
    color: "#fff",
    fontSize: "5em",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    paddingTop: "200px",
    textShadow: "3px 3px #0000",
    zIndex: 20,
    opacity: 1,
  },
  input: {
    width: "125px",
    paddingBottom: "20px",
    margin: "auto 20px",
  },
  btn: {
    marginBottom: "30px",
  },
  carsContainer: {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "auto auto auto auto",
    padding: "5px",
  },
})
const Login = (props) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.bg}>
        <Grid container spacing={2} className={classes.headerContainer}>
          <Grid item sm={0} lg={1} />
          <Grid
            item
            sm={0}
            lg={10}
            style={{
              //   paddingBottom: "100px",
              textAlign: "center",
            }}
          >
            {/* <Paper style={{height: "100%"}}> */}
            <Typography
              variant="h5"
              color="primary"
              style={{paddingTop: "30px", paddingBottom: "30px"}}
            >
              Book Available Cars
            </Typography>
            <div className={classes.carsContainer}>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </div>
            {/* </Paper> */}
          </Grid>
          <Grid item sm={0} lg={1} />
        </Grid>
      </div>
    </>
  )
}

export default Login
