import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Context";
import { createOrder } from "../../Services/Firebase";
import swal from 'sweetalert';
import "./Check.css"

function CheckOut() {
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [orderConfirmation, setOrderConfirmation] = useState({
    orderId: null,
    showMessage: false,
  });

  const navigate = useNavigate();
  const { Cart, calcularTotal, vaciarCarro } = useContext(CartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: Cart,
      buyer: buyer,
      date: new Date().toISOString(),
      total: calcularTotal(),
    };

    try {
      const newOrderId = await createOrder(orderData);
      vaciarCarro();
      setOrderConfirmation({ orderId: newOrderId, showMessage: true });
      mostrarAlerta(); 
    } catch (error) {
      alert(`No se pudo realizar la compra: ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      nombre: "",
      telefono: "",
      email: "",
    });
  }

  const mostrarAlerta = () => {
    swal("¡Gracias Por tu compra!", "Tu compra se realizó exitosamente.", "success");
  };
const AlertadeError =()=>{
  swal("No se pudo realizar la compra", "la compra fallo.", "warning");
}
  return (
    <div className="container mt-5 ">
      {orderConfirmation.showMessage ? (
        <div className="text-center dispocion">
          <h2 className="card-text Compra">¡Gracias por tu compra!</h2>
          <p className="card-title NumeroOrden">Tu número de orden es: {orderConfirmation.orderId}</p>
          <Link to="/"><button className="btn btn-success ubicacionBoton">Volver Al Inicio</button></Link>
        </div>
      ) : (
        <form className="Formulario">
          <svg xmlns="http://www.w3.org/2000/svg" width="156" height="156" fill="green" className="bi bi-list-task centrar" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
</svg>
          <h2 className="text-center">Ya casi! estas a solo 1 paso</h2>
          <h3 className="text-center" >Completa el Formulario Con tus datos!</h3>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre Completo
            </label>
            <input
              value={buyer.nombre}
              name="nombre"
              type="text"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono + El area
            </label>
            <input
              value={buyer.telefono}
              name="telefono"
              type="text"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={buyer.email}
              name="email"
              type="email"
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="Espacio">
          <button
            disabled={
              !(
                buyer.nombre !== "" &&
                buyer.telefono !== "" &&
                buyer.email !== ""
              )
            }
            className="btn btn-success "
            onClick={handleCheckout}
          >
            Confirmar Compra
          </button>
          <button className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancelar
          </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CheckOut;