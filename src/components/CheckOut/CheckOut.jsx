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
        <form className="mt-3">
          <h2>Completa el Formulario</h2>
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
          <button
            disabled={
              !(
                buyer.nombre !== "" &&
                buyer.telefono !== "" &&
                buyer.email !== ""
              )
            }
            className="btn btn-primary"
            onClick={handleCheckout}
          >
            Confirmar Compra
          </button>
          <button className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
}

export default CheckOut;