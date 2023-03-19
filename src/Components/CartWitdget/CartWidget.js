import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {
        const {cart} = useContext(CartContext);
        console.log(cart);
    return (
        <div>
            <img alt="12" src="/images/carrito.png" width="50px" />
        {cart?.length}
        </div>
    );
}

export default CartWidget;