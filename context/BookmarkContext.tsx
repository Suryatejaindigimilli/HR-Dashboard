'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
}

type BookmarkContextType = {
  bookmarks: User[]
  addBookmark: (user: User) => void
  removeBookmark: (userId: number) => void
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<User[]>([])

  // ✅ Load from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem('bookmarkedUsers')
    if (stored) {
      setBookmarks(JSON.parse(stored))
    }
  }, [])

  // ✅ Save to localStorage when bookmarks change
  useEffect(() => {
    localStorage.setItem('bookmarkedUsers', JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (user: User) => {
    setBookmarks(prev => [...prev, user])
  }

  const removeBookmark = (userId: number) => {
    setBookmarks(prev => prev.filter(user => user.id !== userId))
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export const useBookmarks = () => {
  const context = useContext(BookmarkContext)
  if (!context) throw new Error('useBookmarks must be used within BookmarkProvider')
  return context
}
