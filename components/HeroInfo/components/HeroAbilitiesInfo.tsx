import { Card, Divider, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
interface heroAbilitiesDataType {
    base_agi: number,
    base_armor: number,
    base_attack_max: number,
    base_attack_min: number,
    base_health: number,
    base_health_regen: number,
    base_int: number
    base_mana: number,
    base_mana_regen: number,
    base_mr: number,
    base_str: number

    agi_gain: number,
    str_gain: number,
    int_gain: number,

    attack_rate: number,
    attack_type: string,
    cm_enabled: boolean,
    move_speed: number,
}
interface Props {
    heroAbilitiesData: heroAbilitiesDataType
}
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    herosAbilitiesInfoWrapper: {
        marginLeft: 20,
        width: '100%',
        height: '48vh',
        backgroundColor: '#444444'
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
});

const HeroAbilitiesInfo = ({ heroAbilitiesData }: Props) => {
    const classes = useStyles()
    return (
        <Paper className={classes.herosAbilitiesInfoWrapper}>

            <Grid container style={{ marginLeft: 10 }}>
                <Grid item xs={10} md={6} style={{ marginTop: 10, marginLeft: 20 }}>
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
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>

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
                </Grid>
                <Grid item xs={10} md={5} style={{ marginTop: 10, marginLeft: 20 }}>
                    <Card className={classes.titleWrapper} variant="outlined">
                        <Typography variant='h6' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>✩ OTHER ATTRIBUTES</Typography>
                    </Card>

                    {/* agi_gain: number,
    str_gain: number,
    int_gain: number,

    attack_rate: number,
    attack_type: string,
    cm_enabled: boolean,
    move_speed: number, */}
                    <Card className={classes.contentWrapper} variant="outlined">
                        <Grid container>
                            <Grid item md={6}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>AGI-GAIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>STR-GAIN</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>INT-GAIN</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-RATE</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-TYPE</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>CM-ENABLED</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>MOVE-SPEED</Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.agi_gain}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.str_gain}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.int_gain}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.attack_rate}</Typography>
                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.attack_type}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.cm_enabled?'✔':'✘'}</Typography>

                                <Typography variant='body1' style={{ fontFamily: 'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.move_speed}</Typography>
                            </Grid>
                        </Grid>

                    </Card>

                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeroAbilitiesInfo
