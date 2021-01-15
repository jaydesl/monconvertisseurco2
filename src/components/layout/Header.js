import React, { useContext } from 'react'
import styled from 'styled-components'

import StyleContext from 'utils/StyleContext'
import CO2NumberContext from 'utils/CO2NumberContext'
import { mq } from 'utils/styles'

const Wrapper = styled.div`
  max-width: 45em;
  margin: 2em auto 3em;

  ${mq.small} {
    margin: 2em 3vw 3em;
  }
`
const Title = styled.h1`
  margin-bottom: 0;
  font-size: 4.9em;
  font-weight: 900;
  line-height: 1.2;

  ${mq.small} {
    font-size: 9.2vw;
  }
`
const Big = styled.span`
  font-size: 4rem;
`
const Subtitle = styled.div`
  max-width: 30em;
  line-height: 1.5;
`
const Why = styled.div`
  text-align: right;
  margin: 0 1em 1em 0;

  a {
    color: ${(props) => props.theme.colors.text};
  }
`
const Sup = styled.sup`
  font-weight: 700;
  line-height: 0;
  cursor: pointer;
`
export default function Header() {
  const { displayTitle } = useContext(StyleContext)
  const { setCO2EPopin } = useContext(CO2NumberContext)
  return (
    <Wrapper>
      {displayTitle && (
        <>
          <Title>
            2 tonnes de CO2,
            <br />
            <Big>ça représente quoi ?</Big>
          </Title>
          <Why>
            <a
              href='https://ecolab.ademe.fr/blog/carbone/historique-calculateur-carbone-nos-gestes-climat-micmac-coach-carbone.md'
              target='_blank'
              rel='noopener noreferrer'
            >
              Et pourquoi s'en débarasser ?
            </a>
          </Why>
          <Subtitle>
            Voici quelques équivalents pour se figurer ce qu’un poids en CO
            <sub>2</sub>e<Sup onClick={() => setCO2EPopin(true)}>?</Sup>{' '}
            représente en objet ou activité du quotidien...
          </Subtitle>
        </>
      )}
    </Wrapper>
  )
}
