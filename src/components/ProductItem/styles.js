import styled from 'styled-components';
import { Card, Button } from 'reactstrap';

export const CardStyled = styled(Card)`
    transition: all .3s ease;
    opacity: 1;
    :hover {
        img {
            opacity: 0.6; 
        }
        box-shadow: 0 1px 10px rgb(0 0 0 / 10%), 0 4px 5px rgb(0 0 0 / 15%), 0 2px 4px rgb(0 0 0 / 20%);
    }
`;

export const ButtonStyled = styled(Button)`
    background: #d0006f;
    border-color: #d0006f;
    border-radius: 20px;
`;