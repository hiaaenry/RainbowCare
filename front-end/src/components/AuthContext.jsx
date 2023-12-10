import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)

  const login = (newToken) => {
    setToken(newToken)
  }

  const logout = () => {
    setToken(null)
  }

  const contextValue = React.useMemo(() => ({ token, login, logout }), [token])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useAuth() {
  return useContext(AuthContext)
}
