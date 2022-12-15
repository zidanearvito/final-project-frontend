import React from "react";

import Button from './Button';
import classes from './Modal.module.css'

const Modal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <div className={`${classes.modal} ${classes.card}`}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  )
};

export default Modal;
