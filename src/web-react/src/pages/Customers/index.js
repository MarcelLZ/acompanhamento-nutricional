import React from 'react'

import { WithNavigation } from '../../components/Page/WithNavigation'
import { CustomerList } from '../../components/CustomerList'

import { Content } from './styles'

function Customers () {
  return (
    <WithNavigation>
      <Content>
        <CustomerList />
      </Content>
    </WithNavigation>
  )
}

export { Customers }