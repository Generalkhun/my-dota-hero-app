export const mapHeroCardMediaData = (heroStat: any) => {
    return {
        name: heroStat.localized_name,
        icon: heroStat.icon,
        img: heroStat.img,
        primary_attr:heroStat.primary_attr,
        attack_type: heroStat.attack_type,
        roles: heroStat.roles
    }
}

export const mapHeroAbilitiesData = (heroStat: any) => {
    return {
        base_agi: heroStat.base_agi,
        base_armor: heroStat.base_armor,
        base_attack_max: heroStat.base_attack_max,
        base_attack_min: heroStat.base_attack_min,
        base_health: heroStat.base_health,
        base_health_regen:heroStat.base_health_regen,
        base_int:heroStat.base_int,
        base_mana:heroStat.base_mana,
        base_mana_regen:heroStat.base_mana_regen,
        base_mr:heroStat.base_mr,
        base_str:heroStat.base_str,

        agi_gain:heroStat.agi_gain,
        str_gain:heroStat.str_gain,
        int_gain: heroStat.int_gain,

        attack_rate:heroStat.attack_rate,
        attack_type: heroStat.attack_type,
        cm_enabled:heroStat.cm_enabled,
        move_speed:heroStat.move_speed,
        
    }
}

export const mapHeroGamesData = (heroStat:any) => {
    return {
        '1_pick': heroStat['1_win'],
        '1_win': heroStat['1_win'],
        '2_pick': heroStat['2_win'],
        '2_win': heroStat['2_win'],
        '3_pick': heroStat['3_win'],
        '3_win': heroStat['3_win'],
        '4_pick': heroStat['4_win'],
        '4_win': heroStat['4_win'],
        '5_pick': heroStat['5_win'],
        '5_win': heroStat['5_win'],
        '6_pick': heroStat['6_win'],
        '6_win': heroStat['6_win'],
        '7_pick': heroStat['7_win'],
        '7_win': heroStat['7_win'],
        '8_pick': heroStat['8_win'],
        '8_win': heroStat['8_win'],
        null_pick:heroStat.null_pick,
        null_win:heroStat.null_win,
        pro_pick:heroStat.pro_pick,
        pro_ban:heroStat.pro_ban,
        pro_win:heroStat.pro_win,
        turbo_picks:heroStat.turbo_picks,
        turbo_wins:heroStat.turbo_wins,
        turn_rate:heroStat.turn_rate,
    }
}