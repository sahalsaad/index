import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import AvatarHolder from './AvatarHolder'
import Bio from './Bio'
import Social from './Social'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Content = styled.div`
position: absolute;
box-sizing: border-box;
text-align: center;
width: 400px;
height: 450px;
top: 250px;
padding: 0px 20px;
margin: auto;
background: #fff;
border-radius: 0px 0px 5px 5px;
box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.5);
`

const Name = styled.h3`
font-family: 'Oswald', sans-serif;
font-size: 2.2em;
line-height: 1em;
`

const App = () => (
  <Container>
    <Avatar />
    <AvatarHolder />
    <Content>
      <Name>Sahal Saad</Name>
      <Bio />
      <Social />
    </Content>
  </Container>
)

export default App
