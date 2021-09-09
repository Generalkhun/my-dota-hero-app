import { Grid } from '@material-ui/core'
import React from 'react'
import SearchBox from './components/SearchBox'

interface Props {
    heroList: Array<any>
}

export const DisplaySetting = (props: Props) => {
    const { heroList } = props
    return (
        <Grid container>
            <SearchBox
                heroList={heroList}
            />
        </Grid>
    )
}
