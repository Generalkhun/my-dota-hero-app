import React from 'react'
import {get} from 'lodash'
interface Props {
    dispatchDisplaySettingState: any
}

const useSearchFilterSortBox = ({dispatchDisplaySettingState}: Props) => {

    console.log('useSearchFilterSortBox: dispatchDisplaySettingState',dispatchDisplaySettingState);
    
    // const onSearchHero = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('e.target.value', e.target.value);
    //     dispatchDisplaySettingState({ type: 'search', payload: e.target.value })
    // }
    // const onFilterHero = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('e.target.value', e.target.value);
    //     dispatchDisplaySettingState({ type: 'filter', payload: e.target.value })
    // }
    // const onSortHero = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('e.target.value', e.target.value);
    //     dispatchDisplaySettingState({ type: 'sort', payload: e.target.value })
    // }
    // return (
    //     { onSearchHero, onFilterHero, onSortHero }
    // )
}

export default useSearchFilterSortBox
