import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  position: relative;
  margin-right: 1.25rem;
`
const List = styled.div`
  position: absolute;
  z-index: 12;
  top: 100%;
  left: 0;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 0 0 1rem 1rem;
  box-shadow: -0.25rem 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
`
const ButtonDropdown = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 0.875rem;
  text-decoration: none;
  color: ${(props) =>
    props.theme.colors[props.current || props.open ? 'main' : 'text']};
  background-color: ${(props) =>
    props.open ? props.theme.colors.mainLight : 'transparent'};
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainLight};
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.125rem;
    background-color: ${(props) => props.theme.colors.main};
    opacity: ${(props) => (props.current ? 1 : 0)};
  }

  svg {
    margin-left: 0.5rem;
    transform: rotate(${(props) => (props.open ? 180 : 0)}deg);
    transition: transform 200ms ease-out;

    path {
      fill: ${(props) =>
        props.theme.colors[props.current || props.open ? 'main' : 'text']};
    }
  }
`
export default function Dropdown(props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(false)
  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <Wrapper>
      <ButtonDropdown
        to={props.to}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((prevOpen) => !prevOpen)
        }}
        open={open}
        current={props.current}
        as={props.children ? 'button' : MagicLink}
      >
        {props.label}
        {'  '}
        {props.children && (
          <svg width='10' height='6' viewBox='0 0 10 6' fill='none'>
            <path d='M4.99997 5.85012C4.82075 5.85012 4.64155 5.78169 4.50491 5.64512L0.205141 1.3453C-0.0683804 1.07178 -0.0683804 0.628311 0.205141 0.3549C0.478552 0.0814886 0.921932 0.0814886 1.19548 0.3549L4.99997 4.15961L8.80449 0.355032C9.07801 0.0816214 9.52134 0.0816214 9.79473 0.355032C10.0684 0.628443 10.0684 1.07191 9.79473 1.34543L5.49503 5.64525C5.35832 5.78184 5.17912 5.85012 4.99997 5.85012Z' />
          </svg>
        )}
      </ButtonDropdown>
      {props.children && open && <List>{props.children}</List>}
    </Wrapper>
  )
}
Dropdown.Item = styled(MagicLink)`
  position: relative;
  display: block;
  padding: 0.75rem 2.5rem 0.5rem 1.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors[props.current ? 'main' : 'text']};
  text-decoration: none;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 0.0625rem;
    background-color: ${(props) => props.theme.colors.secondDark};
  }
  &:last-child {
    padding: 0.75rem 1.5rem 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondDark};
  }
`
