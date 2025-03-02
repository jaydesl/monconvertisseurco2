import React from 'react'
import styled from 'styled-components'

import Section from 'components/base/Section'

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`
const Text = styled.div``
export default function Details(props) {
  return (
    <Section id='sources'>
      <Section.Content>
        <Title>Sources et hypothèses</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: props.equivalent.sources,
          }}
        />
      </Section.Content>
    </Section>
  )
}
