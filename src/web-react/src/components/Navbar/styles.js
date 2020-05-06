import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdFace } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;

  -webkit-box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
`

export const Section = styled.div`
  display: flex;
`

export const Brand = styled.img`
  width: 140px;
  margin: 0 20px;
`

export const Menu = styled.ul`
  display: flex;

  list-style: none;
  padding: 0;
  margin: 0;
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-right: solid 1px #ccc;

  &:last-child {
    border: 0;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #4B4B4B;

  &:hover {
    color: #000;
    text-decoration: none;
  }

  > svg {
    font-size: 20px;
    margin-right: 10px;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`

export const Avatar = styled(MdFace)`
  font-size: 50px;
  color: #3E496D;
`

export const Name = styled.span`
  margin: 0 10px;
`

export const SignOut = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  border-left: 1px solid #ccc;

  background-color: transparent;
  color: #ccc;

  > svg {
    font-size: 20px;
    color: #ccc;
  }
`