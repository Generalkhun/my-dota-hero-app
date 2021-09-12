import { Grid } from '@material-ui/core'
import React from 'react'
import useSearchFilterSortBox from '../../hooks/useSearchFilterSortBox'
import FilterBox from './components/FilterBox'
import SearchBox from './components/SearchBox'
import SortBox from './components/SortBox'

interface Props {
    heroList: Array<any>
    dispatchDisplaySettingState: any
}

export const DisplaySetting = (props: Props) => {

    const { heroList, dispatchDisplaySettingState } = props
    const onSearchHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'search', payload: e.target.value })
    }
    const onFilterHeroAttr = (newValue:string) => {
        console.log('newValue', newValue);
        dispatchDisplaySettingState({ type: 'filterAttr', payload: newValue })
    }
    const onFilterHeroRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'filterRole', payload: e.target.value })
    }
    const onSortHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'sort', payload: e.target.value })
    }
    return (
        <Grid container style={{marginTop:10,paddingBottom:10}}>
            <Grid item xs={10} lg={2}>
                <SearchBox
                    onSearchHero={onSearchHero}
                />
            </Grid>
            <Grid item xs={10} lg={7}>
                <FilterBox
                    onFilterHeroAttr={onFilterHeroAttr}
                    onFilterHeroRole={onFilterHeroRole}
                />
            </Grid>
            <Grid item xs={10} lg={3}>
                <SortBox
                    onSortHero={onSortHero}
                />
            </Grid>

        </Grid>
    )
}
