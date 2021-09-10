import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid, Tooltip, IconButton } from '@material-ui/core';
import React from 'react'
import { map } from 'lodash'
import Link from 'next/link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
interface Props {
    resHeroStatsData: Array<any>
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    avatarsWrapper: {
        marginLeft: 20,
        width: '80%',
        backgroundColor: '#2C2E43',
    },
    listItemDisplay: {
        backgroundColor: 'black',
        
    }
}));

const HeroListDisplay = (props: Props) => {
    const { resHeroStatsData } = props
    const classes = useStyles();

    return (
        <Grid container>
            {[...Array(11).keys()].map((colNum) => {
                return (
                    <Grid key={colNum} item xs={1}>
                        <Paper className={classes.avatarsWrapper}>
                            {map(resHeroStatsData.slice(0 + (colNum * 11), 11 + (colNum * 11)), function (heroStatus, index) {
                                return (
                                    <Tooltip key={index} title={
                                        <>
                                            <Link href={`heros/${heroStatus.id}`}>
                                                {heroStatus.localized_name + " ⇨"}
                                            </Link>
                                        </>
                                    } placement='bottom' arrow interactive>
                                        <ListItem className={classes.listItemDisplay} key={index} >
                                            <Avatar alt="Hero" src={`http://cdn.dota2.com/${heroStatus.img}`} className={classes.largeAvatar} />
                                        </ListItem>
                                    </Tooltip>


                                )
                            }
                            )}
                        </Paper>
                    </Grid>
                )
            })}


        </Grid>

    )
}



export default HeroListDisplay
