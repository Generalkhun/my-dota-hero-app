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
    const onFilterHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'filter', payload: e.target.value })
    }
    const onSortHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value', e.target.value);
        dispatchDisplaySettingState({ type: 'sort', payload: e.target.value })
    }
    return (
        <Grid container style={{marginTop:10,paddingBottom:10}}>
            <Grid item xs={10} lg={4}>
                <SearchBox
                    onSearchHero={onSearchHero}
                />
            </Grid>
            <Grid item xs={10} lg={4}>
                <FilterBox
                    onFilterHero={onFilterHero}
                />
            </Grid>
            <Grid item xs={10} lg={4}>
                <SortBox
                    onSortHero={onSortHero}
                />
            </Grid>

        </Grid>
    )
}
