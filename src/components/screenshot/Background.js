import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    !props.background || props.hover
      ? 'transparent'
      : props.theme.colors.second};
  border: 0.125rem solid
    ${(props) => (props.hover ? props.theme.colors.main : 'transparent')};
  border-radius: 1rem;
  transition: all 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    border: none;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;

  ${(props) => props.theme.mq.small} {
    padding: 0.75rem 0.75rem 1.5rem;
  }
`
export default function Background(props) {
  return (
    <>
      <Wrapper
        className='noscreenshot'
        background={props.background}
        hover={props.hover}
      />
      <Content>{props.children}</Content>
    </>
  )
}
