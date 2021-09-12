import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import BaseAttrFiltering from './components/BaseAttrFiltering'
import RolesFiltering from './components/RolesFiltering'

interface Props {
    onFilterHeroAttr: (newValue: string) => void
    onFilterHeroRole: (rolesTick: Object) => void
}
const useStyles = makeStyles({

})
const FilterBox = (props: Props) => {
    const { onFilterHeroAttr, onFilterHeroRole } = props
    const classes = useStyles()
    return (
        <div>
            <Grid container style={{ marginLeft: 20, height: 130 }} >
                <Grid item xs={12} md={5} style={{ height: 20 }}>
                    <RolesFiltering
                        onFilterHeroRole={onFilterHeroRole}
                    />
                </Grid>
                <Grid item xs={12} md={7} style={{ height: 20 }}>
                    <BaseAttrFiltering
                        onFilterHeroAttr={onFilterHeroAttr}
                    />
                </Grid>

            </Grid>
        </div>
    )
}

export default FilterBox
