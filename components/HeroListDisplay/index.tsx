import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid, Tooltip } from '@material-ui/core';
import React from 'react'
import { map } from 'lodash'
import Link from 'next/link'
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
        backgroundColor: '#2C2E43'
    },
    listItemDisplay: {
        backgroundColor: 'black',
    }
}));

const heroClickedOnListHandler = (e: any, heroStatus: Object) => {
    console.log('heroStatus', heroStatus);

}


const HeroListDisplay = (props: Props) => {
    const { resHeroStatsData } = props
    const classes = useStyles();

    return (
        <Grid container>
            {[...Array(11).keys()].map((colNum) => {
                return (
                    <Grid item xs={1}>
                        <Paper className={classes.avatarsWrapper}>
                            {map(resHeroStatsData.slice(0 + (colNum * 11), 11 + (colNum * 11)), function (heroStatus, index) {
                                return (
                                    // <Link href='/herodetail'>
                                    <Tooltip title={<Link href="/herodetail">{heroStatus.localized_name}</Link>} placement="top" interactive>
                                        <ListItem className={classes.listItemDisplay} key={index} onClick={(e) => heroClickedOnListHandler(e, heroStatus)}>
                                            <Avatar alt="Hero" src={`http://cdn.dota2.com/${heroStatus.img}`} className={classes.largeAvatar} />
                                        </ListItem>
                                    </Tooltip>
                                    // </Link>


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
