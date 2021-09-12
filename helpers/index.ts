import { filter, includes, toUpper, get, reduce, isEmpty } from "lodash";

export function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

export function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

// Use to adjust new sequence of hero data before displaying
export const adjustHeroDataOnDisplaySetting = (resHeroStatsData, displaySettingState) => {

  console.log('adjustHeroDataOnDisplaySetting: displaySettingState', displaySettingState);

  let resHeroStatsDataAdjusted = resHeroStatsData;

  /**
   * Add logics sort/filter/search
   */

  // search
  const searchKeyWord = get(displaySettingState, 'searchKeyWord')
  if (!isEmpty(searchKeyWord)) {
    resHeroStatsDataAdjusted = filter(resHeroStatsData, (herostat) => includes(toUpper(herostat.localized_name), toUpper(displaySettingState.searchKeyWord)))
  }


  // filter by attributes
  const filterAttrLogic = get(displaySettingState, 'filterAttrLogic')
  if (!isEmpty(filterAttrLogic)) {
    resHeroStatsDataAdjusted = filterAttrLogic !== 'all' ? filter(resHeroStatsDataAdjusted, (herostat) => herostat.primary_attr === filterAttrLogic) : resHeroStatsDataAdjusted
  }

  //filter by roles
  const filterRoleLogic = get(displaySettingState, 'filterRoleLogic')
  if (!isEmpty(filterRoleLogic)) {
    resHeroStatsDataAdjusted = reduce(resHeroStatsDataAdjusted, ((carry, current) => {
      let followFilterRoleLogic = false
      current.roles.forEach(role => {
        followFilterRoleLogic = filterRoleLogic[role]
      })
      if (followFilterRoleLogic) {
        return [ ...carry, current ]
      }
      return carry
    }), [])
  }

console.log('result',resHeroStatsDataAdjusted);


  return resHeroStatsDataAdjusted || []
}