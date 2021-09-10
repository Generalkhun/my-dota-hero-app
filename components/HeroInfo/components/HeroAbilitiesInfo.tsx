import { Card, Divider, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';

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
        marginTop: 20,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
    contentWrapper: {
        marginTop: 10,
        backgroundColor: '#1E212D',
        width: 'auto',
    },
});

const HeroAbilitiesInfo = ({heroAbilitiesData}: Props) => {
    const classes = useStyles()
    return (
        <Paper className={classes.herosAbilitiesInfoWrapper}>

            <Grid container style={{ marginLeft: 10, marginTop: 10 }}>
                <Grid item xs={12} md={6}>
                    <Card className={classes.titleWrapper} variant="outlined">
                        <Typography variant='h6' style={{ fontFamily:'Cinzel',color: 'white', marginLeft: 10 }}>△ BASE ATTR</Typography>
                    </Card>
                    <Card className={classes.contentWrapper} variant="outlined">
                        <Grid container>
                            <Grid item md={6}>
                            {/* base_agi: number,
    base_armor: number,
    base_attack_max: number,
    base_attack_min: number,
    base_health: number,
    base_health_regen: number,
    base_int: number
    base_mana: number,
    base_mana_regen: number,
    base_mr: number,
    base_str: number */}
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>AGI</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>STR</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>INT</Typography>

                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>ARMOR</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-MAX</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>ATTACK-MIN</Typography>

                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>HEALTH</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>MANA</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>MANA-REGEN</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>MR</Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_agi}</Typography>

                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_armor}</Typography>
                                <Typography variant='body1' style={{ fontFamily:'Cinzel',color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_attack_max}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_attack_min}</Typography>

                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_health}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mana}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mana_regen}</Typography>
                                <Typography variant='body1' style={{fontFamily:'Cinzel', color: 'white', marginLeft: 10 }}>{heroAbilitiesData.base_mr}</Typography>
                            </Grid>
                        </Grid>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>special</Grid>
            </Grid>
        </Paper>
    )
}

export default HeroAbilitiesInfo
