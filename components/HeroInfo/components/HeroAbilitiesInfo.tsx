import React from 'react'


interface heroAbilitiesInfoType {
    base_agi: number,
    base_armor: number,
    base_attack_max: number,
    base_attack_min: number,
    base_health: number,
    base_health_regen: number,
    base_int: number
    base_mana: number,
    base_mana_regen: number,
    base_mr: number,
    base_str: number

    agi_gain: number,
    str_gain: number,
    int_gain: number,

    attack_rate: number,
    attack_type: string,
    cm_enabled: boolean,
    move_speed: number,
}
interface Props {
    HeroAbilitiesInfo: heroAbilitiesInfoType
}

const HeroAbilitiesInfo = (props: Props) => {
    return (
        <div>

        </div>
    )
}

export default HeroAbilitiesInfo
