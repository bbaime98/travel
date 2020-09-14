import React, {useContext, useState} from "react"
import {Typography, Paper, Grid, TextField, Button} from "@material-ui/core"
import {AccountCircle, Person, Lock} from "@material-ui/icons"
import {makeStyles} from "@material-ui/styles"
import Card from "./Card"
import {GlobalContext} from "../context/GlobalState"
import {useHistory} from "react-router-dom"
import bgImage from "./bg.jpg"
const useStyles = makeStyles({
  bg: {
    // height: "100vh",
    // width: "100%",
    // position: "fixed",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // opacity: "0.89",
    // zIndex: -1,
    // background: "#023047",
    // overflow: "scroll",
  },
  headerContainer: {
    textAlign: "center",
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
    width: "90%",
    paddingBottom: "20px",
    margin: "auto 20px",
  },
  btn: {
    marginBottom: "30px",
  },
  carsContainer: {
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "auto auto auto auto",
    padding: "5px",
  },
})
const Login = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const {createPlan} = useContext(GlobalContext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isCreated, setIsCreated] = useState(true)

  const {state} = useContext(GlobalContext)
  // const {plan} = state
  // const {car, details} = plan
  // console.log("___CAR", state)

  const handleCreate = () => {
    createPlan({title, description})
    // const {plan} = state
    // const {details} = plan
    // history.push("/p")
    setDescription("")
    setTitle("")
    setIsCreated(true)
    // console.log("___PLAN", plan)
    // if (details) {
    // }
  }

  return (
    <>
      <div className={classes.bg}>
        <Grid container spacing={2} className={classes.headerContainer}>
          {/* <Grid item sm={0} lg={1} /> */}
          <Grid item sm={12} lg={4} sm={12}>
            <Typography variant="h5" className={classes.text} color="secondary">
              Easy steps!
            </Typography>
            <Typography variant="h5" color="secondary">
              1.Create a travel Plan
            </Typography>
            <Typography variant="h5" color="secondary">
              2.Book a Hotel room
            </Typography>
            <Typography variant="h5" color="secondary">
              3.Book a transport
            </Typography>
          </Grid>
          {/* <Grid item sm={0} lg={1} /> */}
          <Grid
            item
            sm={12}
            lg={6}
            style={{paddingTop: "150px", paddingBottom: "100px"}}
          >
            <Paper
              elevation={3}
              style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}
            >
              {isCreated ? (
                <Typography
                  variant="h4"
                  color="primary"
                  style={{paddingTop: "20px", paddingBottom: "20px"}}
                >
                  Now Book a hotel!
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h6"
                    color="secondary"
                    style={{paddingTop: "20px"}}
                  >
                    Creata a travel plan
                  </Typography>
                  <TextField
                    label="Trip name"
                    size="medium"
                    color="primary"
                    className={classes.input}
                    placeholder="ex: Family vacation"
                    variant="outlined"
                    style={{marginTop: "10px"}}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TextField
                    label="Trip goals"
                    size="medium"
                    color="primary"
                    className={classes.input}
                    placeholder="ex: visit museums"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div>
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="secondary"
                      size="medium"
                      onClick={handleCreate}
                    >
                      Create
                    </Button>
                  </div>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div style={{textAlign: "center", background: "#fff"}}>
        <Grid
          container
          //   sm={0}
          lg={12}
          //   sm={6}
          //   spacing={2}
          //   style={{
          //     //   paddingBottom: "100px",
          //   }}
        >
          <Grid
            item
            justify="flex"
            alignContent="center"
            alignItems="center"
            lg={12}
          >
            <Typography
              variant="h5"
              color="secondary"
              style={{paddingTop: "10px", paddingBottom: "20px"}}
            >
              Book A Hotel
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignContent="center"
            alignItems="center"
            lg={12}
          >
            <Grid lg={1} sm={0} />
            <Grid lg={3}>
              <Card />
            </Grid>
            <Grid lg={3}>
              <Card />
            </Grid>
            <Grid lg={3}>
              <Card />
            </Grid>
            <Grid lg={2} sm={0} />
          </Grid>
        </Grid>
        {/* <Grid item sm={0} lg={1} /> */}
      </div>
    </>
  )
}

export default Login
