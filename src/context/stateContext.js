import React, { createContext, useState, useReducer } from 'react'

export const StateContext = createContext()

export const StateContextProvider = (props) => {
  const [movie, setMovie] = useState(null);

  const contextValue = {
    movie,
    setMovie
  }


  return (
  <StateContext.Provider value={contextValue}>
    {props.children}
  </StateContext.Provider>
  )


}
