import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  padding: 20px 0px;
`
const Img = styled.img`
  width: 165px;
  margin: 0px auto;
  display: block;
`

function Logo() {
  return (
    <Box>
      <Img src="https://s.pstatic.net/static/www/m/2019/img_logo_main_home.png"></Img>
    </Box>
  )
}

export default Logo
