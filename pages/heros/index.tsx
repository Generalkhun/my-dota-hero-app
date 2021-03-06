import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { DisplaySetting } from '../../components/DisplaySetting';
import HeroListDisplay from '../../components/HeroListDisplay';
import { HerosStatsDataContext } from '../../contextProviders/HerosStatsDataProvider';

interface Props {
    data: any
}

const initialState = {
    searchKeyWord: '',
    filterLogic: {},
    sortLogic: {}
}
const reducer = (state, action: any) => {
    switch (action.type) {
        case 'search':
            return { ...state, searchKeyWord: action.payload }
        case 'filterAttr':
            return { ...state, filterAttrLogic: action.payload }
        case 'filterRole':
            return { ...state, filterRoleLogic: action.payload }
        case 'sort':
            return { ...state, sortLogic: action.payload }

        default:
            return state
    }
}
const Heros = ({ heroStats }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
    // set data to the context on useEffect
    const heroStatsContext = useContext(HerosStatsDataContext)

    useEffect(() => {
        heroStatsContext.InitializeHeroStats(heroStats)
    }, [])

    // define a displaying setting data state
    const [displaySettingState, dispatchDisplaySettingState] = useReducer(reducer, initialState)

    return (
        <>
            <DisplaySetting dispatchDisplaySettingState={dispatchDisplaySettingState} heroList={heroStats} />
            <HeroListDisplay
                resHeroStatsData={heroStats}
                displaySettingState={displaySettingState}
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
