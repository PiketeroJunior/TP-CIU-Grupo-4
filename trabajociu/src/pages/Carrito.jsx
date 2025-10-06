import styles from './Carrito.module.css'

function Carrito({carrito, valorTotal, cantTotal, setCarrito, setValorTotal, setCantTotal}) {
    const estaVacio = carrito.length === 0;

    function vaciarCarrito() {
        setCarrito([]);
        setValorTotal(0);
        setCantTotal(0);
    }

    function eliminarProducto(producto){
        const carritoSinProducto = carrito.filter(item => item.id !== producto.id)
        setCantTotal(cantTotal - producto.cantidad)
        setValorTotal(valorTotal - (producto.precio * producto.cantidad))
        setCarrito(carritoSinProducto)
    }

    function pagarCarrito(){
        alert("Pago realizado con exito! Gracias por su compra.")
        vaciarCarrito()
    }

    function aumentarCantidad(producto){
        const nuevosProductos = carrito.map(item => 
            item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item
        )
        setCarrito(nuevosProductos)
        setCantTotal(cantTotal + 1)
        setValorTotal(valorTotal + producto.precio)
    }

    function disminuirCantidad(producto){
        if(producto.cantidad > 1){
            const nuevosProductos = carrito.map(item => 
            item.id === producto.id ? {...item, cantidad: item.cantidad - 1} : item
            
        )
        setCarrito(nuevosProductos)
        setCantTotal(cantTotal - 1)
        setValorTotal(valorTotal - producto.precio)
        }
    }

    return (
        <div className='carritoContainer'>
            {estaVacio ? (
                <h2>El carrito está vacío</h2>
            ) : (
                carrito.map(producto =>
                    <div className={styles.productoEnCarrito} key={producto.id}>
                        <div className={styles.informacionProducto}>
                            <h3>{producto.titulo}</h3>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                        <div className={styles.cantidadProducto}>
                            <button onClick={() => disminuirCantidad(producto)} >-</button>
                            <span className={styles.cantidad}>{producto.cantidad}</span>
                            <button onClick={() => aumentarCantidad(producto)} >+</button>
                            <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
                        </div>
                    </div>
                )
            )}
            <div className={styles.totalContainer}>
                <h3>Productos: {cantTotal}</h3>
                <h3>{`Total: $ ${valorTotal}`}</h3>
                <button className={styles.botonPagar} onClick={pagarCarrito}>Pagar</button>
                <button className={styles.botonVaciar} onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div >
    )
}

export default Carrito