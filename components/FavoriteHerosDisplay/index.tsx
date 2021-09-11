import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { includes, map } from 'lodash'
import React from 'react'

interface Props {
    favHerosList: string[]
    heroStats: any
}
const useStyles = makeStyles({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 100,
        fontFamily: 'Cinzel'
    },
    titleWrapper: {
        display:'flex',
        justifyContent:'center'
    },
    mediaCardWrapper:{
        marginTop:20,
        marginLeft:40,
    
    }
})
const FavoriteHerosDisplay = (props: Props) => {
    const classes = useStyles()
    const { favHerosList, heroStats } = props

    return (
        <>
            {map(heroStats, (heroStat, index) => {
                return (includes(favHerosList, heroStat.localized_name) ?
                    <Grid item xs={4} sm={2 } key={index} className={classes.mediaCardWrapper}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`http://cdn.dota2.com/${heroStat.img}`}
                                />
                                <CardContent className={classes.titleWrapper}>
                                    <Typography style={{ fontFamily: 'Cinzel' }} gutterBottom variant="overline" component="h2">
                                        {' ' + heroStat.localized_name}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid> : <></>)
            })}
        </>

    )
}

export default FavoriteHerosDisplay
