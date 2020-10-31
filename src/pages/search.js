import React, { useState, useEffect } from 'react'

import Input from '../components/search/input'
import RecentSearchList from '../components/search/recent-search-list'

function SearchPage() {
  const [keywords, setKeywords] = useState([
    { id: 0, label: '아이유' },
    { id: 1, label: '금요일에 만나요' },
  ])

  //최초 한번 실행
  useEffect(() => {
    setKeywords(JSON.parse(localStorage.getItem('keywords') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
    console.log('변함: ', keywords)
  }, [keywords])

  const handleAddKeyword = (keyword) => {
    setKeywords([
      ...keywords,
      {
        id: Date.now(),
        label: keyword,
      },
    ])
  }

  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keywords) => {
        return keywords.id !== id
      }),
    )
  }

  const handleAllRemoveKeywrod = () => {
    setKeywords([])
  }

  return (
    <div>
      <Input keywords={keywords} onAddKeyword={handleAddKeyword} />
      <RecentSearchList
        keywords={keywords}
        onRemoveKeyword={handleRemoveKeyword}
        onAllRemoveKeywrod={handleAllRemoveKeywrod}
      />
    </div>
  )
}

export default SearchPage
