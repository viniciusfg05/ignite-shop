import { styled } from ".."

import {Button, DrawerContent} from '@chakra-ui/react'

export const NumberCardStyled = styled("p", {
    width: '2rem',
    height: '2rem',
    position: 'absolute',
    backgroundColor: '$green300',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-3rem',
    marginLeft: '2rem',
    border: `5px solid #121214`

})

export const DrawerContentStyled = styled(DrawerContent, {
    // width: '3rem',
    // height: '3rem',
    // background: '$gray800',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 8,


})