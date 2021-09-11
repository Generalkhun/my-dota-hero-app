import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect, useReducer, useState } from 'react'
import { DisplaySetting } from '../../components/DisplaySetting';
import HeroListDisplay from '../../components/HeroListDisplay';

interface Props {
    data: any
}

const initialState = {
    searchKeyWord:'',
    filterLogic: {},
    sortLogic:{}
} 
const reducer = (state,action:any) => {
    switch (action.type){
        case 'search':
            return {...state, searchKeyWord:action.payload}
        case 'filter':
            return {...state, filterLogic:action.payload}
    }
}
const Heros = ({heroStats}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [displaySettingState, dispatchDisplaySettingState] = useReducer(reducer, initialState)
    
    return (
        <>
            <DisplaySetting dispatchDisplaySettingState={dispatchDisplaySettingState} heroList={heroStats} />
            <HeroListDisplay
                resHeroStatsData={heroStats}
                displaySettingState = {displaySettingState}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    //const resHero = await fetch(`https://api.opendota.com/api/heroes`)
    const resHeroStats = await fetch(`https://api.opendota.com/api/heroStats`)
    // http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_full.png

    //const resHeroData = await resHero.json()
    const heroStats = await resHeroStats.json()
    if (!heroStats) {
        return {
            notFound: true,
        }
    }
    return {
        props: { heroStats }, // will be passed to the page component as props
    }
}


export default Heros
