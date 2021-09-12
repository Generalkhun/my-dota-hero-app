import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import BaseAttrFiltering from './components/BaseAttrFiltering'
import RolesFiltering from './components/RolesFiltering'

interface Props {
    onFilterHeroAttr: (newValue: string) => void
    onFilterHeroRole: (rolesTick: Object) => void
}
const useStyles = makeStyles((theme) => ({
    roleFilteringWrapper:{
        [theme.breakpoints.up('lg')]: {
            paddingRight: 100,
        },
        [theme.breakpoints.down('lg')]: {
            marginRight:'auto',
        },
    }
}))
const FilterBox = (props: Props) => {
    const { onFilterHeroAttr, onFilterHeroRole } = props
    const classes = useStyles()
    return (
        <div>
            <Grid container style={{ marginLeft: 20, height: 130 }} >
                <Grid item  md={12} lg={7} style={{ height: 20 }} className={classes.roleFilteringWrapper}>
                    <RolesFiltering
                        onFilterHeroRole={onFilterHeroRole}
                    />
                </Grid>
                <Grid item  md={12} lg={5}>
                    <BaseAttrFiltering
                        onFilterHeroAttr={onFilterHeroAttr}
                    />
                </Grid>

            </Grid>
        </div>
    )
}

export default FilterBox
