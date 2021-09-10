import { IconButton, Theme, Toolbar, Typography, AppBar, makeStyles, createStyles, Hidden, Grid } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontStyle: 'BOLD',
      fontFamily: 'Cinzel',
      paddingRight: 100
    },
    otherNavText: {
      paddingLeft: 10,
      fontSize: '1.3rem',
      fontFamily: 'Cinzel',
    },
    otherNavIcon: {
      marginLeft: 'auto',
      paddingBottom: 5
    }
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

          <Hidden smDown>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <StarIcon className={classes.otherNavIcon} />
              <Link href='/heros'>
              <Typography className={classes.otherNavText}>
                HERO LIST
              </Typography>
              </Link>
            </IconButton>

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FavoriteIcon className={classes.otherNavIcon} />
              <Link href='/myfavhero'>
                <Typography className={classes.otherNavText}>
                  My favorite
                </Typography>
              </Link>

            </IconButton>

          </Hidden>
          <Hidden mdUp>
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