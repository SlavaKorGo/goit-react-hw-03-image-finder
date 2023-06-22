import React from "react";
import css from './Modal.module.css'

export class Modal extends React.Component {
    
    componentDidMount () {
        window.addEventListener('keydown', this.handleClick)
    }

    handleClick = e => {
        if (e.code === 'Escape') this.props.onClose();
      };

      onOverlayClickClose = e => {
        if (e.currentTarget === e.target) this.props.onClose(); 
      };

    render() {
        const {url, alt} = this.props; 

        return (
            <div className={css.Overlay } onClick={this.onOverlayClickClose}>
            <div className={css.Modal}>
              <img src={url} alt={alt} />
            </div>
          </div>
        )
    }
};