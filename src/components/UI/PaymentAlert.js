import React from "react";
import classes from "./PaymentAlert.module.css"

const PaymenentAlert = (props) => {
  return (
    <div className="alert alert-info">
      <div className={classes.logo}>
        <img src={props.logo} alt="bank logo" />
      </div>
      <p>
        Silahkan Melakukan Pembayaran Sebesar Rp. {props.price} ke <br />
        <strong>
          {props.bankName} {props.number} AN. {props.name}
        </strong>
      </p>
    </div>
  );
};

export default PaymenentAlert;
