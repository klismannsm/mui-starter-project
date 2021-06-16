import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { signIn, useSession } from 'next-auth/client'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Header from '../Header'

const useStyles = makeStyles({
  body: {
    padding: '1rem',
  },
})

interface IProps {
  children: ReactNode
}

const Layout = (props: IProps) => {
  const classes = useStyles()
  const [session, loading] = useSession()

  if (loading) {
    return <CircularProgress size={100} />
  }

  if (!session || !session.user) {
    signIn()

    return null
  }

  return (
    <>
      <Header />
      <div className={classes.body}>{props.children}</div>
    </>
  )
}

export default Layout
