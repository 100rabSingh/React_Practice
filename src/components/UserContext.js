//Context 
//Step 1: Creating the Context
//Step 2: in App.js wrapping ComponentC with UserProvider Component, this value now can be consumed by any of the decendent Component

import React from "react"

const UserContext = React.createContext('God')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext                      //Step 1 ContextType: Export Context Component itself