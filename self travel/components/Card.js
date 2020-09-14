import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import car from "./car.jpg"
const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 140,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={car} title="Free car" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            4 seats, free snacks, cool music with free wifi
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        size="small"
        color="primary"
        variant="outlined"
        style={{marginBottom: "20px", marginTop: "10px"}}
      >
        Book
      </Button>
      {/* <CardActions>
        <div style={{textAlign: "center"}}>
        </div>
      </CardActions> */}
    </Card>
  )
}
