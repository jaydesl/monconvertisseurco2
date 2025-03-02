import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import TextInput from 'components/base/TextInput'

const Wrapper = styled.div`
  position: relative;
  align-self: flex-end;
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  ${(props) => props.theme.mq.small} {
    margin: 0;
    align-self: center;
  }
`
const SortButton = styled(Button)`
  padding: 0.5em;
  font-size: 0.875rem;
  border-radius: 0.625em;

  svg {
    width: 1rem;
    height: auto;
  }
`
const SearchInput = styled(TextInput)`
  width: 12rem;
  margin: 0;
  font-size: 0.875rem;
`
const SortPanel = styled.div`
  position: absolute;
  right: 2.5rem;
  z-index: 120;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 0.5rem;
  box-shadow: -0.25rem 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  ${(props) => props.theme.mq.small} {
    right: auto;
    top: 2.5rem;
  }
`
const Option = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  white-space: nowrap;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.secondDark : 'transparent'};
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors[props.selected ? 'secondDark' : 'mainLight']};
  }
`
export default function Search(props) {
  const [displaySort, setDisplaySort] = useState(false)

  return (
    <Wrapper>
      <SearchInput
        value={props.search}
        onChange={({ value }) => props.setSearch(value)}
        placeholder={'Recherchez'}
      />
      <SortButton
        onClick={() => setDisplaySort((prevDisplaySort) => !prevDisplaySort)}
      >
        <svg x='0px' y='0px' viewBox='0 0 489.389 489.389'>
          <path
            d='M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9
			l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9
			C270.694,347.002,269.694,333.402,261.294,326.102z'
          />
          <path
            d='M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1
			c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8
			c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z'
          />
        </svg>
      </SortButton>
      {displaySort && (
        <SortPanel>
          <Option
            onClick={() => {
              props.setSorting('alph_desc')
              setDisplaySort(false)
            }}
            selected={props.sorting === 'alph_desc'}
          >
            A => Z
          </Option>
          <Option
            onClick={() => {
              props.setSorting('alph_asc')
              setDisplaySort(false)
            }}
            selected={props.sorting === 'alph_asc'}
          >
            Z => A
          </Option>
          <Option
            onClick={() => {
              props.setSorting('co2_desc')
              setDisplaySort(false)
            }}
            selected={props.sorting === 'co2_desc'}
          >
            Du + émetteur au - émetteur
          </Option>
          <Option
            onClick={() => {
              props.setSorting('co2_asc')
              setDisplaySort(false)
            }}
            selected={props.sorting === 'co2_asc'}
          >
            Du - émetteur au + émetteur
          </Option>
        </SortPanel>
      )}
    </Wrapper>
  )
}
