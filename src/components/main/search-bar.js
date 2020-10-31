import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Box = styled.div`
  padding: 0px 20px;
`

const Box2 = styled.div`
  border: 1px solid rgb(11, 222, 139);
  height: 54px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
`
function SearchBar() {
  return (
    <Box>
      <Link to="/search">
        <Box2 />
      </Link>
    </Box>
  )
}

export default SearchBar
