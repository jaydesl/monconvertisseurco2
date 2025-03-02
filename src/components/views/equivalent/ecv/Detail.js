import React, { useState } from 'react'
import styled from 'styled-components'

import { formatNumberPrecision, formatPercent } from 'utils/formatters'

import ButtonLink from 'components/base/ButtonLink'

const Toggle = styled(ButtonLink)`
  align-self: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 2rem;
  }
`
const Wrapper = styled.table`
  margin-bottom: 2.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;

  ${(props) => props.theme.mq.small} {
    padding: 0.25rem;
    font-size: 0.75rem;
  }
`
const Item = styled.tr`
  td {
    padding: 0.5rem;
    white-space: nowrap;
    border-bottom: 0.0675rem solid ${(props) => props.theme.colors.secondDark};

    ${(props) => props.theme.mq.small} {
      padding: 0.5rem 0.25rem;
    }
  }
  &:last-child {
    td {
      border: none;
    }
  }
`
const Label = styled.td``
const Value = styled.td`
  font-size: 0.625em;
  font-weight: 300;
  text-align: right;

  strong {
    font-size: 1.6em;
  }
`
const Percent = styled.td`
  text-align: right;
`
export default function Detail(props) {
  const [details, setDetails] = useState(false)

  return (
    <>
      <Toggle
        onClick={() => setDetails((prevDetails) => !prevDetails)}
        className='noscreenshot'
      >
        {details ? 'Cacher' : 'Voir'} le détail
      </Toggle>
      {details && (
        <Wrapper>
          <tbody>
            {props.ecv
              .sort((a, b) => (a.value < b.value ? 1 : -1))
              .map((item) => (
                <Item key={item.label}>
                  <Label>{item.label}</Label>

                  <Percent>{formatPercent(item.value, props.total)} %</Percent>
                  <Value>
                    <strong>{formatNumberPrecision(item.value)}</strong> CO
                    <sub>2</sub>e
                  </Value>
                </Item>
              ))}
            <Item key={'total'}>
              <Label>
                <strong>Total</strong>
              </Label>
              <Percent></Percent>
              <Value>
                <strong>{formatNumberPrecision(props.total)}</strong> CO
                <sub>2</sub>e
              </Value>
            </Item>
          </tbody>
        </Wrapper>
      )}
    </>
  )
}
