import React from 'react'
import { Route as BaseRoute, useHistory } from 'react-router-dom'

import { useUserContext } from '../contexts/user-context'

function Route({ auth, ...props }) {
  const { user } = useUserContext()
  const history = useHistory()
  // 로그인 여부에 따라 페이지 이동

  if (auth && user == null) {
    // 로그인 페이지 이동
    history.replace('/login')
  }
  return <BaseRoute {...props} />
}

export default Route
