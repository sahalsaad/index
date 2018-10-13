import React from 'react'
import styled from 'styled-components'
import avatar from './avatar.png'

const AvatarContainer = styled.div`
position: relative;
`

const Image = styled.img`
position: absolute;
z-index: 100;
height: 140px;
width: 140px;
top: -12px;
left: 124px;
border-radius: 100%;
border: 6px solid #fff;
`

const Avatar = () => (
  <AvatarContainer>
    <Image src={avatar} />
  </AvatarContainer>
)

export default Avatar
