import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid, Tooltip, IconButton } from '@material-ui/core';
import React from 'react'
import { map } from 'lodash'
import Link from 'next/link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { displaySettingStateType } from '../../types';
import { adjustHeroDataOnDisplaySetting } from '../../helpers';


interface Props {
    resHeroStatsData: Array<any>
    displaySettingState: displaySettingStateType
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        '&:hover': {
            width: theme.spacing(12),
            height: theme.spacing(12),
            zIndex:9999
        }
    },
    avatarsWrapper: {
        marginLeft: 0,
        width: '80%',
        backgroundColor: '#2C2E43'
    },
    listItemDisplay: {
        backgroundColor: 'black'
    }
}));

const HeroListDisplay = (props: Props) => {
    const { resHeroStatsData,displaySettingState } = props
    const classes = useStyles();
    
    const resHeroStatsDataAdj = adjustHeroDataOnDisplaySetting(resHeroStatsData,displaySettingState) // search, filter, sort will effect on the data sequence and occurance

    return (
        <Grid container>
            {[...Array(11).keys()].map((colNum) => {
                return (
                    <Grid key={colNum} item xs={3} sm={2} md={2} lg={1}>
                        <Paper className={classes.avatarsWrapper}>
                            {map(resHeroStatsDataAdj.slice(0 + (colNum * 11), 11 + (colNum * 11)), function (heroStatus, index) {
                                return (
                                    <Tooltip key={index} title={
                                        <>
                                            <Link href={`heros/${heroStatus.id}`}>
                                                {heroStatus.localized_name + " ⇨"}
                                            </Link>
                                        </>
                                    } placement='bottom' arrow interactive>
                                        <ListItem button className={classes.listItemDisplay} key={index} >
                                            <Avatar variant='square' alt="Hero" src={`http://cdn.dota2.com/${heroStatus.img}`} className={classes.largeAvatar} />
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
