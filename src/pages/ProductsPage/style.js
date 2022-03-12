import styled from 'styled-components';

export const ContainerStyled = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

    @media (min-width: 998px) {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }

    @media (min-width: 1281px) {
        grid-template-columns: repeat(4,minmax(0,1fr));
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(5,minmax(0,1fr));
    }
`