import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-transform: uppercase;
  color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };
  background: ${({ outlined, isDark }) => outlined ? '#fff' : isDark ? '#3F3D56' : '#00B049'};
  border-radius: 2px;
  padding: 8px;
  border: 2px solid ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };

  &:hover {
    color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-transform: uppercase;
  color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };
  background: ${({ outlined, isDark }) => outlined ? '#fff' : isDark ? '#3F3D56' : '#00B049'};
  border-radius: 2px;
  padding: 8px;
  border: 2px solid ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };

  &:hover {
    color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56' : '#00B049' : '#fff' };
    text-decoration: none;
  }
`

export { Link, StyledButton }