import { styled } from ".."

import {Button, DrawerContent, Flex} from '@chakra-ui/react'
import { getDisplayName } from "next/dist/shared/lib/utils"

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
    height: '100%',

    h1: {
        marginBottom: '2rem',
    },
    
    section: {
        display: 'flex',
        marginBottom: '1.5rem',

        img: {
            objectFit: 'cover',
            background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
            width: '6.31rem',
            borderRadius: 7,

        },

        main: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1.125rem',
        },

        button: {
            display: 'flex',
            justifyContent: 'flex-start',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    footer: {
        marginTop: 'auto',

        section: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            p: {
                fontSize: '1rem',
                color: '$gray100'
            },

            span: {
                fontSize: '1.1rem',
                color: '$gray100'
            },

            strong: {
                fontSize: '1.5rem',

            }
        },

        button: {
            backgroundColor: '$green500',
            width: '100%',
            height: '4.31rem',
            borderRadius: 7,
            fontWeight: 'bold',
            marginTop: '3.56rem',
            transition: 'background-color 0.3s',

            '&:hover': {
                backgroundColor: '$green300',
            }
        }
    }
})

export const ProductStyled = styled('div', {

})