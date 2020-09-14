import React from "react"
import {Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
  align: {
    textAlign: "center",
    // display: "inline-block",
  },
})
const Text = ({title, variant, color, ...others}) => {
  const classes = useStyles()
  return (
    <Typography
      className={classes.align}
      variant={variant}
      color={color}
      style={{...others}}
    >
      {title}
    </Typography>
  )
}

export default Text
