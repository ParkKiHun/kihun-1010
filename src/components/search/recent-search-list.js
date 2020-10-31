import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 18px;
`

const HeaderContainer = styled.div`
  overflow: hidden;
`

const Title = styled.span`
  float: left;
  font-weight: 400;
  color: #666;
`
const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const ListContainer = styled.ul`
  margin: 10px 0;
`

const KeywordContainer = styled.li`
  padding: 10px 0px;
`

const Keyword = styled.span`
  font-size: 18px;
  font-weight: 400;
`

const RemoveButton = styled.button`
  float: right;
  color: #0cde8b;
  border: 1px solid #0cde8b;
  padding: 3px 5px;
  border-radius: 15px;
`

function RecentSearchList({ keywords, onRemoveKeyword, onAllRemoveKeywrod }) {
  if (!keywords.length) {
    return <Container>최근에 검색어가 없습니다.</Container>
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>최근 검색어</Title>
        <RemoveText
          onClick={() => {
            onAllRemoveKeywrod()
          }}
        >
          전체삭제
        </RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, label }) => {
          return (
            <KeywordContainer key={id}>
              <Keyword>{label}</Keyword>
              <RemoveButton
                onClick={() => {
                  onRemoveKeyword(id)
                }}
              >
                삭제
              </RemoveButton>
            </KeywordContainer>
          )
        })}
      </ListContainer>
    </Container>
  )
}

export default RecentSearchList
