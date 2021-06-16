import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    color: theme.palette.primary.contrastText,
  },
}))

const Home = () => {
  const classes = useStyles()

  return <div className={classes.body}>Welcome to mui-starter-project!</div>
}

export default Home
