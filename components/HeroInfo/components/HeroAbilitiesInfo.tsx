import { Card, Divider, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { heroAbilitiesDataType, heroGamesDataType } from '../../../types';


interface Props {
    heroAbilitiesData: heroAbilitiesDataType
    heroGamesData: heroGamesDataType
}
const useStyles = makeStyles((theme) =>  ({
    root: {
        maxWidth: 400,
    },
    herosAbilitiesInfoWrapper: {
        marginLeft: 20,
        width: '100%',
        height: '90vh',
        backgroundColor: '#444444',

        [theme.breakpoints.down('lg')]:{
            height: '100%',
            paddingBottom:10,
            paddingRight:40
        },
        [theme.breakpoints.down('md')]:{
            height: '100%',
            paddingBottom:10,
        },
        [theme.breakpoints.down('sm')]:{
            height: '100%',
            paddingBottom:10
        }

    },
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Cinzel',
    },
    titleWrapper: {
        backgroundColor: '#1E212D',
        width: 'auto',
    },
    contentWrapper: {
        marginTop: 10,
        backgroundColor: '#1E212D',
        width: 'auto',
    },
    titleWrapperWinRate: {
        backgroundColor: '#1E212D',
        width: 'auto',
    }
}));

const HeroDetailInfo = ({ heroAbilitiesData,heroGamesData }: Props) => {
    const classes = useStyles()
    return (
        <Paper className={classes.herosAbilitiesInfoWrapper}>
            <Grid container style={{ marginLeft: 10 }}>
                <Grid item xs={12} sm={12} md={10} lg={6} style={{ marginTop: 10, marginLeft: 15 }}>
                    <Card className={classes.titleWrapper} variant="outlined">
                        <Typography variant='h6' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>△ BASE ATTRIBUTES</Typography>
                    </Card>
                    <Card className={classes.contentWrapper} variant="outlined">
                        <Grid container>
                            <Grid item md={6}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>AGI</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>STR</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>INT</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ARMOR</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-MAX</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-MIN</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>HEALTH</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>MANA</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>MANA-REGEN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>MR</Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_str}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_int}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_armor}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_attack_max}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_attack_min}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_health}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mana}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mana_regen}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mr}</Typography>
                            </Grid>
                        </Grid>

                    </Card>
                    <Card className={classes.titleWrapper} style={{ marginTop: 40 }} variant="outlined">
                        <Typography variant='h6' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>✩ OTHER ATTRIBUTES</Typography>
                    </Card>
                    <Card className={classes.contentWrapper} variant="outlined" >
                        <Grid container>
                            <Grid item md={5}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>AGI-GAIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>STR-GAIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>INT-GAIN</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-RATE</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-TYPE</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>CM-ENABLED</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>MOVE-SPEED</Typography>
                                {/* <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>TURN-RATE</Typography> */}
                            </Grid>
                            <Grid item  md={5}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.agi_gain}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.str_gain}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.int_gain}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.attack_rate}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.attack_type}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.cm_enabled ? '✔' : '✘'}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.move_speed}</Typography>
                                {/* <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.turn_rate}</Typography> */}
                            </Grid>
                        </Grid>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={5}  style={{ marginTop: 10, marginLeft: 15 }}>
                    <Card className={classes.titleWrapper} variant="outlined">
                        <Typography variant='h6' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>✩ GAMES-STATS</Typography>
                    </Card>
                    <Card className={classes.contentWrapper} variant="outlined">
                        <Grid container>
                            <Grid item md={5}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>1 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>1 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>2 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>2 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>3 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>3 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>4 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>4 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>5 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>5 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>6 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>6 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>7 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>7 WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>8 PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>8 WIN</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>NULL-PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>NULL-WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>PRO-PICK</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>PRO-BAN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>PRO-WIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>TURBO-PICKS</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>TURBO-WINS</Typography>
                                
                            </Grid>
                            <Grid item md={5}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['1_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['1_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['2_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['2_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['3_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['3_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['4_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['4_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['5_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['5_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['6_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['6_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['7_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['7_win']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['8_pick']}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData['8_win']}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.null_pick}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.null_win}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.pro_pick}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.pro_ban}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.pro_win}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.turbo_picks}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroGamesData.turbo_wins}</Typography>
                                
                            </Grid>
                        </Grid>

                    </Card>

                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeroDetailInfo
