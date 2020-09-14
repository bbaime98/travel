import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"

const initialState = {
  details: {
    title: "",
    description: "",
  },
  car: {
    no: "",
    time: "",
    location: "",
  },
  hotel: {
    name: "Blue hotel",
    roomNumber: "34",
    roomSize: "2 Bedrooms",
    checkIn: "2020-04-19",
    checkOut: "2020-05-30",
  },
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const createPlan = (planDetails) => {
    dispatch({
      type: "CREATE_PLAN",
      payload: planDetails,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        state,
        createPlan,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
