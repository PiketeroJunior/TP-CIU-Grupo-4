import styles from './Carrito.module.css'
import Boton from '../components/Boton/Boton';
import { useState } from 'react';
import ModalConfirm from '../components/ModalConfirm/ModalConfirm';

function Carrito({ carrito, valorTotal, cantTotal, setCarrito, setValorTotal, setCantTotal }) {
    const estaVacio = carrito.length === 0;
    const [mostrarExito, setMostrarExito] = useState(false);

    function vaciarCarrito() {
        setCarrito([]);
        setValorTotal(0);
        setCantTotal(0);
    }

    function eliminarProducto(producto) {
        const carritoSinProducto = carrito.filter(item => item.id !== producto.id)
        setCantTotal(cantTotal - producto.cantidad)
        setValorTotal(valorTotal - (producto.precio * producto.cantidad))
        setCarrito(carritoSinProducto)
    }

    function pagarCarrito() {
        setMostrarExito(true)
        vaciarCarrito()
    }

    function aumentarCantidad(producto) {
        const nuevosProductos = carrito.map(item =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
        setCarrito(nuevosProductos)
        setCantTotal(cantTotal + 1)
        setValorTotal(valorTotal + producto.precio)
    }

    function disminuirCantidad(producto) {
        if (producto.cantidad > 1) {
            const nuevosProductos = carrito.map(item =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item

            )
            setCarrito(nuevosProductos)
            setCantTotal(cantTotal - 1)
            setValorTotal(valorTotal - producto.precio)
        }
    }

    return (
        <div className={styles.carritoContainer}>
            {estaVacio ? (
                <h2 id={styles.carritoVacio}>El carrito está vacío</h2>
            ) : (
                <>
                    {carrito.map(producto =>
                        <div className={styles.productoEnCarrito} key={producto.id}>
                            <div className={styles.informacionProducto}>
                                <h5>{producto.titulo}</h5>
                                <p id={styles.precio}>Precio: ${producto.precio}</p>
                            </div>
                            <div className={styles.accionesProducto}>
                                <div className={styles.cantidadProducto}>
                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                        <button type="button" className="btn btn-outline-dark" onClick={() => disminuirCantidad(producto)}>
                                            -
                                        </button>
                                        <button type="button" className="btn btn-outline-dark">{producto.cantidad}</button>
                                        <button type="button" className="btn btn-outline-dark" onClick={() => aumentarCantidad(producto)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.eliminarProducto}>
                                    <Boton texto='Eliminar' onClick={() => eliminarProducto(producto)} variant="secundario"/>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.totalContainer}>
                        <h5 id={styles.precioTotal}>{`Total: $ ${valorTotal}`}</h5>
                        <button type="button" className="btn btn-outline-success" onClick={pagarCarrito}>Pagar</button>
                        <button type="button" className="btn btn-outline-danger"onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                </>
            )}
            <ModalConfirm
            isOpen={mostrarExito}
            titulo="¡Gracias por tu compra!"
            mensaje="El pago se realizó con éxito."
            onClose={() => setMostrarExito(false)}
            textoBoton="cerrar"
            variantBoton="secundario"
            ></ModalConfirm>
        </div >
    )
}

export default Carrito