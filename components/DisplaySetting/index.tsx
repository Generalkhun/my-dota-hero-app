import { Grid } from '@material-ui/core'
import React from 'react'
import SearchBox from './components/SearchBox'

interface Props {
    heroList: Array<any>
    dispatchDisplaySettingState: any
}

export const DisplaySetting = (props: Props) => {
    const { heroList, dispatchDisplaySettingState } = props
    const onSearchHero = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e.target.value',e.target.value);
        
        dispatchDisplaySettingState({ type: 'search', payload: e.target.value })
    }
    return (
        <Grid container>
            <SearchBox
            onSearchHero={onSearchHero}
                heroList={heroList}
            />
        </Grid>
    )
}
