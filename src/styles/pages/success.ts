import { styled } from ".."

export const SuccessContainerStyled = styled("main", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        transition: 'background 0.3s',
        textDecoration: 'none',
        fontWeight: 'bold',
        
        '&:hover': {
            color: '$green300',

        }
    },

    strong: {

    }
})

export const ImageContainerStyled =  styled('div', {
    display: 'flex',
    marginBottom: '3rem',
    
    
    section: {
        
    }
})

export const ImageContentStyled =  styled('section', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    width: 140,
    height: 140,
    borderRadius: '50%',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-3.7rem',
    



    img: {
        objectFit: 'cover',
    }
})