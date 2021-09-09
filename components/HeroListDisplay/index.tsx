import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid } from '@material-ui/core';
import React from 'react'
import { map } from 'lodash'
import { FixedSizeList } from 'react-window'
import VirtualizedList from './components/VertualizedList';
import { KeyboardReturnTwoTone } from '@material-ui/icons';

interface Props {
    resHeroStatsData: Array<any>
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    avatarsWrapper: {
        marginTop: 20,
        marginLeft: 20,
        height: '100%',
        width: '80%',
    },
    listItemDisplay: {
        backgroundColor: 'black'
    }
}));


const HeroListDisplay = (props: Props) => {
    const { resHeroStatsData } = props
    const classes = useStyles();
    // const resHeroStatsDataCol1 = resHeroStatsData.slice(0, 11)
    // const resHeroStatsDataCol2 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol3 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol4 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol5 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol6 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol7 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol8 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol9 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol10 = resHeroStatsData.slice(11, 22)
    // const resHeroStatsDataCol11 = resHeroStatsData.slice(11, 22)

    return (
        <Grid container>
            {[...Array(11).keys()].map((colNum) => {
                return (
                    <Grid item xs={1}>
                        <Paper className={classes.avatarsWrapper}>
                            {map(resHeroStatsData.slice(0+(colNum*11), 11+(colNum*11)), function (heroStatus, index) {
                                return (
                                    <ListItem className={classes.listItemDisplay} button key={index}>
                                        <Avatar alt="Hero" src={`http://cdn.dota2.com/${heroStatus.img}`} className={classes.largeAvatar} />
                                    </ListItem>
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
