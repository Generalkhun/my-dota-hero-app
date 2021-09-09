import { Button, IconButton, Theme, Toolbar, Typography, AppBar, makeStyles, createStyles, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import React from "react";
import styles from './NavBar.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontStyle: 'BOLD',
      flexGrow: 1,
    },
    favoriteText: {
      paddingLeft: 10,
      paddingTop: 10,
      fontFamily: 'Italianno'
    },

  }),
);

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img height={50} width={100} src='https://i.pinimg.com/originals/27/ff/39/27ff3902c1363a776c9db6ee6f7d76d8.jpg' />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MY DOTA HERO
          </Typography>
          <Hidden xsDown>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <StarIcon />
              <Typography className={classes.favoriteText}>
                HERO LIST
              </Typography>
            </IconButton>


            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FavoriteIcon />
              <Typography className={classes.favoriteText}>
                My favorite
              </Typography>
            </IconButton>

          </Hidden>
          <Hidden smUp>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar