import React from "react";

const PaymenentAlert = (props) => {
  return (
    <div className="alert alert-info">
      <p>
        Silahkan Melakukan Pembayaran Rp. 3.000.000 ke <br />
        <strong>{props.bankName} 324525142882575 AN. Lets Flight Indonesia</strong>
      </p>
    </div>
  );
};

export default PaymenentAlert
