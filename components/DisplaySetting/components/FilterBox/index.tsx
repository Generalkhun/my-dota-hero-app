import { Grid } from '@material-ui/core'
import React from 'react'
import BaseAttrFiltering from './components/BaseAttrFiltering'
import RolesFiltering from './components/RolesFiltering'

interface Props {
    onFilterHeroAttr: (newValue:string) => void
    onFilterHeroRole: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterBox = (props: Props) => {
    const { onFilterHeroAttr, onFilterHeroRole } = props

    return (
        <div>
            <Grid container spacing={10} style={{ marginLeft: 100 }} >
                <Grid item xs={12} lg={3} style={{height:20}}>
                    <BaseAttrFiltering
                        onFilterHeroAttr={onFilterHeroAttr}
                    />
                </Grid>
                <Grid item xs={12} lg={7} style={{height:20}}>
                    <RolesFiltering
                        onFilterHeroRole={onFilterHeroRole}
                    />
                </Grid>
            </Grid>
            {/* <Grid item sm={12} lg={6}>
                <BaseAttrRadioFiltering
                    onFilterHero={onFilterHero}
                />
            </Grid> */}



        </div>
    )
}

export default FilterBox
