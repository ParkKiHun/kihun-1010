import React from 'react'

import Navbar from '../components/main/navbar'
import Logo from '../components/main/logo'
import SearchBar from '../components/main/search-bar'
import Webtoos from '../components/main/webtoons'
import RecommentWebtoons from '../components/main/recommend-webtoons'
import { useUserContext } from '../contexts/user-context'

function MainPage() {
  const { user } = useUserContext()
  return (
    <div>
      <Navbar />
      <Logo />
      <SearchBar />
      <Webtoos />
      {user && <RecommentWebtoons />}
    </div>
  )
}

export default MainPage
