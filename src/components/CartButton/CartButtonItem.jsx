import { ButtonStyled } from "../ProductItem/styles"
import { Button } from 'reactstrap';
import { CartButtonStyled } from './styles';

const CartButtonItem = ({title, price, id, onClick, quantity}) => {
    return (
        <div className="d-flex flex-column px-3">
            <div className="d-flex justify-content-between">
                <div className="w-70"><p>{title}</p></div>
                <div styles={{float: 'right'}}><p>{`$ ${price}`}</p></div>
            </div>
            <div className="d-flex justify-content-center">
                <CartButtonStyled onClick={() => onClick(id, false)}><p>-</p></CartButtonStyled>
                <p className="mx-2">{quantity}</p>
                <CartButtonStyled onClick={() => onClick(id)}><p>+</p></CartButtonStyled>
            </div>
        </div>
    )
} 

export default CartButtonItem