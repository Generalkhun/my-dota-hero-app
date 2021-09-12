import { filter, includes, toUpper,get } from "lodash";

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


export const adjustHeroDataOnDisplaySetting = (resHeroStatsData, displaySettingState) => {

  console.log('adjustHeroDataOnDisplaySetting: displaySettingState', displaySettingState);

  let resHeroStatsDataAdjusted = resHeroStatsData;

  /**
   * Add logics sort/filter/search
   */

  // search
  const searchKeyWord = get(displaySettingState,'searchKeyWord')
  if (searchKeyWord && searchKeyWord !== '') {
    resHeroStatsDataAdjusted = filter(resHeroStatsData, (herostat) => includes(toUpper(herostat.localized_name), toUpper(displaySettingState.searchKeyWord)))
  }


  return resHeroStatsDataAdjusted || []
}