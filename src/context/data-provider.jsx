
import { createContext, useState } from "react"


export const GlobalDataContext = createContext({
    globalData: [],
    setGlobalData: () => {}

})

// eslint-disable-next-line react/prop-types
export const GlobalDataProvider = ({children}) => {
    const [globalData, setGlobalData] = useState([])

    return (
        <GlobalDataContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalDataContext.Provider>
    )

}