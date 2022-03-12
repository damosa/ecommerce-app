const CartButtonItem = ({title, price}) => {
    return (
        <div className="d-flex flex-column px-3">
            <div className="d-flex justify-content-between">
                <div className="w-70"><p>item</p></div>
                <div styles={{float: 'right'}}><p>{`$ 3.000`}</p></div>
            </div>
        </div>
    )
} 

export default CartButtonItem