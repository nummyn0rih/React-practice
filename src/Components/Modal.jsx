import cn from 'classnames';
import React from 'react';

const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button onClick={toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
);

const Body = ({ children }) => <p className="modal-body">{children}</p>;

const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { children, isOpen } = this.props;
    const style = { display: isOpen ? 'block' : 'none' };
    const modalClass = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    return (
      <div className={modalClass} style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
