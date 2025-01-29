const CartConditional = ({items}) => {
    return (
        <div>
            <h2>Despensa Familiar Online 🛒</h2>
            <ul>
                {items.length > 0 ? items.map((item, index) => ( 
                    <p key={index}>{item}</p> 
                )) : <p>Carrito vacío</p>}
            </ul>
        </div>
    )
}

export default CartConditional