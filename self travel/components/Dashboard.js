import React, {useContext} from "react"
import {Typography, Paper, Grid, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import Text from "./Text"
import {GlobalContext} from "../context/GlobalState"

const useStyles = makeStyles({
  btn: {
    background: "#Ff0000",
    color: "#fff",
    marginTop: "30px",
  },
  amount: {
    display: "inline-block",
  },
  amountTitle: {
    display: "inline-block",
    paddingTop: "20px",
  },
})
const Dashboard = (props) => {
  const {state} = useContext(GlobalContext)
  const {plan} = state
  const {car, details} = plan
  console.log("___CAR", state)
  // console.log("___PLAN", car)
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} lg={1} />

      <Grid item container justify="center" xs={12} lg={10} spacing={2}>
        <Grid item lg={12} style={{textAlign: "center"}}>
          <Typography variant="h4" color="primary">
            Travel plan Details
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} style={{textAlign: "center"}}>
          <Typography variant="h4" color="primary">
            Travel Goals
          </Typography>
          <Text title="Name" variant="h6" color="secondary" />
          <Text title={details.title} variant="body1" color="primary" />
          <Text title="Description and goals:" variant="h6" color="secondary" />
          <Text title={details.description} variant="body1" color="primary" />
          <div>
            <div className={classes.amountTitle}>
              <Text title="Estimated cost" variant="h6" color="primary" />
            </div>
            <div className={classes.amount} style={{paddingLeft: "10px"}}>
              <Text title="$2,789" variant="h5" color="secondary" />
            </div>
          </div>

          <Button
            className={classes.btn}
            variant="contained"
            // color="secondary"
            size="medium"
            onClick={() => props.history.push("/dashboard")}
          >
            Cancel
          </Button>
        </Grid>

        {/* <Grid item xs={12} lg={4} style={{textAlign: "center"}}>
          <Paper elevation={3} style={{padding: "10px", height: "300px"}}>
            <Typography variant="h4" color="primary">
              Hotel info
            </Typography>
            <Text title="Hotel Name" variant="h6" color="secondary" />
            <Text title={hotel.name} variant="body1" color="primary" />
            <Text title="Room Number" variant="h6" color="secondary" />
            <Text title={hotel.roomNumber} variant="body1" color="primary" />
            <Text title="Check In" variant="h6" color="secondary" />
            <Text title={hotel.checkIn} variant="body1" color="primary" />
            <Text title={hotel.checkOut} variant="h6" color="secondary" />
            <Text title="2020-10-21" variant="body1" color="primary" />
          </Paper>
        </Grid> */}
        <Grid item xs={12} lg={4} style={{textAlign: "center"}}>
          <Paper elevation={3} style={{height: "300px", padding: "10px"}}>
            <Typography variant="h4" color="primary">
              Transport info
            </Typography>
            <Text title="Plate Number" variant="h6" color="secondary" />
            <Text title={car.no} variant="body1" color="primary" />
            <Text title="Location" variant="h6" color="secondary" />
            <Text title={car.location} variant="body1" color="primary" />
            <Text title="Time" variant="h6" color="secondary" />
            <Text title={car.time} variant="body1" color="primary" />
          </Paper>
        </Grid>
        {/* </Paper> */}
      </Grid>
      <Grid item xs={12} lg={3} />
    </Grid>
  )
}

export default Dashboard
