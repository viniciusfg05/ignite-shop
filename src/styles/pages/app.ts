import { styled } from "..";


export const ContainerStyled = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '100vh',
    justifyContent: 'center',
})

export const HeaderStyled = styled("header", {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto'
})

export const CardConteinerStyled = styled("div", {
    width: '3rem',
    height: '3rem',
    backgroundColor: '$gray800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

    i: {
        fontWeight: "bold"
    }
})

export const NumberCardStyled = styled("p", {
    width: '1.5rem',
    height: '1.5rem',
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