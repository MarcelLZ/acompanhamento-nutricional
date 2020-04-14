import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ outlined }) => outlined ? '#00B049' : '#fff' };
  background: ${({ outlined }) => outlined ? '#fff' : '#00B049'};
  border-radius: 2px;
  padding: 8px;
  border: 2px solid ${({ outlined }) => outlined ? '#00B049' : '#fff' };

  &:hover {
    color: ${({ outlined }) => outlined ? '#00B049' : '#fff' };
    text-decoration: none;
  }
`

export { Link }