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