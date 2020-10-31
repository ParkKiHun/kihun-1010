import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  width: 200px;
  height: 200px;

  ${({ color }) => `background-color: ${color};`}
`

function BoxContatiner() {
  const [color, setColor] = useState('gray')

  console.log('color', color)

  return (
    <>
      <input
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
      <Box color={color} />
    </>
  )
}

export default BoxContatiner
