import styles from './Carrito.module.css'

function Carrito(carrito, valorTotal, cantTotal, setCarrito, setValorTotal, setCantTotal) {
    const estaVacio = carrito.length === 0;

    function vaciarCarrito() {
		setCarrito([]);
		setValorTotal(0);
		setCantTotal(0);
	}

    return (
        <div className='carritoContainer'>
            {estaVacio === 0
                ? <h2>El carrito está vacío</h2>
                : carrito.map(producto => (
                    <div className={styles.productoEnCarrito}>
                        <div className={styles.informacionProducto}>
                            <h3>{producto.titulo}</h3>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                        <div className={styles.cantidadProducto}>
                            <button >-</button>
                            <span className={styles.cantidad}>{producto.cantidad}</span>
                            <button >+</button>
                            <button >Eliminar</button>
                        </div>
                    </div>
                ))}
            <div className={styles.totalContainer}>
                <h3>Productos: {cantTotal}</h3>
                <h3>Total: $ {valorTotal}</h3>
                <button className={styles.botonPagar} >Pagar</button>
                <button className={styles.botonVaciar} onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div >
    )
}

export default Carrito