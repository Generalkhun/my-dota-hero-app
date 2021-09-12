import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import FilterBox from './components/FilterBox'
import SearchBox from './components/SearchBox'
import SortBox from './components/SortBox'

interface Props {
    heroList: Array<any>
    dispatchDisplaySettingState: any
}
const useStyles = makeStyles((theme) => ({
    settingDisplayWarpper: {
        [theme.breakpoints.down('lg')]: {
            height: 100,
        },
        [theme.breakpoints.down('md')]: {
            height: 250,
        },
        [theme.breakpoints.down('sm')]: {
            height: 300,
        },
        [theme.breakpoints.down('xs')]: {
            height: 400,
        }
    },
    filterWarpper: {
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: 30,
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50
        }
    },
    sortWarpper: {
        [theme.breakpoints.down('lg')]: {

        }
    }
}))
export const DisplaySetting = (props: Props) => {
    const classes = useStyles()
    const { heroList, dispatchDisplaySettingState } = props
    const onSearchHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'search', payload: e.target.value })
    }
    const onFilterHeroAttr = (newValue: string) => {
        console.log('newValue', newValue);
        dispatchDisplaySettingState({ type: 'filterAttr', payload: newValue })
    }
    const onFilterHeroRole = (rolesTick: Object) => {
        console.log('rolesTick', rolesTick);
        dispatchDisplaySettingState({ type: 'filterRole', payload: rolesTick })
    }
    const onSortHero = (sortingTopic: string) => {
        console.log('sortingTopic', sortingTopic);
        dispatchDisplaySettingState({ type: 'sort', payload: sortingTopic })
    }
    return (
        <Grid container className={classes.settingDisplayWarpper} style={{ marginTop: 10, paddingBottom: 10 }}>
            <Grid item xs={10} sm={6} md={2} lg={2}>
                <SearchBox
                    onSearchHero={onSearchHero}
                />
            </Grid>
            <Grid item xs={10} sm={12} md={12} lg={8} className={classes.filterWarpper}>
                <FilterBox
                    onFilterHeroAttr={onFilterHeroAttr}
                    onFilterHeroRole={onFilterHeroRole}
                />
            </Grid>
            <Grid item xs={10} md={3} lg={2} className={classes.sortWarpper}>
                <SortBox
                    onSortHero={onSortHero}
                />
            </Grid>

        </Grid>
    )
}
