import { IconButton, Theme, Toolbar, Typography, AppBar, makeStyles, createStyles, Grid } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useRouter } from "next/dist/client/router";
import { get } from 'lodash'
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
    },
    otherNavIconSelectedheros: {
      marginLeft: 'auto',
      paddingBottom: 5,
      color: '#c6ff00'
    },
    otherNavIconSelectedfav: {
      marginLeft: 'auto',
      paddingBottom: 5,
      color: '#f50057'
    },
    naviagtionWrapper: {
      //paddingLeft:480,
      marginTop: 12,
      // [theme.breakpoints.down('lg')]:{
      //   paddingLeft:180
      // },
      // [theme.breakpoints.down('md')]:{
      //   paddingLeft:220
      // }
    }
  }),
);

const NavBar = () => {
  const router = useRouter()
  const pathname = get(router, 'pathname')

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={3} sm={2} md={1} lg={1}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <div onClick={(e) => {
                  e.preventDefault()
                  typeof window !== 'undefined' &&  router.push('/heros')
                }}
                >
                  <img height={50} width={100} src='https://i.pinimg.com/originals/27/ff/39/27ff3902c1363a776c9db6ee6f7d76d8.jpg' />
                </div>
              </IconButton>
            </Grid>
            <Grid item style={{ zIndex: 9999, marginTop: 22 }} xs={6} sm={6} md={6} lg={6}>
              <Typography variant="h6" className={classes.title}>
                MY DOTA HERO
              </Typography>
            </Grid>
            <Grid item className={classes.naviagtionWrapper}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <StarIcon className={pathname === '/heros' ? classes.otherNavIconSelectedheros : classes.otherNavIcon} />
                <div onClick={(e) => {
                  e.preventDefault()
                  typeof window !== 'undefined' &&  router.push('/heros')
                }}
                >
                  <Typography className={classes.otherNavText}>
                    HERO LIST
                  </Typography>
                </div>
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <FavoriteIcon className={pathname === '/myfavhero' ? classes.otherNavIconSelectedfav : classes.otherNavIcon} />
                <div onClick={(e) => {
                  e.preventDefault()
                  typeof window !== 'undefined' &&  router.push('/myfavhero')
                }}
                >
                  <Typography className={classes.otherNavText}>
                    My favorite
                  </Typography>
                </div>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar