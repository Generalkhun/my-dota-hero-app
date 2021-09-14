import { useState, createContext } from "react";
export const HerosStatsDataContext = createContext({} as any);

export function HerosStatsDataProvider({ children }) {
  const [heroStats, setHeroStats] = useState({} as any);

//   useEffect(() => {
//     setLocalStorage("favheros", favheros);
//   }, [favheros]);

  return (
    <HerosStatsDataContext.Provider
      value={
        { 
          HeroStatsData: heroStats, 
          InitializeHeroStats: (fetchedHeroStats:any) => setHeroStats(fetchedHeroStats)
        }
      }
    >
      {children}
    </HerosStatsDataContext.Provider>
  );
}