import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid, Tooltip, IconButton, Badge } from '@material-ui/core';
import React from 'react'
import { map, get, includes } from 'lodash'
import Link from 'next/link'
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
            zIndex: 9999
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
    const { resHeroStatsData, displaySettingState } = props
    const classes = useStyles();

    const resHeroStatsDataAdj = adjustHeroDataOnDisplaySetting(resHeroStatsData, displaySettingState) // search, filter, sort will effect on the data sequence and occurance

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
                                            {get(displaySettingState, 'sortLogic') === 'None' || get(displaySettingState, 'sortLogic') === 'Alphabetic' ?

                                                <Avatar variant='square' alt="Hero" src={heroStatus.localized_name !== 'Dawnbreaker' ? `http://cdn.dota2.com/${heroStatus.img}` : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dawnbreaker/dawnbreaker_sfm.jpg'} className={classes.largeAvatar} /> : <Badge
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }}
                                                    badgeContent={(index + 1) + (colNum * 11)}
                                                    color={
                                                        includes([...Array(15).keys()], parseInt((index + 1) + (colNum * 11))) ? (
                                                            includes([1, 2, 3], parseInt((index + 1) + (colNum * 11))) ? 'secondary'  : 'error'
                                                        ) : 'primary'
                                                    }
                                                    max={200}
                                                >
                                                    <Avatar variant='square' alt="Hero" src={heroStatus.localized_name !== 'Dawnbreaker' ? `http://cdn.dota2.com/${heroStatus.img}` : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dawnbreaker/dawnbreaker_sfm.jpg'} className={classes.largeAvatar} />
                                                </Badge>

                                            }

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
