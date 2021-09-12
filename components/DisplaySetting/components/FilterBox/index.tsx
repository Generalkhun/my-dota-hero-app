import { Grid } from '@material-ui/core'
import React from 'react'
import BaseAttrFiltering from './components/BaseAttrFiltering'
import BaseAttrRadioFiltering from './components/BaseAttrRadioFiltering'
import RolesDropDownFiltering from './components/RolesDropDownFiltering'

interface Props {
    onFilterHero: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterBox = (props: Props) => {
    const { onFilterHero } = props

    return (
        <div>
            <Grid container style={{marginLeft:20}} >
                <Grid item sm={12} lg={10}>
                    <BaseAttrFiltering
                        onFilterHero={onFilterHero}
                    />
                </Grid>
                <Grid item sm={12} lg={6}>
                    <RolesDropDownFiltering
                        onFilterHero={onFilterHero}
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
