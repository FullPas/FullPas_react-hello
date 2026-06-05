import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="d-inline-block align-top m-2" style={{ width: "25rem" }}>

      {/* Tarjeta centrada */}
      <div className="card p-5 shadow text-center">
        <h3 className="mb-3">Mi Tarjeta</h3>
        <p>Pulsa el botón para abrir el modal.</p>

        <button
          className="btn btn-primary"
          onClick={() => setOpened(true)}
        >
          Abrir Modal
        </button>
      </div>

      {/* Modal Bootstrap
      {opened && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Hello BreatheCode</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpened(false)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Quería dedicarle más tiempo</a>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpened(false)}
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}*/}
    </div>
  );
};

ReactDOM.render(<Modal />, document.getElementById("root"));

export default Modal;