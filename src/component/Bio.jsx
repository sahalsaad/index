import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const BioParagraph = styled.p`
font-family: 'David Libre', serif;
font-size: 1.1em;
line-height: 1.5em;
`

const Bio = () => (
  <BioParagraph>
    I'm a full stack developer. <br />
    I have been dabbling in web development for the past {moment(['2015', '01', '01']).fromNow(true)}, often
    experimenting and learning new things. My passion drives me to stay
    updated with the latest trends in the field of cyber, web and information technology.
  </BioParagraph>
)

export default Bio
