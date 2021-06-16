import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { signOut, useSession } from 'next-auth/client'
import useDarkMode from 'use-dark-mode'

const useStyles = makeStyles({
  darkThemeToggle: {
    marginLeft: 0,
  },
})

const ProfileMenu = () => {
  const classes = useStyles()
  const [session] = useSession()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const sessionMenuOpen = Boolean(anchorEl)
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode()

  const toggleSessionMenu = (event: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    setAnchorEl(event.currentTarget)
  }

  const closeSessionMenu = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleSessionMenu}
        color="inherit"
      >
        {(session?.user?.image && <Avatar src={session.user.image} />) || <AccountCircleIcon />}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={sessionMenuOpen}
        onClose={closeSessionMenu}
      >
        <MenuItem>{session?.user?.email}</MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Switch onClick={toggleDarkMode} />}
            label="Dark mode"
            labelPlacement="start"
            checked={isDark}
            className={classes.darkThemeToggle}
          />
        </MenuItem>
        <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileMenu
