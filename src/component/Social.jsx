import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBitbucket, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocailContainer = styled.div`
padding-top: 0px;
`

const Title = styled.h3`
font-family: 'Shadows Into Light', fontAwesome, cursive;
font-size: 3em;
line-height: .1em;
`

const ListContainer = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const List = styled.li`
box-sizing: border-box;
font-size: 2.5em;
padding: 0 10px;
line-height: .1em;
display: inline;
`

const Link = styled.a`
text-decoration: none;
color: #202D3C;
-webkit-transition: all 300ms linear;
display: inline-block;

:hover {
    color: #2786D5;
    -webkit-transform: scale(1.3);
}
`

const accounts = [{
  title: 'github',
  link: 'https://github.com/sahalsaad',
  icon: faGithub
}, {
  title: 'linkedin',
  link: 'https://www.linkedin.com/in/sahalsaad',
  icon: faLinkedin
}, {
  title: 'bitbucket',
  link: 'https://bitbucket.org/sahalswappo',
  icon: faBitbucket
}]

const Social = () => (
  <SocailContainer>
    <Title>Follow me</Title>
    <ListContainer>
      {
        accounts.map(({ title, link, icon }) =>
          (<List key={title}><Link title={title} href={link}><FontAwesomeIcon icon={icon} /></Link></List>))
      }
    </ListContainer>
  </SocailContainer>
)

export default Social
