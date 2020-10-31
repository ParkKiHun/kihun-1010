import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../../contexts/user-context'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`

function Form() {
  const { setUser } = useUserContext()
  const history = useHistory()
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
  })

  const { id, password } = formValues

  const handleFormValues = ({ target: { id, value } }) => {
    setFormValues({
      ...formValues,
      [id]: value,
    })
  }

  const handleSubmit = () => {
    // 1. 요청
    // 2. 성공 -> setUser -> main
    // 3. 실패 -> alert
    console.log('로그인 요청!')

    setUser({
      id,
      password, // password: password
      name: '하이하이',
    })
    history.replace('/')
  }

  const isSubmiitable = id && password

  return (
    <Container>
      <Input
        id="id"
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={handleFormValues}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handleFormValues}
      />
      <Button
        disabled={!isSubmiitable}
        onClick={isSubmiitable ? handleSubmit : () => {}}
      >
        로그인
      </Button>
    </Container>
  )
}

export default Form
