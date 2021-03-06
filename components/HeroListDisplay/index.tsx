import { Avatar, Theme, makeStyles, createStyles, Paper, ListItem, Grid, Tooltip, Button, Badge, withStyles, Typography } from '@material-ui/core';
import React from 'react'
import { map, get, includes, isEmpty } from 'lodash'
import { displaySettingStateType } from '../../types';
import { adjustHeroDataOnDisplaySetting } from '../../helpers';
import { useRouter } from 'next/router'
interface Props {
    resHeroStatsData: Array<any>
    displaySettingState: displaySettingStateType
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    displayWrapper: {
        [theme.breakpoints.down('xl')]: {
            marginLeft: 80
        },
        [theme.breakpoints.down('xl')]: {
            marginLeft: 70
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 30

        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 20
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10
        },
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


/**
 * @TODO style tooltip
 */
const StyledTooltip = withStyles({
    tooltipPlacementTop: {
        margin: "0px 0",
    },
})(Tooltip);

const HeroListDisplay = (props: Props) => {
    const { resHeroStatsData, displaySettingState } = props
    const classes = useStyles();
    const router = useRouter()

    const resHeroStatsDataAdj = adjustHeroDataOnDisplaySetting(resHeroStatsData, displaySettingState) // search, filter, sort will effect on the data sequence and occurance
    const isNotShowBadge = isEmpty(get(displaySettingState, 'sortLogic')) || get(displaySettingState, 'sortLogic') === 'None' || get(displaySettingState, 'sortLogic') === 'Alphabetic' // show badge logic
    
    return (
        <Grid container className={classes.displayWrapper}>
            {[...Array(11).keys()].map((colNum) => {
                return (
                    <Grid key={colNum} item xs={3} sm={2} md={2} lg={1}>
                        <Paper className={classes.avatarsWrapper}>
                            {map(resHeroStatsDataAdj.slice(0 + (colNum * 11), 11 + (colNum * 11)), function (heroStatus, index) {
                                return (
                                    <StyledTooltip key={index} title={
                                        <Typography style={{ fontFamily: 'Cinzel' }}>{heroStatus.localized_name}</Typography>
                                    } placement='top' arrow>

                                        <ListItem className={classes.listItemDisplay} key={index} >
                                            <div onClick={(e) => {
                                                e.preventDefault()
                                                typeof window !== 'undefined' && router.push(`heros/${heroStatus.id}`)
                                            }} 
                                            // href={`heros/${heroStatus.id}`}
                                            >
                                                {isNotShowBadge ? <Avatar variant='square' alt="Hero" src={heroStatus.localized_name !== 'Dawnbreaker' ? `http://cdn.dota2.com/${heroStatus.img}` : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dawnbreaker/dawnbreaker_sfm.jpg'} className={classes.largeAvatar} /> :
                                                    <Badge
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        badgeContent={(index + 1) + (colNum * 11)}
                                                        color={
                                                            includes([...Array(15).keys()], parseInt((index + 1) + (colNum * 11))) ? (
                                                                includes([1, 2, 3], parseInt((index + 1) + (colNum * 11))) ? 'secondary' : 'error'
                                                            ) : 'primary'
                                                        }
                                                        max={200}
                                                    >
                                                        <Avatar variant='square' alt="Hero" src={heroStatus.localized_name !== 'Dawnbreaker' ? `http://cdn.dota2.com/${heroStatus.img}` : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dawnbreaker/dawnbreaker_sfm.jpg'} className={classes.largeAvatar} />
                                                    </Badge>
                                                }
                                            </div>
                                        </ListItem>

                                    </StyledTooltip>
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
