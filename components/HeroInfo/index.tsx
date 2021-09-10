import { Grid } from '@material-ui/core'
import React from 'react'
import HeroCardMedia from './components/HeroCardMedia'
import { mapHeroAbilitiesData, mapHeroCardMediaData } from './mapDataUtils';

interface Props {
    heroStat: any
}



const HeroInfo = ({ heroStat }: Props) => {

    console.log('heroStat', heroStat);
    const heroCardMediaData = mapHeroCardMediaData(heroStat)
    const heroAbilitiesData = mapHeroAbilitiesData(heroStat)

    return (
        <Grid style={{ marginTop: 20, marginLeft: 40, height: '60vh' }} container>
            <Grid item sm={12} md={6} lg={4}>
                <HeroCardMedia
                    heroCardMediaData={heroCardMediaData}
                />
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
                <HeroAbilitiesInfo 
                    heroCardMediaData={heroCardMediaData}
                />
            </Grid>
        </Grid>
    )
}

export default HeroInfo
