import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

import GlobalStyles from './components/global.js'
import LoginPage from './pages/login'
import MainPage from './pages/main'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import Route from './components/route'

const Container = styled.div`
  max-width: 720px;
  margin: 0px auto;
`

function App() {
  return (
    <Container>
      <GlobalStyles />

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route auth path="/myinfo" component={MyInfoPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
