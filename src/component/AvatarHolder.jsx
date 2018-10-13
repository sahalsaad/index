import styled from 'styled-components'

const AvatarHolder = styled.div`
position: relative;
top: 150px;
height: 150px;
width: 400px;
border-radius: 5px 5px 0px 0px;
overflow: hidden;
:before {
  content: '';
  position: absolute;
  top: -110px;
  left: 100px;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 0px 200px #fff;
}
`

export default AvatarHolder
