import { Content, Overlay } from '@radix-ui/react-dialog'
import { styled } from '..'

export const OverlayStyled = styled(Overlay, {
    position: 'fixed',
    width: '100vw',
    height: '100vw',
    opacity: 1,
    backgroundColor: '$gray800'
})

export const Contents = styled(Content, {
    position: 'fixed',
    width: '100rem',
    height: '100rem',
    backgroundColor: '$gray800',
    opacity: 1,
})