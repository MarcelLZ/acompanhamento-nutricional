import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  
  border: 1px solid #ccc;
  background-color: #fff;

  -webkit-box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 21px -10px rgba(0,0,0,0.3);
`

export const THead = styled.thead``

export const TR = styled.tr`
  &:hover {
    background-color: #eee;
  }
`

export const TH = styled.th`
  border-bottom: 1px solid #ccc;
  padding: 10px;
`

export const TBody = styled.tbody``

export const TD = styled.td`
  padding: 10px;
`