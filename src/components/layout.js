import React from "react"
import { Link } from "gatsby"
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { FaGithub, FaLinkedin } from "react-icons/fa"


// const ListLink = props => (
//     <Link to={props.to}>{props.children}</Link>
// )

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "#ced3dc",
        boxShadow: "none",
    },
    header: {
      color: "#514689",
      display: 'inline-block',
      margin: '0 0.5rem',
      padding: '0.25rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    navItems: {
      [theme.breakpoints.down('sm')]: {
        display: "flex",
        margin: "0 auto"
      },
    },
    linkStyles: {
        color: "#514689",
        display: 'inline-block',
        margin: '0 0.5rem',
        padding: '0.25rem',
    },
    activeLink: {
        color: "#ced3dc",
        textDecoration: 'none',
        backgroundColor: "#514689",
        borderRadius: 20,
        padding: "1vh 1vw"
    },
    fab1: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fab2: {
      position: "fixed",
      bottom: theme.spacing(10),
      right: theme.spacing(2),
    },
    hoverLink: {
        '&::before': {
            height: '14px',
            width: '14px',
            position: 'absolute',
            content: '""',
            transition: 'all 0.35s ease',
            opacity: 0,
            right: 0,
            top: 0,
            borderRight: '3px solid cyan',
            borderTop: '3px solid cyan',
            transform: 'translate(-100%, 50%)',
        },
        '&::after': {
            height: '14px',
            width: '14px',
            position: 'absolute',
            content: '""',
            transition: 'all 0.35s ease',
            opacity: 0,
            left: 0,
            bottom: 0,
            borderLeft: '3px solid cyan',
            borderBottom: '3px solid cyan',
            transform: 'translate(100%, -50%)'
        },
        '&:hover::before': {
            transform: 'translate(0%, 0%)',
            opacity: 1,
        },
        '&:hover::after': {
            transform: 'translate(0%, 0%)',
            opacity: 1,
        }
    },
    grow: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div >
        <AppBar position="static" className={classes.navbar}>
        <Toolbar>
            <Link to="/" className={classes.header} >
                Sean McGovern
            </Link>
          <div className={classes.grow} />
          <div className={classes.navItems}>
            <Link to="/" className={classes.linkStyles} activeClassName={classes.activeLink}>
                Home
            </Link>
            <Link to="/experience" className={classes.linkStyles} activeClassName={classes.activeLink}>
                Experience
            </Link>
            <Link to="/projects" className={classes.linkStyles} activeClassName={classes.activeLink}>
                Projects
            </Link>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
      {children}
        <a href="https://github.com/seanrmcgovern">
          <Zoom
            in={true}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${transitionDuration.exit}ms`,
            }}
            unmountOnExit
          >
            <Fab aria-label={"GitHub"} className={classes.fab1}>
              <FaGithub size="small" color={"#514689"}/>
            </Fab>
          </Zoom>
        </a>
        <a href="https://www.linkedin.com/in/seanrmcgovern/">
          <Zoom
            in={true}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${transitionDuration.exit}ms`,
            }}
            unmountOnExit
          >
            <Fab aria-label={"LinkedIn"} className={classes.fab2}>
                <FaLinkedin size="small" color={"#514689"} />
            </Fab>
          </Zoom>
        </a>
    </div>
  )
}