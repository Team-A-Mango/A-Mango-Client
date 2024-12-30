'use client'

import React, { createContext, useState, useContext } from 'react'

interface SearchContextType {
  searchResults: any[]
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<any[]>([])

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}