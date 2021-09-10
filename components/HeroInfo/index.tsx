import { Grid } from '@material-ui/core'
import React from 'react'
import HeroCardMedia from './components/HeroCardMedia'
import { mapHeroCardMediaData } from './mapDataUtils';

interface Props {
    heroStat: any
}



const HeroInfo = ({ heroStat }: Props) => {

    console.log('heroStat', heroStat[0]);
    const heroCardMediaData = mapHeroCardMediaData(heroStat[0])

    return (
        <Grid style={{ marginTop: 20, marginLeft: 40, height: '60vh' }} container>
            <Grid item md={12} lg={6}>
                <HeroCardMedia
                    heroCardMediaData={heroCardMediaData}
                />
            </Grid>
        </Grid>
    )
}

export default HeroInfo
