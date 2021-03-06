import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { SketchPicker } from 'react-color'
import '../ColorPicker/ColorPicker.css'

import TextField from '@material-ui/core/TextField'

import Paper from '@material-ui/core/Paper'
import { Height } from '@material-ui/icons'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [color, setColor] = React.useState('#111')
  const [colorName, setColorName] = React.useState('')
  const [hasColorNameError, setHasColorNameError] = React.useState(false)
  const [colorNameError, setColorNameError] = React.useState('')
  const [colorNameLabel, setColorNameLabel] = React.useState('Color Name')
  const [colors, setColors] = React.useState([])
  const [copied, setCopied] = React.useState(null)
  // console.log(colorName)

  const btnOnClick = () => {
    if (!colorName.trim()) {
      setColorNameError('Color Name is empty')
      setHasColorNameError(true)
    } else {
      var hasColor = false
      colors.forEach((c) => {
        if (c.color === color) {
          hasColor = true
        }
      })
      if (hasColor) {
        setColorNameError('Color Name exists')
        setHasColorNameError(true)
        return
      }
      setColorNameError('')
      setHasColorNameError(false)
      var c = [...colors]
      c.push({
        color,
        colorName,
      })
      setColors(c)
      setColorName('')
    }
  }

  const onCopyCN = (copiedText) => {
    setCopied(copiedText)

    setTimeout(() => {
      setCopied(null)
    }, 1500)
  }

  if (copied) {
    return (
      <div className="copied-text" style={{ backgroundColor: copied }}>
        Copied !!!
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Color Picker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <SketchPicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          onChangeComplete={(color) => setColor(color.hex)}
          className="picker"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          className="text-field"
          helperText={colorNameError}
          label={'Color Name'}
          error={hasColorNameError}
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
        <button
          onClick={btnOnClick}
          type="button"
          className="add-button"
          style={{ backgroundColor: color }}>
          Add color
        </button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />

        <section className="colors-section">
          {colors.map((color) => {
            return (
              <CopyToClipboard
                text={color.color}
                key={`color-${color.color}`}
                onCopy={onCopyCN}>
                <Paper
                  className="paper-div"
                  key={`color-${color.color}`}
                  style={{ backgroundColor: color.color }}>
                  {color.colorName}
                </Paper>
              </CopyToClipboard>
            )
          })}
        </section>
      </main>
    </div>
  )
}
