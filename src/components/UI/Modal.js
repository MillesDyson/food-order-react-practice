import React from 'react';
import classes from './Modal.module.css';
import reactDom from 'react-dom';

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverLay = props => {
  return( 
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')

const Modal = props => {
  return(
    <React.Fragment>
      {reactDom.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
      {reactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;