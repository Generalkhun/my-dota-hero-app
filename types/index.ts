export interface displaySettingStateType {
    
}

export interface heroAbilitiesDataType {
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
    turn_rate: number
}

export interface heroGamesDataType {
    '1_pick': number
    '1_win': number
    '2_pick': number
    '2_win': number
    '3_pick': number
    '3_win': number
    '4_pick': number
    '4_win': number
    '5_pick': number
    '5_win': number
    '6_pick': number
    '6_win': number
    '7_pick': number
    '7_win': number
    '8_pick': number
    '8_win': number
    null_pick: number
    null_win: number
    pro_pick: number
    pro_ban: number
    pro_win: number
    turbo_picks: number
    turbo_wins: number
    

}