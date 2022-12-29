import React from "react";
import warning from "../DashboardAdmin/Content/img/warning.png";
import classes from "./Modal.module.css";

const ModalConfirm = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <div className={`${classes.modal} ${classes.card}`}>
        <div className={classes.content}>
          <div className="modal-body text-center">
            <img src={warning} alt="icon" className="img-warning img-fluid" />
            <h3>Batalkan pembayaran ?</h3>
            <button
              type="button"
              className="btn btn-blue me-3 mt-2"
              onClick={props.onClick}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={props.onConfirm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfirm;
