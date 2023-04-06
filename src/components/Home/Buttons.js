import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const history = useHistory();

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const handleClick = () => {
    history.push('/Login');
  };

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
