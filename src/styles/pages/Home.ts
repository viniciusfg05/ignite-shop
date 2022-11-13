import { styled } from "..";

export const HomeContainerStyled = styled("main", {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
    overflow: 'hidden',
})

export const ProductStyled = styled("a", {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    width: '100%',
    // padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 540,

    iframe: {
        // padding: '0.25rem',
        cursor: 'pointer',
         borderRadius: 8,

        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
    minHeight: 790,

        '.mgp_container .mgp_gridMenu .mgp_thumbnailsGrid .mgp_gridItem .mgp_gridThumb': {
            display: 'none',
            width: 10,

        }

    },
    

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: "absolute",
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
        overflow: 'hidden',

        header: {
            display: 'flex',
            flexDirection: 'column',

            strong: {
                fontSize: '$lg',
            },
        
            span: {
                fontSize: '$xl',
                color: '$green300',
                fontWeight: 'bold',
            }
        },

    },
    
    '&:hover': {
        footer: {
            
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }

})


export const CardConteinerStyled = styled("button", {
    border: 'none',
    width: '3.5rem',
    height: '3.5rem',
    backgroundColor: '$green500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    cursor: 'pointer',
})