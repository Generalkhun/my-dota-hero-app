import { Grid } from '@material-ui/core'
import React from 'react'
import BaseAttrRadioFiltering from './components/BaseAttrRadioFiltering'
import RolesDropDownFiltering from './components/RolesDropDownFiltering'

interface Props {
    onFilterHero: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterBox = (props: Props) => {
    const { onFilterHero } = props

    return (
        <div>
            <Grid container ></Grid>
            <Grid item sm={12} lg={6}>
                <BaseAttrRadioFiltering
                    onFilterHero={onFilterHero}
                />
            </Grid>
            <Grid item sm={12} lg={6}>
                <RolesDropDownFiltering
                    onFilterHero={onFilterHero}
                />
            </Grid>


        </div>
    )
}

export default FilterBox
