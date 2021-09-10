export const mapHeroCardMediaData = (heroStat: any) => {
    return {
        name: heroStat.localized_name,
        icon: heroStat.icon,
        img: heroStat.img,
        attack_type: heroStat.attack_type,
        roles: heroStat.roles
    }
}