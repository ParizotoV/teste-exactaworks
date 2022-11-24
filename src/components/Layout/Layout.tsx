import { Box, Typography } from '@mui/material'
import React from 'react'

import {
  CircleDivider,
  Container,
  Header,
  Image,
  LayoutProps,
  SubHeader,
  Wrapper
} from '.'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Box display="flex" alignItems="center">
          Como funciona
          <CircleDivider />
          Privacidade
          <CircleDivider />
          Ajuda
        </Box>
      </Header>
      <SubHeader>
        <Box display="flex" width="72%">
          <Image src="/imgs/icon.png" alt="icon" width="70px" height="70px" />
          <Box marginLeft="12px">
            <Typography fontSize="10pt" fontWeight="bold" color="#5080d5">
              MEU NOME É:
            </Typography>
            <Typography fontWeight="500" fontSize="16pt">
              ExactaWorks
            </Typography>
            <Box display="flex">
              <Typography fontSize="10pt" fontWeight="bold" color="#5080d5">
                CPF:
              </Typography>
              <Typography marginLeft="4px" fontSize="10pt">
                237.818.320-82
              </Typography>
            </Box>
          </Box>
        </Box>
      </SubHeader>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Layout
